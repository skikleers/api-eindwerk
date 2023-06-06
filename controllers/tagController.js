const db = require("../DATABASE");

const getAllTags = (req, res) => {
  db.all("select * from tag", [], (err, rows) => {
    if (err) return res.json({ message: err.message });
    res.json({ data: rows });
  });
};

const addTag = (req, res) => {
  db.run("insert into tag(naam) values (?)", [req.body.naam], (err) => {
    if (err) return res.json({ message: err.message });
    res.json({ data: "Ok" });
  });
};

module.exports = {
  getAllTags,
  addTag,
};
