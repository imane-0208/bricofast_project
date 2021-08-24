CREATE TABLE role (
    idRole int AUTO_INCREMENT PRIMARY KEY,
    role varchar(255)
);

CREATE TABLE users (
    idUser int AUTO_INCREMENT PRIMARY KEY,
    LastName varchar(255),
    FirstName varchar(255),
    idRole INT,
    email varchar(255),
    password varchar(255),
    FOREIGN KEY (idRole) REFERENCES role(idRole)
);

CREATE TABLE client (
    idClient INT,
    FOREIGN KEY (idClient) REFERENCES users(idUser),
    PRIMARY KEY (idClient)
);

CREATE TABLE bricouleur (
    idBricouleur INT,
    ville varchar(255),
    tele int,
    photo varchar(255),
    FOREIGN KEY (idBricouleur) REFERENCES users(idUser),
    PRIMARY KEY (idBricouleur)
);

CREATE TABLE categories (
    idCategorie int AUTO_INCREMENT PRIMARY KEY,
    categorie varchar(255)
);

CREATE TABLE description(
    id_D int AUTO_INCREMENT PRIMARY KEY,
    description varchar(255),
    idbricoleur INT,
    FOREIGN KEY (idbricoleur) REFERENCES bricouleur(idBricouleur)
);


ALTER TABLE bricouleur
ADD idcat int;

ALTER TABLE bricouleur
ADD CONSTRAINT FK_cat
FOREIGN KEY (idcat) REFERENCES categories(idCategorie);

INSERT INTO categories (categorie) VALUES ("menuiserie");
INSERT INTO categories (categorie) VALUES ("peinture");
INSERT INTO categories (categorie) VALUES ("plomberie");
INSERT INTO categories (categorie) VALUES ("electromenager");
INSERT INTO categories (categorie) VALUES ("electricity");
INSERT INTO categories (categorie) VALUES ("menuiserie");


CREATE TABLE posts (
    idPost int AUTO_INCREMENT PRIMARY KEY,
    objectif varchar(255),
    idCtg INT,
    ville varchar(255),
    sujet varchar(255),
    datePost DATE,
    idC INT,
    FOREIGN KEY (idCtg) REFERENCES categories(idCategorie),
    FOREIGN KEY (idC) REFERENCES client(idClient)
);





SELECT p.*,u.LastName,u.FirstName FROM `posts` p , `users` u WHERE u.idUser = p.idC;
SELECT p.*,u.LastName,u.FirstName,c.categorie FROM `posts` p , `users` u , `categories` c WHERE u.idUser = p.idC and c.idCategorie = p.idCtg ORDER BY datePost DESC ;
SELECT p.*,u.LastName,u.FirstName,c.categorie FROM `posts` p , `users` u , `categories` c WHERE u.idUser = p.idC and c.idCategorie = p.idCtg and p.ville = 'SAFI' ORDER BY datePost DESC ;
SELECT p.*,u.LastName,u.FirstName,c.categorie FROM `posts` p , `users` u , `categories` c WHERE u.idUser = p.idC and c.idCategorie = p.idCtg and p.ville = 'SAFI' and c.categorie = 'électricité' ORDER BY datePost DESC;
SELECT * FROM `posts` WHERE `idC`= 6;
SELECT *  FROM `posts` ,  `categories`    WHERE `idPost`= 6 and posts.idCtg = categories.idCategorie ;

DROP TABLE posts;

INSERT INTO role (role) VALUES ("admin");
INSERT INTO role (role) VALUES ("client");
INSERT INTO role (role) VALUES ("bricoleur");

