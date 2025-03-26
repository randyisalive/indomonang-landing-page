// app/api/hello/route.js
export async function GET(request) {
  const api = process.env.BASE_URL;
  return Response.json({ message: api });
}
