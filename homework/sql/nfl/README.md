# SQL: The NFL

### Step 1

You are provided with a schema file [schema.sql](nfl-seed-data/schema.sql) and two seed files
`players.sql`, `teams.sql` that are also in the `nfl-seed-data` folder. Create a new database called `nfl` and use the schema and seed file to populate your database.

_note_: The players and teams tables are **related**.

<hr>
&#x1F534; COMMIT 1<br>
"Commit: NFL - I seeded the database with the players and teams info"
<hr>

### Step 2
Record your answers to Step 3 in a file called [nfl.sql](nfl.sql).

_Challenge_: Complete each part with a single SQL expression. That is
possible, but for some queries, it will involve learning how to use compound SQL
expressions.


### Step 3 - Queries

Some queries may require more than one command (i.e. you may need to get information about a team before you can complete a query for players). Test each command in PSQL to make sure it is correct.

_Hint_: In order to do some parts you will need to research commands we did
not cover in class.

1.  List the names of all NFL teams

nfl=# SELECT name FROM teams;
         name
----------------------
 Buffalo Bills
 Miami Dolphins
 New England Patriots
 New York Jets
 Baltimore Ravens
 Cincinnati Bengals
(6 rows)

2.  List the stadium name and head coach of all NFC teams

nfl=# SELECT stadium, head_coach FROM teams;
       stadium        |   head_coach
----------------------+----------------
 Ralph Wilson Stadium | Doug Marrone
 Sun Life Stadium     | Joe Philbin
 Gillette Stadium     | Bill Belichick
 MetLife Stadium      | Rex Ryan
 M&T Bank Stadium     | John Harbaugh
 Paul Brown Stadium   | Marvin Lewis
(6 rows)

3.  List the head coaches of the AFC South
nfl=# SELECT * FROM teams WHERE conference = 'AFC' AND division ='South';
 id | name | stadium | division | conference | head_coach | active
----+------+---------+----------+------------+------------+--------
(0 rows)

4.  The total number of players in the NFL
nfl=# SELECT COUNT(name) FROM players;
 count
-------
   158
(1 row)
Somehow , It is not showing all the players. 


<hr>
&#x1F534; COMMIT 2<br>
"Commit: NFL - queried some NFL stuff"
<hr>

5.  The team names and head coaches of the NFC North and AFC East
nfl=# SELECT head_coach FROM teams WHERE division = 'North' OR division= 'East';
   head_coach
----------------
 Doug Marrone
 Joe Philbin
 Bill Belichick
 Rex Ryan
 John Harbaugh
 Marvin Lewis
(6 rows)

6.  The 50 players with the highest salaries
7.  The average salary of all NFL players
8.  The names and positions of players with a salary above 10_000_000

<hr>
&#x1F534; COMMIT 3<br>
"Commit: NFL - wow there's a lot of nfl data"
<hr>

9.  The player with the highest salary in the NFL
10. The name and position of the first 100 players with the lowest salaries
11. The average salary for a DE in the nfl
12. The names of all the players on the Buffalo Bills
13. The total salary of all players on the New York Giants
14. The player with the lowest salary on the Green Bay Packers

_Hint_: In order to do some parts you will need to research commands we did
not cover in class.

=======
<hr>
&#x1F534; COMMIT 4<br>
"Commit: NFL - Finished the nfl queries"
<hr>


### Hungry for more?
This data seems dated. Add a column to both tables with the year, using DATE (as opposed to just entering a number). Record your update, in the nfl sql file, and do a query for one row and copy paste it to show the update.
