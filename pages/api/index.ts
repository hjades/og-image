import type { NextApiRequest, NextApiResponse } from "next";
import getSvg from "./_svg"; // hashnode
// import getSvg from "./_svgDev"; // dev.to

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const svg = getSvg(String(req.query.title), String(req.query.footer));
  res.statusCode = 200;
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader(
    "Cache-Control",
    "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
  );
  return res.end(svg);
}
