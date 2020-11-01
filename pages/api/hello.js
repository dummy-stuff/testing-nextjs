// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const body = req.body;
  const query = req.query;
  res.statusCode = 200;
  if (req.method === "POST") {
    res.json({ body, query });
  }
  if (req.method === "GET") {
    res.json({ title: "stuff", details: "other stuff" });
  }
};
