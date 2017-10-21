

carmen=# SELECT name, continent, population FROM country WHERE continent = 'Europe' ORDER BY population ASC;
             name              | continent | population
-------------------------------+-----------+------------
 Holy See (Vatican City State) | Europe    |       1000



 carmen=# SELECT language FROM countrylanguage WHERE countrycode = 'VAT';
 language
----------
 Italian


 carmen=# SELECT countrycode FROM countrylanguage WHERE language = 'Italian' AND percentage > 95;
 countrycode
-------------
 SMR
(1 row)

carmen=# SELECT name FROM country WHERE code = 'SMR';
    name
------------
 San Marino
(1 row)

carmen=# SELECT name FROM city WHERE countrycode = 'SMR';
    name
------------
 Serravalle

