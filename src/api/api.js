// pages/api/hello.js

export default function handler(req, res) {
  if (req.method === "GET") {
    // Node.js logic here
    res.status(200).json({ message: "Hello, Next.js with Node.js!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
