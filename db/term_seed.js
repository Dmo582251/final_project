var db = require('../db.js');

/*FOOTBALL TERMS AND DEFINITIONS:
-----------------------------------------*/
var footballTerm = ['First Down', 'Touchdown', 'Interception', 'Move the Chains', 'Safety', 'Onside Kick', 'Audible', 'Shotgun Formation', 'Blitz', 'Sack', 'Fumble', 'Line Of Scrimmage', 'Hail Mary' 'Hash Marks', 'Backfield'];

var footballDefinition = [
  "After the offense advances at least 10 yards down the field they are awarded a first down",
  "When an offensive player with the ball enters the endzone. This is worth 6 points",
  "When a defender catches a pass intended for an offensive player",
  "When a team gets a first down, the people holding the first down markers move up the field to indicate the new placement of the ball and to show how far a team needs to go in order to get a first down",
  "When the defense stops the offense inside the offenses endzone. this is worth 2 points",
  "When the team kicking off tries to regain possession by recovering the ball after it either rickochets off of a player or travels at least 10 yards",
  "When a player changes the play at the line of scrimmage",
  "Instead of accepting the ball at the line of scrimmage, the quarterback stands 5 to 7 yards away from the center when recieving the ball",
  "When a defense sends additonal players to rush the quarterback",
  "When a defender tackles the quarterback before he throws the ball",
  "When a player loses control of the ball and drops it",
  "Where a football play starts",
  "A despiration play by the offense where all receivers run straight down the field and the quarterback thows the ball toward the end zone hoping that a reciever catches it",
  'A hash mark on the field determines the spot of the ball. When a play ends to the left of the hash mark, the next play, the ball will be spotted on the left hash mark. vise versa for the right side. In short, hash marks are used by referees to spot the ball',
  'A backfield refers to the players behind the line of scrimmage. Such as the quarterback, the fullback, and the running back'
];

var footballSport = "football"

//football variables and database
var firstDown = {
  term: footballTerm[0],
  definition: footballDefinition[0],
  sport: footballSport
};

var touchDown = {
  term: footballTerm[1],
  definition: footballDefinition[1],
  sport: footballSport
};

var interception = {
  term: footballTerm[2],
  definition: footballDefinition[2],
  sport: footballSport
};

var moveChains = {
  term: footballTerm[3],
  definition: footballDefinition[3],
  sport: footballSport
};

var safety = {
  term: footballTerm[4],
  definition: footballDefinition[4],
  sport: footballSport
};

var onsideKick = {
	term: footballTerm[5],
  definition: footballDefinition[5],
  sport: footballSport
};

var audible = {
	term: footballTerm[6],
  definition: footballDefinition[6],
  sport: footballSport
}

var shotgunF = {
	term: footballTerm[7],
  definition: footballDefinition[7],
  sport: footballSport	
};

var blitz = {
	term: footballTerm[8],
  definition: footballDefinition[8],
  sport: footballSport	
};

var footballSack = {
	term: footballTerm[9],
  definition: footballDefinition[9],
  sport: footballSport
};

var fumble = {
	term: footballTerm[10],
  definition: footballDefinition[10],
  sport: footballSport
};

var lineOfScrim = {
	term: footballTerm[11],
  definition: footballDefinition[11],
  sport: footballSport
};

var hailMary = {
	term: footballTerm[12],
  definition: footballDefinition[12],
  sport: footballSport
};

var hashMarks = {
	term: footballTerm[13],
  definition: footballDefinition[13],
  sport: footballSport
};

var backField = {
	term: footballTerm[14],
  definition: footballDefinition[14],
  sport: footballSport
};


/*BASKETBALL TERMS AND DEFINITIONS:
-----------------------------------------*/
var basketballTerm = ['Jump Shot', 'Pick and roll', '3 pointer', 'Foul', 'And 1', 'Cross-over', 'Sixth Man', 'Back Court', 'Lay-up', 'Alley-oop', 'Charge', 'Goal Tending', 'Zone', 'Man to Man', 'Slam Dunk'];

var basketballSport = "basketball"

var basketballDefintion = [
  "The standard",
  "A common basetball play where an offensive player without the ball picks the defender who is gaurding the offensive player who has the ball. Then the offensive player who set the pick rotates to the basket and accepts a pass from the offesive player with the ball",
  "A jump shot that is attempted behind the 3-point arc",
  "Illegal contact between an offensive and defensive player",
  "When a player is fouled during a scoring attempt and makes the basket anyway. The player who was fouled then gets an opportunity to shot 1 foul shot. So the player gets the points from the play AND 1 extra shot",
  "A common move by an offensive player with the basketball to get around a defender",
  "not good enough to be apart of the starting 5, but the first player to come off the bench during a game",
  "A term used to refer to a teams starting guards (point-guard, shoting-guard)",
  "A scoring attempt where the offensive player lays the ball up off of the backboard",
  "A scoring attempt where an offensive player forcefully throws the basetball into the hoop",
  "A tactic where a defensive player stands in front of an offensive player and accepts contact. If done correctly, a foul is called on the offensive player and the defending team gets possession",
  "When a defensive player prevents the ball from going into the basket or when a player interferes with the ball while it's going into the basket",
  "A defensive strategy where each defender is given an area of responsibility instead of a specific player to defend",
  "A defensive strategy where each player is gaurding one specific player",
  "A scoring attempt where a player tosses the ball up towards the hoop where another offensive player jumps up and slams it into the basket"
];

//Basketball variables and database
var jumpShot = {
  term: basketballTerm[0],
  definition: basketballDefintion[0],
  sport: basketballSport
};


db.create('terms', jumpShot, function(term) {
  console.log("basketball 1 has worked");
});

var pickRoll = {
  term: basketballTerm[1],
  definition: basketballDefintion[1],
  sport: basketballSport
};

db.create('terms', pickRoll, function(term) {
  console.log("basketball 2 has worked");
});

var threePointer = {
  term: basketballTerm[2],
  definition: basketballDefintion[2],
  sport: basketballSport
};

db.create('terms', threePointer, function(term) {
  console.log("basketball 3 has worked");
});

var basketballFoul = {
  term: basketballTerm[3],
  definition: basketballDefintion[3],
  sport: basketballSport
};

db.create('terms', basketballFoul, function(term) {
  console.log("basketball 4 has worked");
});

var andOne = {
  term: basketballTerm[4],
  definition: basketballDefintion[4],
  sport: basketballSport
};

db.create('terms', andOne, function(term) {
  console.log("basketball 5 has worked");
});

var crossOver = {
  term: basketballTerm[5],
  definition: basketballDefintion[5],
  sport: basketballSport
};

db.create('terms', crossOver, function(term) {
  console.log("basketball 6 has worked");
});

var sixthMan = {
  term: basketballTerm[6],
  definition: basketballDefintion[6],
  sport: basketballSport
};

db.create('terms', sixthMan, function(term) {
  console.log("basketball 7 has worked");
});

var backCourt = {
  term: basketballTerm[7],
  definition: basketballDefintion[7],
  sport: basketballSport
};

db.create('terms', backCourt, function(term) {
  console.log("basketball 8 has worked");
});

var layUp = {
  term: basketballTerm[8],
  definition: basketballDefintion[8],
  sport: basketballSport
};

db.create('terms', layUp, function(term) {
  console.log("basketball 9 has worked");
});

var alleyOop = {
  term: basketballTerm[9],
  definition: basketballDefintion[9],
  sport: basketballSport
};

db.create('terms', alleyOop, function(term) {
  console.log("basketball 10 has worked");
});

var charge = {
  term: basketballTerm[10],
  definition: basketballDefintion[10],
  sport: basketballSport
};

db.create('terms', charge, function(term) {
  console.log("basketball 11 has worked");
});

var goalTending = {
  term: basketballTerm[11],
  definition: basketballDefintion[11],
  sport: basketballSport
};

db.create('terms', goalTending, function(term) {
  console.log("basketball 12 has worked");
});

var basketballZone = {
  term: basketballTerm[12],
  definition: basketballDefintion[12],
  sport: basketballSport
};

db.create('terms', basketballZone, function(term) {
  console.log("basketball 13 has worked");
});

var manToMan = {
  term: basketballTerm[13],
  definition: basketballDefintion[13],
  sport: basketballSport
};

db.create('terms', manToMan, function(term) {
  console.log("basketball 14 has worked");
});

var slamDunk = {
  term: basketballTerm[14],
  definition: basketballDefintion[14],
  sport: basketballSport
};

db.create('terms', slamDunk, function(term) {
  console.log("basketball 15 has worked");
});



/*BASEBALL TERMS AND DEFINITIONS:
-----------------------------------------*/
var baseballTerm = ['Inning', 'Batting Order', 'Out', 'Home Run', 'Grand Slam', 'Error', 'Batters-Box', 'Ball', 'Double-play', 'Triple-Play', 'Pop-fly', 'ERA', 'Closer', 'Pinch-Hitter', 'RBI'];

var baseballDefinition = [
  'Divided into 2 parts. The away team bats first at the top of the inning and the home team bats at the bottom of the inning. 3 outs = the end of 1/2 of the inning.',
  'Batting Order is the order in which the hitters take their turn to come up and bat',
  'When a hitter or runner is removed from the field of play by the fielding side',
  'A hit over the outside wall, or a hit which allows a runner to reach home base.',
  'A home run where the bases are loaded',
  'A mistake made by the fielding team',
  'Either side of home plate is a batters box, in which the batter has to stand when he tries to hit the baseball',
  'A pitch thrown outside the strike zone',
  'A pitch thrown inside the striek zone',
  'When the fielding team gets 2 outs in 1 play',
  'When the fielding team gets 3 outs in 1 play',
  'When a batter hits the ball up in the air',
  'The number of earned runs given up by a pitcher averaged over nine innings',
  'The relief pitcher who comes in late in the game to make the final few outs',
  'A hitter that comes in the line up to replace another hitter',
  'A statistic that keeps count of how many times a players at-bat has equaled a scoring run'
];

var baseballSport = 'baseball'


//Baseball variables and database
var baseballInning = {
  term: baseballTerm[0],
  definition: baseballDefinition[0],
  sport: baseballSport
};

db.create('terms', baseballInning, function(term) {
  console.log("baseball 1 has worked");
});

var battingOrder = {
  term: baseballTerm[1],
  definition: baseballDefinition[1],
  sport: baseballSport
};

db.create('terms', battingOrder, function(term) {
  console.log("baseball 2 has worked");
});

var baseballOut = {
  term: baseballTerm[2],
  definition: baseballDefinition[2],
  sport: baseballSport
};

db.create('terms', baseballOut, function(term) {
  console.log("baseball 3 has worked");
});

var homeRun = {
  term: baseballTerm[3],
  definition: baseballDefinition[3],
  sport: baseballSport
};

db.create('terms', homeRun, function(term) {
  console.log("baseball 4 has worked");
});

var grandSlam = {
  term: baseballTerm[4],
  definition: baseballDefinition[4],
  sport: baseballSport
};

db.create('terms', grandSlam, function(term) {
  console.log("baseball 5 has worked");
});

var baseballError = {
  term: baseballTerm[5],
  definition: baseballDefinition[5],
  sport: baseballSport
};

db.create('terms', baseballError, function(term) {
  console.log("baseball 6 has worked");
});

var battersBox = {
  term: baseballTerm[6],
  definition: baseballDefinition[6],
  sport: baseballSport
};

db.create('terms', battersBox, function(term) {
  console.log("baseball 7 has worked");
});

var baseballBall = {
  term: baseballTerm[7],
  definition: baseballDefinition[7],
  sport: baseballSport
};

db.create('terms', baseballBall, function(term) {
  console.log("baseball 8 has worked");
});

var doublePlay = {
  term: baseballTerm[8],
  definition: baseballDefinition[8],
  sport: baseballSport
};

db.create('terms', doublePlay, function(term) {
  console.log("baseball 9 has worked");
});

var triplePlay = {
  term: baseballTerm[9],
  definition: baseballDefinition[9],
  sport: baseballSport
};

db.create('terms', triplePlay, function(term) {
  console.log("baseball 10 has worked");
});

var popFly = {
  term: baseballTerm[10],
  definition: baseballDefinition[10],
  sport: baseballSport
};

db.create('terms', popFly, function(term) {
  console.log("baseball 11 has worked");
});

var era = {
  term: baseballTerm[11],
  definition: baseballDefinition[11],
  sport: baseballSport
};

db.create('terms', era, function(term) {
  console.log("baseball 12 has worked");
});

var baseballCloser = {
  term: baseballTerm[12],
  definition: baseballDefinition[12],
  sport: baseballSport
};

db.create('terms', baseballCloser, function(term) {
  console.log("baseball 13 has worked");
});

var pinchHitter = {
  term: baseballTerm[13],
  definition: baseballDefinition[13],
  sport: baseballSport
};

db.create('terms', pinchHitter, function(term) {
  console.log("baseball 14 has worked");
});

var rbi = {
  term: baseballTerm[14],
  definition: baseballDefinition[14],
  sport: baseballSport
};

/*SOCCER TERMS AND DEFINITIONS:
-----------------------------------------*/
var soccerTerm = ['Attacker', 'Bending the Ball', 'Corner Kick', 'Penalty Kick', 'Sweeper', 'Tackle', 'Yellow Card', 'Red Card', 'Volley', 'Trapping the Ball', 'Offside', 'Dummy Run', 'Swerve Pass', 'Striker', 'Header'];

var soccerDefinition = [
  'An offensive player who plays closer to the opposing teams goal',
  'When a player curves the ball in the air after its been kicked',
  'A method of putting the ball into play after it has crossed the end line and was last touched by a member of the defending team',
  'A kick taken by the player',
  'A defender who is not assigned to defend anyone but instead is free to roam and take care of loose balls. Typically the last line of defense.',
  'The act of taking the ball away from the player',
  'warning card issued by referee.2 yellow cards = ejection from the game',
  'What the referee holds up to signal the ejection of a player form the game.that team must play the rest of the game a man down.',
  'When a player kicks the ball while its in the air',
  'When a player uses his / her body to slow down and gain control of the ball',
  'When a player is past the last defender before the ball is kicked to them',
  'When a player without the ball makes a run at the goal to draw defenders away from the player with the ball',
  'A pass that follows a curved pass because of the way it was kicked',
  'A teams most powerful and best scoring forward',
  'When a player hits the ball with his head'
];

var soccerSport = "soccer"

//variables and database
var attacker = {
  term: soccerTerm[0],
  definition: soccerDefinition[0],
  sport: soccerSport
};

db.create('terms', attacker, function(term) {
  console.log("soccer term 1 has worked");
});

var bendingBall = {
  term: soccerTerm[1],
  definition: soccerDefinition[1],
  sport: soccerSport
};

db.create('terms', bendingBall, function(term) {
  console.log("soccer term 2 has worked");
});

var cornerKick = {
  term: soccerTerm[2],
  definition: soccerDefinition[2],
  sport: soccerSport
};

db.create('terms', cornerKick, function(term) {
  console.log("soccer term 3 has worked");
});

var pentaltyKick = {
  term: soccerTerm[3],
  definition: soccerDefinition[3],
  sport: soccerSport
};

db.create('terms', pentaltyKick, function(term) {
  console.log("soccer term 4 has worked");
});

var sweeper = {
  term: soccerTerm[4],
  definition: soccerDefinition[4],
  sport: soccerSport
};

db.create('terms', sweeper, function(term) {
  console.log("soccer term 5 has worked");
});

var soccerTackle = {
  term: soccerTerm[5],
  definition: soccerDefinition[5],
  sport: soccerSport
};

db.create('terms', soccerTackle, function(term) {
  console.log("soccer term 6 has worked");
});

var yellowCard = {
  term: soccerTerm[6],
  definition: soccerTerm[6],
  sport: soccerSport
};

db.create('terms', yellowCard, function(term) {
  console.log("soccer term 7 has worked");
});

var redCard = {
  term: soccerTerm[7],
  definition: soccerDefinition[7],
  sport: soccerSport
};

db.create('terms', redCard, function(term) {
  console.log("soccer term 8 has worked");
});

var soccerVolley = {
  term: soccerTerm[8],
  definition: soccerDefinition[8],
  sport: soccerSport
};

db.create('terms', soccerVolley, function(term) {
  console.log("soccer term 9 has worked");
});

var trapBall = {
  term: soccerTerm[9],
  definition: soccerDefinition[9],
  sport: soccerSport
};

db.create('terms', trapBall, function(term) {
  console.log("soccer term 10 has worked");
});

var offSide = {
  term: soccerTerm[10],
  definition: soccerDefinition[10],
  sport: soccerSport
};

db.create('terms', offSide, function(term) {
  console.log("soccer term 11 has worked");
});

var dummyRun = {
  term: soccerTerm[11],
  definition: soccerDefinition[11],
  sport: soccerSport
};

db.create('terms', dummyRun, function(term) {
  console.log("soccer term 12 has worked");
});

var swervePass = {
  term: soccerTerm[12],
  definition: soccerTerm[12],
  sport: soccerSport
};

db.create('terms', swervePass, function(term) {
  console.log("soccer term 13 has worked");
});

var striker = {
  term: soccerTerm[13],
  definition: soccerDefinition[13],
  sport: soccerSport
};

db.create('terms', striker, function(term) {
  console.log("soccer term 14 has worked");
});

var soccerHeader = {
  term: soccerTerm[14],
  definition: soccerDefinition[14],
  sport: soccerSport
};

db.create('terms', soccerHeader, function(term) {
  console.log("soccer term 15 has worked");
});


/*HOCKEY TERMS AND DEFINITIONS:
-----------------------------------------*/
var hockeyTerm = ['Attack Zone', 'Backchecking', 'Face off', 'Crease', 'Body Checking', 'Slap Shot', 'Slot', 'Power Play', 'Deke', 'Top Shelf', 'Save', 'Goal Line', 'Blue Lines', 'Butt-Ending', 'Drop pass'];

var hockeyDefinition = [
  'The zone where the opponents goal is located',
  'Checking an opponent while skating backwards towards players own goal',
  'Method used to start a play in a hockey game',
  'Area of ice directly infront of the net Identified by a red border and blue interior',
  'A defensive strategy aimed at disrupting the player with posession of the puck',
  'A hard shot made at the goal',
  'The rink directly ahead of the goaltender',
  'When a team has a numerical advantage over the opposing team because a player of theirs is serving out a pentalty',
  'Any athletic move made by a hockey player to get around a defender',
  'A goal that hits the upper section of the netting',
  'When a goaltender prevents a goal',
  'Red Lines at each end of the ice rink. Used to determine icing',
  'Lines that divide the ice rink into zones and are used to determine if a player is offsides',
  'When a player uses the top end of their stick to hit an opposing player',
  'When a player passes the puck behind himself to a teamate'
];

var hockeySport = "hockey"

//variables and database 
var attackZone = {
  term: hockeyTerm[0],
  definition: hockeyDefinition[0],
  sport: hockeySport
};

db.create('terms', attackZone, function(term) {
  console.log("hockey term 1 has worked");
});

var backCheck = {
  term: hockeyTerm[1],
  definition: hockeyDefinition[1],
  sport: hockeySport
};

db.create('terms', backCheck, function(term) {
  console.log("hockey term 2 has worked");
});

var faceOff = {
  term: hockeyTerm[2],
  definition: hockeyDefinition[2],
  sport: hockeySport
};

db.create('terms', faceOff, function(term) {
  console.log("hockey term 3 has worked");
});

var crease = {
  term: hockeyTerm[3],
  definition: hockeyDefinition[3],
  sport: hockeySport
};

db.create('terms', crease, function(term) {
  console.log("hockey term 4 has worked");
});

var bodyCheck = {
  term: hockeyTerm[4],
  definition: hockeyDefinition[4],
  sport: hockeySport
};

db.create('terms', bodyCheck, function(term) {
  console.log("hockey term 5 has worked");
});

var slapShot = {
  term: hockeyTerm[5],
  definition: hockeyDefinition[5],
  sport: hockeySport
};

db.create('terms', slapShot, function(term) {
  console.log("hockey term 6 has worked");
});

var slot = {
  term: hockeyTerm[6],
  definition: hockeyDefinition[6],
  sport: hockeySport
};

db.create('terms', slot, function(term) {
  console.log("hockey term 7 has worked");
});

var powerPlay = {
  term: hockeyTerm[7],
  definition: hockeyDefinition[7],
  sport: hockeySport
};

db.create('terms', powerPlay, function(term) {
  console.log("hockey term 8 has worked");
});

var deke = {
  term: hockeyTerm[8],
  definition: hockeyDefinition[8],
  sport: hockeySport
};

db.create('terms', deke, function(term) {
  console.log("hockey term 9 has worked");
});

var topShelf = {
  term: hockeyTerm[9],
  definition: hockeyDefinition[9],
  sport: hockeySport
};

db.create('terms', topShelf, function(term) {
  console.log("hockey term 10 has worked");
});

var save = {
  term: hockeyTerm[10],
  definition: hockeyDefinition[10],
  sport: hockeySport
};

db.create('terms', save, function(term) {
  console.log("hockey term 11 has worked");
});

var goalLine = {
  term: hockeyTerm[11],
  definition: hockeyDefinition[11],
  sport: hockeySport
};

db.create('terms', goalLine, function(term) {
  console.log("hockey term 12 has worked");
});

var blueLine = {
  term: hockeyTerm[12],
  definition: hockeyDefinition[12],
  sport: hockeySport
};

db.create('terms', blueLine, function(term) {
  console.log("hockey term 13 has worked");
});

var buttEnding = {
  term: hockeyTerm[13],
  definition: hockeyDefinition[13],
  sport: hockeySport
};

db.create('terms', buttEnding, function(term) {
  console.log("hockey term 14 has worked");
});

var dropPass = {
  term: hockeyTerm[14],
  definition: hockeyDefinition[14],
  sport: hockeySport
};

db.create('terms', dropPass, function(term) {
  console.log("hockey term 15 has worked");
});