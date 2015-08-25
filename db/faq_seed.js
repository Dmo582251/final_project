var db = require('../db.js');

/*FOOTBALL FAQs and ANSWERS:
-----------------------------------------*/
var footballQuestion = ["How long is a football game?", "Which team is home and which team is away?", "How many points is a touchdown worth?", "How many players can be on the field at the same time?", "What is NFC and AFC mean?", "When is the super bowl?", "How many teams are in the NFL?", "Can you go to the NFL from high school?", "What is the distance of a football field?", "How many yard for a first down", "Are you allowed to deflate the balls?", "How many games are in a NFL season?", "Who is the NFL commisioner?", "What is a football made of?"];

var footballAnswer = ["A football game has 4 quarters. Each quarter is 15 minutes long", "The darker colored jerseys are worn by the home team", "A touchdown is worth 6 points", "22 players on the field at a time, 11 from each team.", "National Football Conference, and American Football Conference", "February 7th", "32", "No, you need at least 1 year of college", "100 yards not including the end zones", "10 yards", "Not unless you're, Tom Brady", "16 games", "Roger Godell", "6 teams", "Vulcanized Rubber"];

var footballSport = "football"

//football variables and database
var fq1 = {
  question: footballQuestion[0],
  answer: footballAnswer[0],
  sport: footballSport
};

db.create('faqs', fq1, function(term) {
  console.log("fq 1 has worked");
});

var fq2 = {
  question: footballQuestion[1],
  answer: footballAnswer[1],
  sport: footballSport
};

db.create('faqs', fq2, function(term) {
  console.log("fq 2 has worked");
});

var fq3 = {
  question: footballQuestion[2],
  answer: footballAnswer[2],
  sport: footballSport
};

db.create('faqs', fq3, function(term) {
  console.log("fq 3 has worked");
});

var fq4 = {
  question: footballQuestion[3],
  answer: footballAnswer[3],
  sport: footballSport
};

db.create('faqs', fq4, function(term) {
  console.log("fq 4 has worked");
});

var fq5 = {
  question: footballQuestion[4],
  answer: footballAnswer[4],
  sport: footballSport
};

db.create('faqs', fq5, function(term) {
  console.log("fq 5 has worked");
});

var fq6 = {
  question: footballQuestion[5],
  answer: footballAnswer[5],
  sport: footballSport
};

db.create('faqs', fq6, function(term) {
  console.log("fq 6 has worked");
});

var fq7 = {
  question: footballQuestion[6],
  answer: footballAnswer[6],
  sport: footballSport
};

db.create('faqs', fq7, function(term) {
  console.log("fq 7 has worked");
});

var fq8 = {
  question: footballQuestion[7],
  answer: footballAnswer[7],
  sport: footballSport
};

db.create('faqs', fq8, function(term) {
  console.log("fq 8 has worked");
});

var fq9 = {
  question: footballQuestion[8],
  answer: footballAnswer[8],
  sport: footballSport
};

db.create('faqs', fq9, function(term) {
  console.log("fq 9 has worked");
});

var fq10 = {
  question: footballQuestion[9],
  answer: footballAnswer[9],
  sport: footballSport
};

db.create('faqs', fq10, function(term) {
  console.log("fq 10 has worked");
});

var fq11 = {
  question: footballQuestion[10],
  answer: footballAnswer[10],
  sport: footballSport
};

db.create('faqs', fq11, function(term) {
  console.log("fq 11 has worked");
});

var fq12 = {
  question: footballQuestion[11],
  answer: footballAnswer[11],
  sport: footballSport
};

db.create('faqs', fq12, function(term) {
  console.log("fq 12 has worked");
});

var fq13 = {
  question: footballQuestion[12],
  answer: footballAnswer[12],
  sport: footballSport
};

db.create('faqs', fq13, function(term) {
  console.log("fq 13 has worked");
});

var fq14 = {
  question: footballQuestion[13],
  answer: footballAnswer[13],
  sport: footballSport
};

db.create('faqs', fq14, function(term) {
  console.log("fq 14 has worked");
});

var fq15 = {
  question: footballQuestion[14],
  answer: footballAnswer[14],
  sport: footballSport
};

db.create('faqs', fq15, function(term) {
  console.log("fq 15 has worked");
});


/*BASKETBALL FAQs and ANSWERS:
-----------------------------------------*/
var basketballQuestion = [
  "How long is a basketball game?","How many players are on a team?", "How many players are on the court at a time?", "How many fouls can you get before you foul out?", "How many teams are in the NBA?", "What are the two conferences in the NBA?", "What are the divisions in the NBA?", "Who is the commisioner?", "What happens if the game is tied at the end of regular time?", "How many teams make it to the playoffs?", "How long is the championship series?", "How long is the NBA season?", "Can you come to the NBA right after high school?", "Who was the last person to do it?", "How tall is the average basketball player?"
];

var basketballAnswer = [
  "A basketball game has 4 quarters, each are 12 minutes long.", "You can have 15 players under contract.", "10 players are on the court at a time.", "5 fouls then you're out", "30 teams", "The eastern and western conference", "The eastern conference has the Atlantic, Central, and Southeast Divisons, While the Western Conference has the Northwest, Pacific, and Southwest divisions", "Adam Silver", "There is a 5 minute overtime. This will keep happening until there is a winner", "8 teams", "7 games", "66 games", "Not anymore", "Lebron James", "6 foot 7 inches"
];

var basketballSport = "basketball"

//basketball variables and database
var bkq1 = {
  question: basketballQuestion[0],
  answer: basketballAnswer[0],
  sport: basketballSport
};

db.create('faqs', bkq1, function(term) {
  console.log("bkq 1 has worked");
});

var bkq2 = {
  question: basketballQuestion[1],
  answer: basketballAnswer[1],
  sport: basketballSport
};

db.create('faqs', bkq2, function(term) {
  console.log("bkq 2 has worked");
});

var bkq3 = {
  question: basketballQuestion[2],
  answer: basketballAnswer[2],
  sport: basketballSport
};

db.create('faqs', bkq3, function(term) {
  console.log("bkq 3 has worked");
});


var bkq4 = {
  question: basketballQuestion[3],
  answer: basketballAnswer[3],
  sport: basketballSport
};

db.create('faqs', bkq4, function(term) {
  console.log("bkq 4 has worked");
});

var bkq5 = {
  question: basketballQuestion[4],
  answer: basketballAnswer[4],
  sport: basketballSport
};

db.create('faqs', bkq5, function(term) {
  console.log("bkq 5 has worked");
});

var bkq6 = {
  question: basketballQuestion[5],
  answer: basketballAnswer[5],
  sport: basketballSport
};

db.create('faqs', bkq6, function(term) {
  console.log("bkq 6 has worked");
});

var bkq7 = {
  question: basketballQuestion[6],
  answer: basketballAnswer[6],
  sport: basketballSport
};

db.create('faqs', bkq7, function(term) {
  console.log("bkq 7 has worked");
});

var bkq8 = {
  question: basketballQuestion[7],
  answer: basketballAnswer[7],
  sport: basketballSport
};

db.create('faqs', bkq8, function(term) {
  console.log("bkq 8 has worked");
});

var bkq9 = {
  question: basketballQuestion[8],
  answer: basketballAnswer[8],
  sport: basketballSport
};

db.create('faqs', bkq9, function(term) {
  console.log("bkq 9 has worked");
});


var bkq10 = {
  question: basketballQuestion[9],
  answer: basketballAnswer[9],
  sport: basketballSport
};

db.create('faqs', bkq10, function(term) {
  console.log("bkq 10 has worked");
});

var bkq11 = {
  question: basketballQuestion[10],
  answer: basketballAnswer[10],
  sport: basketballSport
};

db.create('faqs', bkq11, function(term) {
  console.log("bkq 11 has worked");
});

var bkq12 = {
  question: basketballQuestion[11],
  answer: basketballAnswer[11],
  sport: basketballSport
};

db.create('faqs', bkq12, function(term) {
  console.log("bkq 12 has worked");
});

var bkq13 = {
  question: basketballQuestion[12],
  answer: basketballAnswer[12],
  sport: basketballSport
};

db.create('faqs', bkq13, function(term) {
  console.log("bkq 13 has worked");
});

var bkq14 = {
  question: basketballQuestion[13],
  answer: basketballAnswer[13],
  sport: basketballSport
};

db.create('faqs', bkq14, function(term) {
  console.log("bkq 14 has worked");
});

var bkq15 = {
  question: basketballQuestion[14],
  answer: basketballAnswer[14],
  sport: basketballSport
};

db.create('faqs', bkq15, function(term) {
  console.log("bkq 15 has worked");
});


/*BASEBALL FAQs and ANSWERS:
-----------------------------------------*/
var baseballQuestion = [
  'How long is a baseball game?', 'When and what is the 7th inning strech?', 'How long is a MLB season?', 'When do the Playoffs start?', 'How many players are on the field for the fielding team at a time?', 'Where does the shortstop play?', 'How many teams are there in the MLB?', 'What do AL and NL stand for?', 'What month is the All-Star Game in?', 'Who get the Rawlings Golden Glove award at the end of the year?', 'Who has won the most World Series Titles?', 'The World Series is how many games long?', 'Who / what is the baseball commisioner?', 'What is a baseball made of?', 'Who hit the longest homerun ever?'
];

var baseballAnswer = [
  '9 innings', 'The 7th inning.. but actually its a break during the game like a halftime', '162 games long per team',
  'October', '9. Pitcher, Catcher, 1st Base, 2nd Base, 3rd Base, ShortStop, Left Field, Center Field, Right Field.', 'Between 2nd and 3rd base',
  '30', 'American Leauge and National Leauge', 'July', 'The player who exhibites the best individual fielding performance', 'The New York Yankees', '7', 'Rob Manfred and a baseball commissioner is the chief executive of major league baseball aka the whold organization', 'A baseball has a rubber and cork center wrapped in yarn and cowhide', 'Mickey Mantle. The ball traveled 643 feet!'
];

var baseballSport = "baseball"

//baseball variables and database
var bsq1 = {
  question: baseballQuestion[0],
  answer: baseballAnswer[0],
  sport: baseballSport
};

db.create('faqs', bsq1, function(term) {
  console.log("bsq 1 has worked");
});

var bsq2 = {
  question: baseballQuestion[1],
  answer: baseballAnswer[1],
  sport: baseballSport
};

db.create('faqs', bsq2, function(term) {
  console.log("bsq 2 has worked");
});

var bsq3 = {
  question: baseballQuestion[2],
  answer: baseballAnswer[2],
  sport: baseballSport
};

db.create('faqs', bsq3, function(term) {
  console.log("bsq 3 has worked");
});

var bsq4 = {
  question: baseballQuestion[3],
  answer: baseballAnswer[3],
  sport: baseballSport
};

db.create('faqs', bsq4, function(term) {
  console.log("bsq 4 has worked");
});

var bsq5 = {
  question: baseballQuestion[4],
  answer: baseballAnswer[4],
  sport: baseballSport
};

db.create('faqs', bsq5, function(term) {
  console.log("bsq 5 has worked");
});

var bsq6 = {
  question: baseballQuestion[5],
  answer: baseballAnswer[5],
  sport: baseballSport
};

db.create('faqs', bsq6, function(term) {
  console.log("bsq 6 has worked");
});

var bsq7 = {
  question: baseballQuestion[6],
  answer: baseballAnswer[6],
  sport: baseballSport
};

db.create('faqs', bsq7, function(term) {
  console.log("bsq 7 has worked");
});

var bsq8 = {
  question: baseballQuestion[7],
  answer: baseballAnswer[7],
  sport: baseballSport
};

db.create('faqs', bsq8, function(term) {
  console.log("bsq 8 has worked");
});

var bsq9 = {
  question: baseballQuestion[8],
  answer: baseballAnswer[8],
  sport: baseballSport
};

db.create('faqs', bsq9, function(term) {
  console.log("bsq 9 has worked");
});

var bsq10 = {
  question: baseballQuestion[9],
  answer: baseballAnswer[9],
  sport: baseballSport
};

db.create('faqs', bsq10, function(term) {
  console.log("bsq 10 has worked");
});

var bsq11 = {
  question: baseballQuestion[10],
  answer: baseballAnswer[10],
  sport: baseballSport
};

db.create('faqs', bsq11, function(term) {
  console.log("bsq 11 has worked");
});

var bsq12 = {
  question: baseballQuestion[11],
  answer: baseballAnswer[11],
  sport: baseballSport
};

db.create('faqs', bsq12, function(term) {
  console.log("bsq 12 has worked");
});

var bsq13 = {
  question: baseballQuestion[12],
  answer: baseballAnswer[12],
  sport: baseballSport
};

db.create('faqs', bsq13, function(term) {
  console.log("bsq 13 has worked");
});

var bsq14 = {
  question: baseballQuestion[13],
  answer: baseballAnswer[13],
  sport: baseballSport
};

db.create('faqs', bsq14, function(term) {
  console.log("bsq 14 has worked");
});

var bsq15 = {
  question: baseballQuestion[14],
  answer: baseballAnswer[14],
  sport: baseballSport
};

db.create('faqs', bsq15, function(term) {
  console.log("bsq 15 has worked");
});


/*SOCCER FAQs and ANSWERS:
-----------------------------------------*/
var socceerQuestion = ["How many players are on a soccer field at a time?", "How long is a game?", "What is stoppage time?", "How many players are on a roster?", "How long is the season?", "How many teams make the playoffs?", "What are the two conferences in the MLS?", "Who is the commisioner of the MLS?", "How long is a soccer field?"
  "What is a hat-trick?", "What happens if the game is tied?", "Are players required to take their shirt off after they score a goal?", "What season is soccer played in usually?", "When does a corner kick happen?", "What does it mean to be offsides in soccer?"
];

var soccerAnswer = ["There are 22 players on the field at a time. 10 field players and 1 goalie from each team.", "90 minutes not including stoppage time", "during the game the clock never stops running so at the end of the 90 minutes, time is added for any delays that occur during the game.", "30, but only 18 players are selected for each game", "The MLS season is 34 games long", "12 teams make the playoffs", "The eastern and western conference", "Don Garber", "A soccer field is 120 yards long by 80 yards wide", "A hat trick is when one player scores 3 goals in 1 game.", "If the game is still tied after regular, stoppage time, and overtime, there is a shootout among 5 players from oposing teams. Whichever team with the most goals at the end of the shootout wins.", "No, that just happens alot.", "Usually soccer is played in the fall, but the MLS season starts in March and goes until December.", "A corner kick is awarded to the attacking team if a shot on goal goes out of bounds.", "When the player accepting the pass is ahead of the last defender before the ball is kicked to him"];

var soccerSport = "soccer"

//soccer variables and database
var sq1 = {
  question: soccerQuestion[0],
  answer: soccerAnswer[0],
  sport: soccerSport
};

db.create('faqs', sq1, function(term) {
  console.log("sq 1 has worked");
});

var sq2 = {
  question: soccerQuestion[1],
  answer: soccerAnswer[1],
  sport: soccerSport
};

db.create('faqs', sq2, function(term) {
  console.log("sq 2 has worked");
});

var sq3 = {
  question: soccerQuestion[2],
  answer: soccerAnswer[2],
  sport: soccerSport
};

db.create('faqs', sq3, function(term) {
  console.log("sq 3 has worked");
});

var sq4 = {
  question: soccerQuestion[3],
  answer: soccerAnswer[3],
  sport: soccerSport
};

db.create('faqs', sq4, function(term) {
  console.log("sq 4 has worked");
});

var sq5 = {
  question: soccerQuestion[4],
  answer: soccerAnswer[4],
  sport: soccerSport
};

db.create('faqs', sq5, function(term) {
  console.log("sq 5 has worked");
});

var sq6 = {
  question: soccerQuestion[5],
  answer: soccerAnswer[5],
  sport: soccerSport
};

db.create('faqs', sq6, function(term) {
  console.log("sq 6 has worked");
});

var sq7 = {
  question: soccerQuestion[6],
  answer: soccerAnswer[6],
  sport: soccerSport
};

db.create('faqs', sq7, function(term) {
  console.log("sq 7 has worked");
});

var sq8 = {
  question: soccerQuestion[7],
  answer: soccerAnswer[7],
  sport: soccerSport
};

db.create('faqs', sq8, function(term) {
  console.log("sq 8 has worked");
});

var sq9 = {
  question: soccerQuestion[8],
  answer: soccerAnswer[8],
  sport: soccerSport
};

db.create('faqs', sq9, function(term) {
  console.log("sq 9 has worked");
});

var sq10 = {
  question: soccerQuestion[9],
  answer: soccerAnswer[9],
  sport: soccerSport
};

db.create('faqs', sq10, function(term) {
  console.log("sq 10 has worked");
});

var sq11 = {
  question: soccerQuestion[10],
  answer: soccerAnswer[10],
  sport: soccerSport
};

db.create('faqs', sq11, function(term) {
  console.log("sq 11 has worked");
});

var sq12 = {
  question: soccerQuestion[11],
  answer: soccerAnswer[11],
  sport: soccerSport
};

db.create('faqs', sq12, function(term) {
  console.log("sq 12 has worked");
});

var sq13 = {
  question: soccerQuestion[12],
  answer: soccerAnswer[12],
  sport: soccerSport
};

db.create('faqs', sq13, function(term) {
  console.log("sq 13 has worked");
});

var sq14 = {
  question: soccerQuestion[13],
  answer: soccerAnswer[13],
  sport: soccerSport
};

db.create('faqs', sq14, function(term) {
  console.log("sq 14 has worked");
});

var sq15 = {
  question: soccerQuestion[14],
  answer: soccerAnswer[14],
  sport: soccerSport
};

db.create('faqs', sq15, function(term) {
  console.log("sq 15 has worked");
});



/*HOCKEY FAQs and ANSWERS:
-----------------------------------------*/
var hockeyQuestion = ["What do you win at the end of the NHL championships?", "What is the puck made of?", "Can the puck be kicked in for a goal?", "How many games are in a regular season?", "What are the two conferences in the NHL?", "How many teams are in the NHL?", "What are the 4 divisions in hockey?", "Which team has won the most Championships?", "How many teams make the playoffs?", "How long is a hockey game?", "Who is the commissioner of the NHL?", "How long does a hockey fight last?", "How many players are on a team?", "How many players are on the ice at a time"
  "Is there a mercy rule in hockey?"
];

var hockeyAnswer = ["The Stanley Cup", "vulcanized rubber", "The puck can ricochet off of a players skate, but a player can not intentionaly kick the puck in.", "82", "Eastern and Western", "The Atlantic Conference has the Metropolitan, and the Atlantic divison, while the Western Conference has the Central, and Pacific divisions.", "Toronto Maple Leafs. 13."
  "16", "A hockey game is broken into 3 periods that are 20 minutes long.", "Gary Bettman", "A fight in hockey ends when one of the players hits the ice", "20", "6. 5 skaters and 1 goalie", "Nope"
];

var hockeySport = "hockey"

//hockey variables and database
var hq1 = {
  question: hockeyQuestion[0],
  answer: hockeyAnswer[0],
  sport: hockeySport
};

db.create('faqs', hq1, function(term) {
  console.log("hq 1 has worked");
});

var hq2 = {
  question: hockeyQuestion[1],
  answer: hockeyAnswer[1],
  sport: hockeySport
};

db.create('faqs', hq2, function(term) {
  console.log("hq 2 has worked");
});

var hq3 = {
  question: hockeyQuestion[2],
  answer: hockeyAnswer[2],
  sport: hockeySport
};

db.create('faqs', hq3, function(term) {
  console.log("hq 3 has worked");
});

var hq4 = {
  question: hockeyQuestion[3],
  answer: hockeyAnswer[3],
  sport: hockeySport
};

db.create('faqs', hq4, function(term) {
  console.log("hq 4 has worked");
});

var hq5 = {
  question: hockeyQuestion[4],
  answer: hockeyAnswer[4],
  sport: hockeySport
};

db.create('faqs', hq5, function(term) {
  console.log("hq 5 has worked");
});

var hq6 = {
  question: hockeyQuestion[5],
  answer: hockeyAnswer[5],
  sport: hockeySport
};

db.create('faqs', hq6, function(term) {
  console.log("hq 6 has worked");
});

var hq7 = {
  question: hockeyQuestion[6],
  answer: hockeyAnswer[6],
  sport: hockeySport
};

db.create('faqs', hq7, function(term) {
  console.log("hq 7 has worked");
});


var hq8 = {
  question: hockeyQuestion[7],
  answer: hockeyAnswer[7],
  sport: hockeySport
};

db.create('faqs', hq8, function(term) {
  console.log("hq 8 has worked");
});

var hq9 = {
  question: hockeyQuestion[8],
  answer: hockeyAnswer[8],
  sport: hockeySport
};

db.create('faqs', hq9, function(term) {
  console.log("hq 9 has worked");
});

var hq10 = {
  question: hockeyQuestion[9],
  answer: hockeyAnswer[9],
  sport: hockeySport
};

db.create('faqs', hq10, function(term) {
  console.log("hq 10 has worked");
});

var hq11 = {
  question: hockeyQuestion[10],
  answer: hockeyAnswer[10],
  sport: hockeySport
};

db.create('faqs', hq11, function(term) {
  console.log("hq 11 has worked");
});

var hq12 = {
  question: hockeyQuestion[11],
  answer: hockeyAnswer[11],
  sport: hockeySport
};

db.create('faqs', hq12, function(term) {
  console.log("hq 12 has worked");
});

var hq13 = {
  question: hockeyQuestion[12],
  answer: hockeyAnswer[12],
  sport: hockeySport
};

db.create('faqs', hq13, function(term) {
  console.log("hq 13 has worked");
});

var hq14 = {
  question: hockeyQuestion[13],
  answer: hockeyAnswer[13],
  sport: hockeySport
};

db.create('faqs', hq14, function(term) {
  console.log("hq 14 has worked");
});

var hq15 = {
  question: hockeyQuestion[14],
  answer: hockeyAnswer[14],
  sport: hockeySport
};

db.create('faqs', hq15, function(term) {
  console.log("hq 15 has worked");
});