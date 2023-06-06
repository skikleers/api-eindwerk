const db = require("../DATABASE");

const getAllVideos = (req, res) => {
  db.all("select * from allJoined", [], (err, rows) => {
    if (err) return res.json({ message: err.message });
    res.json({ data: rows });
  });
};

const addVideo = (req, res) => {
  db.run(
    "insert into video(id_link, id_tag) values (?, ?)",
    [req.body.id_link, req.body.id_tag],
    (err) => {
      if (err) return res.json({ message: err.message });
      res.json({ data: "Ok" });
    }
  );
};

module.exports = {
  getAllVideos,
  addVideo,
};
