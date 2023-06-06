-- SQLite

CREATE VIEW allJoined AS
SELECT video.*, link.link, link.naam as linkNaam, tag.naam as tagNaam FROM video
JOIN link on video.id_link = link.id
JOIN tag on video.id_tag = tag.id;

