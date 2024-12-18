CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/360_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg', 'Coffee!', 'Tasty Coffee!.'),
('images/Me and love.pjg', 'Me and love', 'Photo of us.');
('images/The girls.jpg', 'My Princesses', 'My Loves');
('images/marvels-spider-man-2-miles-morales-peter-parker-spiderman-4k-wallpaper-uhdpaper.com-419@1@m.jpg', 'Spidey', 'Thwip!');
  