import { NextResponse } from "next/server";

const createApiPayload = (action, options = {}) => ({
  key: process.env.API_KEY,
  username: process.env.API_USERNAME,
  password: process.env.API_PASSWORD,
  action,
  ...options,
});

const transformChild = (child) => {
  if (!child) return null;
  return {
    id: child.id,
    name: child[4046],
    subTitle: child[4047],
    link: child[4045],
    logo: child[4044],
  };
};

// app/api/app_data/route.js
export async function GET(params) {
  const api = process.env.BASE_URL;
  const API_JSON = {
    key: process.env.API_KEY,
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
    action: "select",
    entity_id: 168,
  };

  const res = await fetch(api, {
    method: "POST",
    body: JSON.stringify(API_JSON),
  });
  const data = await res.json();

  // get child data
  const child_json = {
    key: process.env.API_KEY,
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
    action: "select",
    entity_id: 239,
  };

  if (Array.isArray(data.data)) {
    const attachmentRequest = data.data.map((i) => {
      const ATTACHMENT_JSON = {
        key: process.env.API_KEY,
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
        action: "download_attachment",
        entity_id: 168,
        item_id: i.id,
        field_id: 2760,
      };
      return fetch(api, {
        method: "POST",
        body: JSON.stringify(ATTACHMENT_JSON),
      });
    });

    const childRequest = data.data.map((i) => {
      const childJson = {
        key: process.env.API_KEY,
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
        action: "select",
        entity_id: 239,
        filters: { parent_item_id: i.id },
      };
      return fetch(api, {
        method: "POST",
        body: JSON.stringify(childJson),
      });
    });

    const attachmentPromises = data.data.map((item) => {
      const payload = createApiPayload("download_attachment", {
        entity_id: 168,
        item_id: item.id,
        field_id: 2760,
      });
      return fetch(api, { method: "POST", body: JSON.stringify(payload) });
    });

    const childPromises = data.data.map((item) => {
      const payload = createApiPayload("select", {
        entity_id: 239,
        filters: { parent_item_id: item.id },
      });
      return fetch(api, { method: "POST", body: JSON.stringify(payload) });
    });
    const [attachmentResponses, childResponses] = await Promise.all([
      Promise.all(attachmentPromises.map((p) => p.then((res) => res.json()))),
      Promise.all(childPromises.map((p) => p.then((res) => res.json()))),
    ]);

    const childResponse = await Promise.all(childRequest);
    const child_data = await Promise.all(childResponse.map((ch) => ch.json()));

    const attachmentResponse = await Promise.all(attachmentRequest);
    const attachments = await Promise.all(
      attachmentResponse.map((res) => res.json())
    );

    // Combine data with attachments
    const combinedData = data.data.map((item, index) => {
      const attachment =
        attachmentResponses[index]?.data || attachmentResponses[index] || null;
      const rawChildData =
        childResponses[index]?.data || childResponses[index] || null;

      let processedChilds = null;
      if (Array.isArray(rawChildData)) {
        processedChilds = rawChildData.map(transformChild).filter(Boolean); // .filter(Boolean) removes any nulls
      } else if (typeof rawChildData === "object" && rawChildData !== null) {
        processedChilds = [transformChild(rawChildData)].filter(Boolean);
      }

      return {
        id: item.id,
        title: item[2762],
        sub: item[2763],
        link: item[2761],
        attachment,
        childs: processedChilds || [], // Fallback to an empty array for consistency
      };
    });
    return NextResponse.json(combinedData);
  }
  return NextResponse.json(
    { message: "error, connection timeout" },
    { status: 200 }
  );
}
