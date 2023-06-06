const db = require("../DATABASE");

const getAllLinks = (req, res) => {
  db.all("select * from link", [], (err, rows) => {
    if (err) return res.json({ message: err.message });
    res.json({ data: rows });
  });
};

const addLink = (req, res) => {
  db.run(
    "insert into link(naam, link) values (?, ?)",
    [req.body.naam, req.body.link],
    (err) => {
      if (err) return res.json({ message: err.message });
      res.json({ data: "Ok" });
    }
  );
};

module.exports = {
  getAllLinks,
  addLink,
};
