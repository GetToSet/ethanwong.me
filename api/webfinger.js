const ISSUER_REL = "http://openid.net/specs/connect/1.0/issuer";

export default function handler(req, res) {
  const resource = req.query.resource;
  const rel = req.query.rel;

  const me = "acct:ethan@ethanwong.me";

  if (!resource) {
    return res.status(400).end();
  }

  if (resource !== me) {
    return res.status(404).end();
  }

  res.setHeader("Content-Type", "application/jrd+json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const links = [
    {
      rel: ISSUER_REL,
      href: "https://id.ethanwong.me",
    },
  ];

  res.status(200).json({
    subject: me,
    links: rel ? links.filter((link) => link.rel === rel) : links,
  });
}
