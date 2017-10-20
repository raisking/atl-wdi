-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns


-- Get all information about all authors
library=# SELECT * FROM authors;
 id |        name        |       nationality        | birth_year
----+--------------------+--------------------------+------------
  1 | Cao Xueqin         | China                    |       1715
  2 | J.K. Rowling       | United Kingdom           |       1965
  3 | James Baldwin      | United States of America |       1924
  4 | Jorge Luis Borges  | Argentina                |       1899
  5 | Haruki Murakami    | Japan                    |       1949
  6 | Milan Kundera      | Czechoslovakia           |       1929
  7 | Albert Camus       | France                   |       1913
  8 | George R.R. Martin | United States of America |       1945

-- Get just the name and birth year of all authors
library=# SELECT name, birth_year FROM authors;
        name        | birth_year
--------------------+------------
 Cao Xueqin         |       1715
 J.K. Rowling       |       1965
 James Baldwin      |       1924
 Jorge Luis Borges  |       1899
 Haruki Murakami    |       1949
 Milan Kundera      |       1929
 Albert Camus       |       1913
 George R.R. Martin |       1945
(8 rows)

-- Get all authors born in the 20th century or later
library=# SELECT * FROM authors WHERE birth_year > 1901;
 id |        name        |       nationality        | birth_year
----+--------------------+--------------------------+------------
  2 | J.K. Rowling       | United Kingdom           |       1965
  3 | James Baldwin      | United States of America |       1924
  5 | Haruki Murakami    | Japan                    |       1949
  6 | Milan Kundera      | Czechoslovakia           |       1929
  7 | Albert Camus       | France                   |       1913
  8 | George R.R. Martin | United States of America |       1945
(6 rows)

-- Get all authors born in the USA
library=# SELECT * FROM authors WHERE nationality ='United States of America';
 id |        name        |       nationality        | birth_year
----+--------------------+--------------------------+------------
  3 | James Baldwin      | United States of America |       1924
  8 | George R.R. Martin | United States of America |       1945
(2 rows)

-- Get all books published in 1985
library=# SELECT * FROM books WHERE publication_date = 1985;
 id |              title              | publication_date | author_id
----+---------------------------------+------------------+-----------
 26 | The Evidence of Things Not Seen |             1985 |         3
 27 | The Price of the Ticket         |             1985 |         3
(2 rows)
-- Get all books published before 1989
library=# SELECT * FROM books WHERE publication_date < 1989;
 id |                      title                       | publication_date | author_id
----+--------------------------------------------------+------------------+-----------
  1 | Dream of the Red Chamber                         |             1750 |         1
 10 | Go Tell It on the Mountain                       |             1953 |         3
 11 | The Amen Corner                                  |             1954 |         3
 12 | Notes of a Native Son                            |             1955 |         3
 13 | Giovannis Room                                   |             1956 |         3
 14 | Nobody Knows My Name: More Notes of a Native Son |             1961 |         3
 15 | Another Country                                  |             1962 |         3
 16 | A Talk to Teachers                               |             1963 |         3
 17 | The Fire Next Time                               |             1963 |         3
 18 | Blues for Mister Charlie                         |             1964 |         3
 19 | Going to Meet the Man                            |             1965 |         3
 20 | Tell Me How Long the Trains Been Gone            |             1968 |         3
 21 | No Name in the Street                            |             1972 |         3
-- Get just the title of all books.
library=# SELECT title FROM books;
                      title
--------------------------------------------------
 Dream of the Red Chamber
 Harry Potter and the Philosophers Stone
 Harry Potter and the Chamber of Secrets
 Harry Potter and the Prisoner of Azkaban
 Harry Potter and the Goblet of Fire
 Harry Potter and the Order of the Phoenix
 Harry Potter and the Half-Blood Prince
 Harry Potter and the Deathly Hallows
 The Casual Vacancy
 Go Tell It on the Mountain
 The Amen Corner
 Notes of a Native Son
 Giovannis Room
 Nobody Knows My Name: More Notes of a Native Son
 Another Country
 A Talk to Teachers
 The Fire Next Time
 Blues for Mister Charlie
 Going to Meet the Man
 Tell Me How Long the Trains Been Gone
 No Name in the Street
 If Beale Street Could Talk
 The Devil Finds Work
 Just Above My Head

-- Get just the year that 'A Dance with Dragons' was published
library=# SELECT * FROM books WHERE title = 'A Dance with Dragons';
 id |        title         | publication_date | author_id
----+----------------------+------------------+-----------
 67 | A Dance with Dragons |             2011 |         8
(1 row)


-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
library=# SELECT * FROM books WHERE title LIKE '%the%';
 id |                   title                   | publication_date | author_id
----+-------------------------------------------+------------------+-----------
  1 | Dream of the Red Chamber                  |             1750 |         1
  2 | Harry Potter and the Philosophers Stone   |             1997 |         2
  3 | Harry Potter and the Chamber of Secrets   |             1998 |         2
  4 | Harry Potter and the Prisoner of Azkaban  |             1998 |         2
  5 | Harry Potter and the Goblet of Fire       |             2000 |         2
  6 | Harry Potter and the Order of the Phoenix |             2003 |         2
  7 | Harry Potter and the Half-Blood Prince    |             2005 |         2
  8 | Harry Potter and the Deathly Hallows      |             2007 |         2
 10 | Go Tell It on the Mountain                |             1953 |         3
 15 | Another Country                           |             1962 |         3
 19 | Going to Meet the Man                     |             1965 |         3
 20 | Tell Me How Long the Trains Been Gone     |             1968 |         3
 21 | No Name in the Street                     |             1972 |         3
 27 | The Price of the Ticket                   |             1985 |         3
 29 | Jimmys Blues and Other Poems              |             2014 |         3
 39 | Hear the Wind Sing                        |             1987 |         5
 43 | South of the Border, West of the Sun      |             2000 |         5
 45 | Sputnik Sweetheart                        |             2001 |         5
 46 | Kafka on the Shore                        |             2005 |         5
 68 | I Swear the Dragons are Coming Soon       |             2014 |         8
(20 rows)


-- Add yourself as an author
library=# INSERT INTO authors (name) VALUES ('Prakash');
INSERT 0 1
library=# SELECT * FROM authors;
 id |        name        |       nationality        | birth_year
----+--------------------+--------------------------+------------
  1 | Cao Xueqin         | China                    |       1715
  2 | J.K. Rowling       | United Kingdom           |       1965
  3 | James Baldwin      | United States of America |       1924
  4 | Jorge Luis Borges  | Argentina                |       1899
  5 | Haruki Murakami    | Japan                    |       1949
  6 | Milan Kundera      | Czechoslovakia           |       1929
  7 | Albert Camus       | France                   |       1913
  8 | George R.R. Martin | United States of America |       1945
  9 | Prakash            |                          |
(9 rows)

-- Add two books that you'd like to write (you can hard-code your id as the author id)
library=# INSERT INTO books (title) VALUES ('Coding for Kids');
INSERT 0 1
library=# INSERT INTO books (title) VALUES ('Living close to nature');
INSERT 0 1
library=#

-- Update one of your books to have a new title
library=# UPDATE books SET title ='Kids Coding' WHERE title = 'Coding for Kids';
UPDATE 1
-- Delete your books
library=# DELETE FROM books WHERE title = 'Kids Coding';
DELETE 1
library=#
-- Delete your author entry

library=# DELETE FROM authors WHERE name ='Prakash';
DELETE 1
library=#