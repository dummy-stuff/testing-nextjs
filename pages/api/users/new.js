import pool from "../../../db";

export default async (req, res) => {
  const conn = await pool.getConnection()
//   const query = await conn.query("select id, title, body from `articles`");
  const query = await conn.query("select User from `user`");
  res.send(query);
};
