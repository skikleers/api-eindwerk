-- SQLite
create table link (
    id integer PRIMARY KEY AUTOINCREMENT,
    naam text NOT NULL,
    link text NOT NULL
);

create table tag (
    id integer PRIMARY KEY AUTOINCREMENT,
    naam text NOT NULL
);

create table video (
    id integer PRIMARY KEY AUTOINCREMENT,
    id_link integer NOT NULL,
    id_tag integer NOT NULL,
    FOREIGN KEY (id_link) REFERENCES link(id),
    FOREIGN KEY (id_tag) REFERENCES tag(id)
);