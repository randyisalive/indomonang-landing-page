// app/api/app_data/route.js
export async function GET(request) {
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

    const attachmentResponse = await Promise.all(attachmentRequest);
    const attachments = await Promise.all(
      attachmentResponse.map((res) => res.json())
    );
    // Combine data with attachments
    const combinedData = data.data.map((item, index) => {
      const attachment = attachments[index]?.data || attachments[index] || null;

      return {
        id: item.id,
        title: item[2762],
        sub: item[2763],
        link: item[2761],
        attachment,
      };
    });
    return Response.json(combinedData);
  }
  return Response.json(data.data);
}
