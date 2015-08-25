var db = require('../db.js');


/*BASEBALL HOTTIES
---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------*/
var bsplayer = ['Brennan Boesch', 'Curtis Granderson', 'Cole Hamels', 'Matt Kemp', 'Chase Utley', 'Daniel Norris', 'Christian Yelich', 'George Springer', 'Kris Bryant', 'Brett Lawrie', 'Bryce Harper', 'Mike Trout', 'Brandon Crawford', 'Anthony Recker', 'Tyler Moore'];

var bsAge = [30, 34, 31, 30, 36, 22, 23, 25, 23, 25, 22, 24, 28, 31, 28];

var bsSalary = ['1.25 million', '15 million', '8.361 million', '21 million', '2.13 million', '180,685', '570,000', ' 512,900', '471,448', '516,100', '2.5 million', '5.25 million', '481,000 (2012)', '416,001', '518,200'];

var bsJerseyNum = [27, 3, 35, 27, 26, 44, 21, 4, 17, 13, 34, 27, 35, 20, 12];

var bsCollege = ['NA', 'Univ of Illinois', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'East Carolina University', 'NA', 'Alvernia University', 'Mississippi State University'];

var bsTeam = ['Cincinnati Reds', 'New York Mets', 'Texas Rangers', ' San Diego Padres', 'Los Angeles Dodgers', 'Detroit Tigers', 'Miami Marlins', ' Houston Astros', 'Chicago Cubs', 'Oakland Athletics', 'Washington Nationals', ' Los Angeles Angels of Anaheim', ' San Francisco Giants', 'New York Mets', 'Washington Nationals'];

var bsPosition = ['Outfielder', 'Outfielder', 'Pitcher', 'Outfielder', 'Infielder', 'Starting Pitcher', 'Outfielder', 'Outfielder', 'Infielder', 'Infielder', 'Outfielder', 'Outfielder', 'Infielder', 'Catcher', 'Infielder'];

var bsInsta = ['NA', '@cgrand3', 'NA', '@therealmattkemp', '@therealchaseutley', '@danielnorris18', '@christianyelich', 'NA', '@kris_bryant17', '@blawrie1313', '@bharper3407', '@miketrout', 'NA', 'NA', 'NA'];

var bsMarital = [false, false, true, false, true, false, false, false, false, false, false, true, true, true, true];

var bsURL = [
  'http://hbz.h-cdn.co/assets/cm/15/04/480x720/54bd3d44a97aa_-_hbz-mlb-brennan-boesch-los-angeles-angels-453535280.jpg',
  'http://www.brothersonsports.com/wp-content/uploads/2015/04/CurtisGranderson.jpg',
  'http://www.csnphilly.com/sites/csnphilly/files/usa-cole-hamels_3.jpg',
  'http://a.espncdn.com/photo/2010/0629/la_u_kemp01_576.jpg',
  'http://i.usatoday.net/communitymanager/_photos/daily-pitch/2011/05/23/utley23x-large.jpg',
  'http://torontoobserver.ca/wp-content/uploads/2014/03/d-norris1.jpg',
  'http://a2.fssta.com/content/dam/fsdigital/RSN/Florida/2014/8/24/082414-fsf-mlb-miami-marlins-christian-yelich-PI.vadapt.620.high.0.jpg',
  'http://tireball.com/mlb/files/2014/04/georgespringer.jpg',
  'http://image2.redbull.com/rbcom/010/2015-04-17/1331717679418_4/0010/1/1500/1000/4/kris-bryant-portrait.JPG',
  'http://2.cdn.nhle.com/canadiens/images/upload/2012/08/brettlawrie.jpg',
  'http://thenationalsarchive.com/wp-content/uploads/2015/04/PI-MLB-BestPerson-BryceHarper-031414.jpg',
  'http://www.haloheadquarters.net/wp-content/uploads/2015/07/mlb_g_trout_kh_576.jpg',
  'https://24.media.tumblr.com/tumblr_lpw7049dMg1qhzipho1_1280.jpg',
  'http://img.spokeo.com/public/900-600/anthony_recker_2013_02_21.jpg',
  'https://c2.staticflickr.com/8/7232/7335227108_b14bd3a1a1_b.jpg'
];

var bsSport = "baseball"

var bsVote = 0

//Start of Database Baseball
var bsPlayer1 = {
  name: bsplayer[0],
  age: bsAge[0],
  salary: bsSalary[0],
  college: bsCollege[0],
  team: bsTeam[0],
  position: bsPosition[0],
  instagram_name: bsInsta[0],
  marital_status: bsMarital[0],
  jersey_number: bsJerseyNum[0],
  img_url: bsURL[0],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer1, function(player) {
  console.log("bs player 1 has worked");
});

var bsPlayer2 = {
  name: bsplayer[1],
  age: bsAge[1],
  salary: bsSalary[1],
  college: bsCollege[1],
  team: bsTeam[1],
  position: bsPosition[1],
  instagram_name: bsInsta[1],
  marital_status: bsMarital[1],
  jersey_number: bsJerseyNum[1],
  img_url: bsURL[1],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer2, function(player) {
  console.log("bs player 2 has worked");
});

var bsPlayer3 = {
  name: bsplayer[2],
  age: bsAge[2],
  salary: bsSalary[2],
  college: bsCollege[2],
  team: bsTeam[2],
  position: bsPosition[2],
  instagram_name: bsInsta[2],
  marital_status: bsMarital[2],
  jersey_number: bsJerseyNum[2],
  img_url: bsURL[2],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer3, function(player) {
  console.log("bs player 3 has worked");
});

var bsPlayer4 = {
  name: bsplayer[3],
  age: bsAge[3],
  salary: bsSalary[3],
  college: bsCollege[3],
  team: bsTeam[3],
  position: bsPosition[3],
  instagram_name: bsInsta[3],
  marital_status: bsMarital[3],
  jersey_number: bsJerseyNum[3],
  img_url: bsURL[3],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer4, function(player) {
  console.log("bs player 4 has worked");
});

var bsPlayer5 = {
  name: bsplayer[4],
  age: bsAge[4],
  salary: bsSalary[4],
  college: bsCollege[4],
  team: bsTeam[4],
  position: bsPosition[4],
  instagram_name: bsInsta[4],
  marital_status: bsMarital[4],
  jersey_number: bsJerseyNum[4],
  img_url: bsURL[4],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer5, function(player) {
  console.log("bs player 5 has worked");
});

var bsPlayer6 = {
  name: bsplayer[5],
  age: bsAge[5],
  salary: bsSalary[5],
  college: bsCollege[5],
  team: bsTeam[5],
  position: bsPosition[5],
  instagram_name: bsInsta[5],
  marital_status: bsMarital[5],
  jersey_number: bsJerseyNum[5],
  img_url: bsURL[5],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer6, function(player) {
  console.log("bs player 6 has worked");
});

var bsPlayer7 = {
  name: bsplayer[6],
  age: bsAge[6],
  salary: bsSalary[6],
  college: bsCollege[6],
  team: bsTeam[6],
  position: bsPosition[6],
  instagram_name: bsInsta[6],
  marital_status: bsMarital[6],
  jersey_number: bsJerseyNum[6],
  img_url: bsURL[6],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer7, function(player) {
  console.log("bs player 7 has worked");
});

var bsPlayer8 = {
  name: bsplayer[7],
  age: bsAge[7],
  salary: bsSalary[7],
  college: bsCollege[7],
  team: bsTeam[7],
  position: bsPosition[7],
  instagram_name: bsInsta[7],
  marital_status: bsMarital[7],
  jersey_number: bsJerseyNum[7],
  img_url: bsURL[7],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer8, function(player) {
  console.log("bs player 8 has worked");
});

var bsPlayer9 = {
  name: bsplayer[8],
  age: bsAge[8],
  salary: bsSalary[8],
  college: bsCollege[8],
  team: bsTeam[8],
  position: bsPosition[8],
  instagram_name: bsInsta[8],
  marital_status: bsMarital[8],
  jersey_number: bsJerseyNum[8],
  img_url: bsURL[8],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer9, function(player) {
  console.log("bs player 9 has worked");
});

var bsPlayer10 = {
  name: bsplayer[9],
  age: bsAge[9],
  salary: bsSalary[9],
  college: bsCollege[9],
  team: bsTeam[9],
  position: bsPosition[9],
  instagram_name: bsInsta[9],
  marital_status: bsMarital[9],
  jersey_number: bsJerseyNum[9],
  img_url: bsURL[9],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer10, function(player) {
  console.log("bs player 10 has worked");
});

var bsPlayer11 = {
  name: bsplayer[10],
  age: bsAge[10],
  salary: bsSalary[10],
  college: bsCollege[10],
  team: bsTeam[10],
  position: bsPosition[10],
  instagram_name: bsInsta[10],
  marital_status: bsMarital[10],
  jersey_number: bsJerseyNum[10],
  img_url: bsURL[10],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer11, function(player) {
  console.log("bs player 11 has worked");
});

var bsPlayer12 = {
  name: bsplayer[11],
  age: bsAge[11],
  salary: bsSalary[11],
  college: bsCollege[11],
  team: bsTeam[11],
  position: bsPosition[11],
  instagram_name: bsInsta[11],
  marital_status: bsMarital[11],
  jersey_number: bsJerseyNum[11],
  img_url: bsURL[11],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer12, function(player) {
  console.log("bs player 12 has worked");
});

var bsPlayer13 = {
  name: bsplayer[12],
  age: bsAge[12],
  salary: bsSalary[12],
  college: bsCollege[12],
  team: bsTeam[12],
  position: bsPosition[12],
  instagram_name: bsInsta[12],
  marital_status: bsMarital[12],
  jersey_number: bsJerseyNum[12],
  img_url: bsURL[12],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer13, function(player) {
  console.log("bs player 13 has worked");
});

var bsPlayer14 = {
  name: bsplayer[13],
  age: bsAge[13],
  salary: bsSalary[13],
  college: bsCollege[13],
  team: bsTeam[13],
  position: bsPosition[13],
  instagram_name: bsInsta[13],
  marital_status: bsMarital[13],
  jersey_number: bsJerseyNum[13],
  img_url: bsURL[13],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer14, function(player) {
  console.log("bs player 14 has worked");
});

var bsPlayer15 = {
  name: bsplayer[14],
  age: bsAge[14],
  salary: bsSalary[14],
  college: bsCollege[14],
  team: bsTeam[14],
  position: bsPosition[14],
  instagram_name: bsInsta[14],
  marital_status: bsMarital[14],
  jersey_number: bsJerseyNum[14],
  img_url: bsURL[14],
  sport: bsSport,
  upvote: bsVote
};

db.create('players', bsPlayer15, function(player) {
  console.log("bs player 15 has worked");
});


/*HOCKEY HOTTIES
---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------*/
var hplayer = ['Alexander Wennberg', 'David Rundblad', 'Brendan Smith', 'Henrik Lundqvist', 'Jonathan Toews', 'Ryan Kesler', 'Sydney Crosby', 'Erik Karlsson', 'Tyler Seguin', 'Jared Boll', 'Chris Higgins', 'Derick Brassard', 'Carey Price', 'Niklas Hjalmarsson', 'Erik Gudbranson'];

var hAge = [20, 24, 26, 33, 27, 30, 28, 25, 23, 29, 32, 27, 28, 28, 23];

var hSalary = ['925,000', '900,000(2013)'
  '2.25 million', '11 million', '6.5 million', '7.875 million(2017)', '12 million', '875,000(2012)', '5.5 million', '1.7 million', '2.5 million', '7 million', ' 6.75 million', ' 3.5 million(2013)', '2.25 million'
];

var hJerseyNum = [41, 5, 2, 30, 19, 17, 87, 65, 91, 40, 20, 16, 31, 4, 44];

var hCollege = ['NA', 'NA', 'NA', 'NA', 'Univ North Dakota', 'Ohio State', 'NA', 'NA', 'NA', 'NA', 'Yale University', 'NA', 'NA', 'NA', 'NA'];

var hTeam = ['Columbus Blue Jackets', 'Chicago Blackhawks', 'Detroit Red Wings', 'New York Rangers', 'Chicago Blackhawks', 'Anaheim Ducks', 'Pittsburgh Penguins', ' Ottawa Senators', 'Dallas Stars', ' Columbus Blue Jackets', 'Vancouver Canucks', 'New York Rangers', 'Montreal Canadiens', 'Chicago Blackhawks', ' Florida Panthers'];

var hPosition = ['Centerman', 'Defenseman', 'Defenseman', 'Goalie', 'Centerman', 'Centerman/Forward', 'Centerman', 'Defenseman', 'Centerman', 'Right Wing', 'Left Wing', 'Centerman', 'Goalie', 'Defenseman', 'Defenseman'];

var hInsta = ['@alexanderwennberg', '@davidrundblad', '@bssmith2', 'hank30nyr', '@19jtoew', 'NA', 'NA', '@erikkarlsson65', '@tseguin92', 'NA', 'NA', '@brassardderick', '@careyprice_31_', 'NA', '@guddy44'];

var hMarital = [false, false, false, true, false, true, false, true, false, false, false, false, true, true, false];

var hURL = [
  'http://cdn2-www.hockeysfuture.com/assets/uploads/2013/02/alexander_wennberg.jpg',
  'http://cdn.sportsoverdose.com/thumbs/david-rundblad-5-nhl-20150430011744.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/d0/60/34/d06034f8dec227c5a3505e400e03454b.jpg',
  'http://www4.pictures.zimbio.com/gi/Cinema+Society+Acura+Host+Screening+Thor+Arrivals+ccxS_i1VTrrx.jpg',
  'https://lifelooksbetterinred.files.wordpress.com/2011/11/toews2.jpg',
  'http://604now.com/wp-content/uploads/2012/01/6004612.jpg',
  'http://assets1.sportsnet.ca/wp-content/uploads/players/nhl/s/sidney-crosby.png',
  'http://gfx.aftonbladet-cdn.se/image/17526816/800/normal/6bcd983e84442/KAR.jpg',
  'https://nesncom.files.wordpress.com/2015/01/tyler-seguin.jpg',
  'http://cdn1.bloguin.com/wp-content/uploads/sites/164/2014/10/jared-boll.jpg',
  'https://4.bp.blogspot.com/-F0ZRbYw_Jkc/T49X0Pgmm5I/AAAAAAAAEAA/ABj5P9Cp9TQ/s400/tumblr_m1dsgdlvhn1qd5kl9o1_500.png',
  'http://www.whatsupyasieve.com/wp-content/uploads/2013/05/brassard2.jpg',
  'http://images.profileengine.com/large/422891232/carey.price.facebook.group',
  'https://s.yimg.com/zz/bt/api/res/1.2/AisDdy7gj7DPj6YzBXtpkg--/YXBwaWQ9eW5ld3M7aWw9cGxhbmU7cT03NTt3PTYwMA--/http://media.zenfs.com/en/person/Ysports/niklas-hjalmarsson-hockey-headshot-photo.jpg',
  'https://4.bp.blogspot.com/-slahC-NgvFo/UVkurAQGlAI/AAAAAAAAB5w/SblMPjDJHIc/s1600/tumblr_ltqipeJTZp1qzw3v6o1_500.jpg'
];

var hSport = "hockey"

var hVote = 0

//Database Stuff
var hPlayer1 = {
  name: hplayer[0],
  age: hAge[0],
  salary: hSalary[0],
  college: hCollege[0],
  team: hTeam[0],
  position: hPosition[0],
  instagram_name: hInsta[0],
  marital_status: hMarital[0],
  jersey_number: hJerseyNum[0],
  img_url: hURL[0],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer1, function(player) {
  console.log("h player 1 has worked");
});

var hPlayer2 = {
  name: hplayer[1],
  age: hAge[1],
  salary: hSalary[1],
  college: hCollege[1],
  team: hTeam[1],
  position: hPosition[1],
  instagram_name: hInsta[1],
  marital_status: hMarital[1],
  jersey_number: hJerseyNum[1],
  img_url: hURL[1],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer2, function(player) {
  console.log("h player 2 has worked");
});

var hPlayer3 = {
  name: hplayer[2],
  age: hAge[2],
  salary: hSalary[2],
  college: hCollege[2],
  team: hTeam[2],
  position: hPosition[2],
  instagram_name: hInsta[2],
  marital_status: hMarital[2],
  jersey_number: hJerseyNum[2],
  img_url: hURL[2],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer3, function(player) {
  console.log("h player 3 has worked");
});

var hPlayer4 = {
  name: hplayer[3],
  age: hAge[3],
  salary: hSalary[3],
  college: hCollege[3],
  team: hTeam[3],
  position: hPosition[3],
  instagram_name: hInsta[3],
  marital_status: hMarital[3],
  jersey_number: hJerseyNum[3],
  img_url: hURL[3],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer4, function(player) {
  console.log("h player 4 has worked");
});

var hPlayer5 = {
  name: hplayer[4],
  age: hAge[4],
  salary: hSalary[4],
  college: hCollege[4],
  team: hTeam[4],
  position: hPosition[4],
  instagram_name: hInsta[4],
  marital_status: hMarital[4],
  jersey_number: hJerseyNum[4],
  img_url: hURL[4],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer5, function(player) {
  console.log("h player 5 has worked");
});

var hPlayer6 = {
  name: hplayer[5],
  age: hAge[5],
  salary: hSalary[5],
  college: hCollege[5],
  team: hTeam[5],
  position: hPosition[5],
  instagram_name: hInsta[5],
  marital_status: hMarital[5],
  jersey_number: hJerseyNum[5],
  img_url: hURL[5],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer6, function(player) {
  console.log("h player 6 has worked");
});

var hPlayer7 = {
  name: hplayer[6],
  age: hAge[6],
  salary: hSalary[6],
  college: hCollege[6],
  team: hTeam[6],
  position: hPosition[6],
  instagram_name: hInsta[6],
  marital_status: hMarital[6],
  jersey_number: hJerseyNum[6],
  img_url: hURL[6],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer7, function(player) {
  console.log("h player 7 has worked");
});

var hPlayer8 = {
  name: hplayer[7],
  age: hAge[7],
  salary: hSalary[7],
  college: hCollege[7],
  team: hTeam[7],
  position: hPosition[7],
  instagram_name: hInsta[7],
  marital_status: hMarital[7],
  jersey_number: hJerseyNum[7],
  img_url: hURL[7],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer8, function(player) {
  console.log("h player 8 has worked");
});

var hPlayer9 = {
  name: hplayer[8],
  age: hAge[8],
  salary: hSalary[8],
  college: hCollege[8],
  team: hTeam[8],
  position: hPosition[8],
  instagram_name: hInsta[8],
  marital_status: hMarital[8],
  jersey_number: hJerseyNum[8],
  img_url: hURL[8],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer9, function(player) {
  console.log("h player 9 has worked");
});

var hPlayer10 = {
  name: hplayer[9],
  age: hAge[9],
  salary: hSalary[9],
  college: hCollege[9],
  team: hTeam[9],
  position: hPosition[9],
  instagram_name: hInsta[9],
  marital_status: hMarital[9],
  jersey_number: hJerseyNum[9],
  img_url: hURL[9],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer10, function(player) {
  console.log("h player 10 has worked");
});

var hPlayer11 = {
  name: hplayer[10],
  age: hAge[10],
  salary: hSalary[10],
  college: hCollege[10],
  team: hTeam[10],
  position: hPosition[10],
  instagram_name: hInsta[10],
  marital_status: hMarital[10],
  jersey_number: hJerseyNum[10],
  img_url: hURL[10],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer11, function(player) {
  console.log("h player 11 has worked");
});

var hPlayer12 = {
  name: hplayer[11],
  age: hAge[11],
  salary: hSalary[11],
  college: hCollege[11],
  team: hTeam[11],
  position: hPosition[11],
  instagram_name: hInsta[11],
  marital_status: hMarital[11],
  jersey_number: hJerseyNum[11],
  img_url: hURL[11],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer12, function(player) {
  console.log("h player 12 has worked");
});

var hPlayer13 = {
  name: hplayer[12],
  age: hAge[12],
  salary: hSalary[12],
  college: hCollege[12],
  team: hTeam[12],
  position: hPosition[12],
  instagram_name: hInsta[12],
  marital_status: hMarital[12],
  jersey_number: hJerseyNum[12],
  img_url: hURL[12],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer13, function(player) {
  console.log("h player 13 has worked");
});

var hPlayer14 = {
  name: hplayer[13],
  age: hAge[13],
  salary: hSalary[13],
  college: hCollege[13],
  team: hTeam[13],
  position: hPosition[13],
  instagram_name: hInsta[13],
  marital_status: hMarital[13],
  jersey_number: hJerseyNum[13],
  img_url: hURL[13],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer14, function(player) {
  console.log("h player 14 has worked");
});

var hPlayer15 = {
  name: hplayer[14],
  age: hAge[14],
  salary: hSalary[14],
  college: hCollege[14],
  team: hTeam[14],
  position: hPosition[14],
  instagram_name: hInsta[14],
  marital_status: hMarital[14],
  jersey_number: hJerseyNum[14],
  img_url: hURL[14],
  sport: hSport,
  upvote: hVote
};
db.create('players', hPlayer15, function(player) {
  console.log("h player 15 has worked");
});


/*FOOTBALL HOTTIES
---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------*/
var fplayer = ['Eric Decker', 'Tom Brady', 'Danny Amendola', 'Reggie Bush', 'Arian Foster', 'Brady Quinn', 'Miles Austin', 'Jordan Cameron', 'Cam Newton', 'Brylon Edwards', 'Mark Sanchez', 'Trent Edwards', 'Wes Welker', 'Sam Bradford', 'Joe Flacco'];

var fAge = [28, 38, 29, 30, 29, 30, 31, 27, 26, 32, 28, 31, 34, 27, 30];

var fSalary = ['36,250,000(5 year contract)', '$27,000,000(3 year contract', '$3.116 million', '$2,500,000(1 year contract', '$43,500,000(5 year contract', 'NA', '2,3 million(1 year contract)', '15 million(2 year contract)', '22,500,000', '$1,000,000(2011)', '$9,000,000(2 year contract)', '$730,000(1 contract past)', '$2 million(2013)', '13,007,500', '120.6 million'];

var fJerseyNum = [87, 12, 80, 23, 23, -0, 19, 84, 1, -0, 3, -0, -0, 7, 5];

var fCollege = ['Minnesota', 'University of Michigan', 'Texas Tech', 'USC', 'Tennesse', 'Notre Dame', 'Monmouth', 'USC', 'Auburn', 'Michigan', 'USC', 'Stanford', 'Texas Tech', 'Oklahoma', 'Univ of Delaware'];

var fTeam = ['NY Jets', 'New England Patriots', 'New England Patriots', 'San Francisco 49ers', 'Houston Texas', 'Free Agent', 'Philadelphia Eagles', 'Miami Dolphins', 'Carolina Panthers', 'Free Agent', 'Philadelphia Eagles', 'Free Agent', 'Free Agent', 'Philadelphia Eagles', 'Baltimore Ravens'];

var fPosition = ['Wide Reciever', 'Quarterback', 'Wide Reciever', 'Running Back', 'Running Back', 'Quarterback', 'Wide Reciever', 'Tight End', 'Quarterback', 'Wide Reciever', 'Quarterback', 'Quarterback', 'Wide Reciever', 'Quarterback', 'Quarterback'];

var fInsta = ['@edeck87', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', '@cameron1newton', 'NA', '@mark_sanchez', 'NA', 'NA', 'NA', 'NA'];

var fMarital = [true, true, false, true, true, true, true, false, false, false, false, false, true, false, false];

var fURL = [
  'http://a.fssta.com/content/dam/fsdigital/fscom/Newsletter/NFL/Jets/14/08/27/082714-NFL-Jets-Eric-Decker-PI-CH-2.vresize.1200.675.high.93.jpg',
  'https://i1.wp.com/radaronline.com/wp-content/uploads/2015/02/tom-brady-pursue-acting.jpg?fit=551%2C9999',
  'https://s-media-cache-ak0.pinimg.com/236x/ec/61/58/ec6158dd8a0a03208b0320adf1de8583.jpg',
  'http://5pillarsuk.com/wp-content/uploads/2014/11/Reggie-Bush1.jpg',
  'http://www.gannett-cdn.com/-mm-/2d8d2131106c1ae8fb9e4117865c3bad0d7cb1ac/c=83-456-4023-3421&r=x404&c=534x401/local/-/media/USATODAY/test/2014/01/14//1389724143000-USATSI-7404087.jpg',
  'https://usatftw.files.wordpress.com/2014/07/ap-nfl-broadcast-boot-camp-football.jpg?w=1000&h=750',
  'http://i.usatoday.net/communitymanager/_photos/the-huddle/2012/08/19/Miles-Austinx-large.jpg',
  'http://www.clevelandbrowns.com/assets/images/imported/CLE/photos/2014/site_images/cameron_576_090214.jpg',
  'http://wp.auburn.edu/auburnmagazine/wp-content/uploads/2013/01/cam.jpg',
  'http://www.femalefan.com/wp-content/uploads//2011/08/81957864.jpg',
  'https://nyppagesix.files.wordpress.com/2013/08/mark_sanchez-300x300.jpg',
  'http://cbssports.com/images/nfl/photogallery/Trent_Edwards_Waiver_Process.jpg',
  'http://wlabradio.com/wp-content/uploads/2014/09/welker.jpg',
  'http://www.buffalobruises.com/wp-content/uploads/2015/03/sambradford.jpg',
  'http://www.hdwallpapersimages.com/wp-content/uploads/2014/02/Joe-Flacco-2014-Images-540x303.jpg'
];

var fSport = "football"

var fVote = 0

var fPlayer1 = {
  name: fplayer[0],
  age: fAge[0],
  salary: fSalary[0],
  college: fCollege[0],
  team: fTeam[0],
  position: fPosition[0],
  instagram_name: fInsta[0],
  marital_status: fMarital[0],
  jersey_number: fJerseyNum[0],
  img_url: fURL[0],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer1, function(player) {
  console.log("f player 1 has worked");
});

var fPlayer2 = {
  name: fplayer[1],
  age: fAge[1],
  salary: fSalary[1],
  college: fCollege[1],
  team: fTeam[1],
  position: fPosition[1],
  instagram_name: fInsta[1],
  marital_status: fMarital[1],
  jersey_number: fJerseyNum[1],
  img_url: fURL[1],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer2, function(player) {
  console.log("f player 2 has worked");
});

var fPlayer3 = {
  name: fplayer[2],
  age: fAge[2],
  salary: fSalary[2],
  college: fCollege[2],
  team: fTeam[2],
  position: fPosition[2],
  instagram_name: fInsta[2],
  marital_status: fMarital[2],
  jersey_number: fJerseyNum[2],
  img_url: fURL[2],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer3, function(player) {
  console.log("f player 3 has worked");
});

var fPlayer4 = {
  name: fplayer[3],
  age: fAge[3],
  salary: fSalary[3],
  college: fCollege[3],
  team: fTeam[3],
  position: fPosition[3],
  instagram_name: fInsta[3],
  marital_status: fMarital[3],
  jersey_number: fJerseyNum[3],
  img_url: fURL[3],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer4, function(player) {
  console.log("f player 4 has worked");
});

var fPlayer5 = {
  name: fplayer[4],
  age: fAge[4],
  salary: fSalary[4],
  college: fCollege[4],
  team: fTeam[4],
  position: fPosition[4],
  instagram_name: fInsta[4],
  marital_status: fMarital[4],
  jersey_number: fJerseyNum[4],
  img_url: fURL[4],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer5, function(player) {
  console.log("f player 5 has worked");
});

var fPlayer6 = {
  name: fplayer[5],
  age: fAge[5],
  salary: fSalary[5],
  college: fCollege[5],
  team: fTeam[5],
  position: fPosition[5],
  instagram_name: fInsta[5],
  marital_status: fMarital[5],
  jersey_number: fJerseyNum[5],
  img_url: fURL[5],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer6, function(player) {
  console.log("f player 6 has worked");
});

var fPlayer7 = {
  name: fplayer[6],
  age: fAge[6],
  salary: fSalary[6],
  college: fCollege[6],
  team: fTeam[6],
  position: fPosition[6],
  instagram_name: fInsta[6],
  marital_status: fMarital[6],
  jersey_number: fJerseyNum[6],
  img_url: fURL[6],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer7, function(player) {
  console.log("f player 7 has worked");
});

var fPlayer8 = {
  name: fplayer[7],
  age: fAge[7],
  salary: fSalary[7],
  college: fCollege[7],
  team: fTeam[7],
  position: fPosition[7],
  instagram_name: fInsta[7],
  marital_status: fMarital[7],
  jersey_number: fJerseyNum[7],
  img_url: fURL[7],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer8, function(player) {
  console.log("f player 8 has worked");
});

var fPlayer9 = {
  name: fplayer[8],
  age: fAge[8],
  salary: fSalary[8],
  college: fCollege[8],
  team: fTeam[8],
  position: fPosition[8],
  instagram_name: fInsta[8],
  marital_status: fMarital[8],
  jersey_number: fJerseyNum[8],
  img_url: fURL[8],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer9, function(player) {
  console.log("f player 9 has worked");
});

var fPlayer10 = {
  name: fplayer[9],
  age: fAge[9],
  salary: fSalary[9],
  college: fCollege[9],
  team: fTeam[9],
  position: fPosition[9],
  instagram_name: fInsta[9],
  marital_status: fMarital[9],
  jersey_number: fJerseyNum[9],
  img_url: fURL[9],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer10, function(player) {
  console.log("f player 10 has worked");
});

var fPlayer11 = {
  name: fplayer[10],
  age: fAge[10],
  salary: fSalary[10],
  college: fCollege[10],
  team: fTeam[10],
  position: fPosition[10],
  instagram_name: fInsta[10],
  marital_status: fMarital[10],
  jersey_number: fJerseyNum[10],
  img_url: fURL[10],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer11, function(player) {
  console.log("f player 11 has worked");
});

var fPlayer12 = {
  name: fplayer[11],
  age: fAge[11],
  salary: fSalary[11],
  college: fCollege[11],
  team: fTeam[11],
  position: fPosition[11],
  instagram_name: fInsta[11],
  marital_status: fMarital[11],
  jersey_number: fJerseyNum[11],
  img_url: fURL[11],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer12, function(player) {
  console.log("f player 12 has worked");
});

var fPlayer13 = {
  name: fplayer[12],
  age: fAge[12],
  salary: fSalary[12],
  college: fCollege[12],
  team: fTeam[12],
  position: fPosition[12],
  instagram_name: fInsta[12],
  marital_status: fMarital[12],
  jersey_number: fJerseyNum[12],
  img_url: fURL[12],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer13, function(player) {
  console.log("f player 13 has worked");
});

var fPlayer14 = {
  name: fplayer[13],
  age: fAge[13],
  salary: fSalary[13],
  college: fCollege[13],
  team: fTeam[13],
  position: fPosition[13],
  instagram_name: fInsta[13],
  marital_status: fMarital[13],
  jersey_number: fJerseyNum[13],
  img_url: fURL[13],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer14, function(player) {
  console.log("f player 14 has worked");
});

var fPlayer15 = {
  name: fplayer[14],
  age: fAge[14],
  salary: fSalary[14],
  college: fCollege[14],
  team: fTeam[14],
  position: fPosition[14],
  instagram_name: fInsta[14],
  marital_status: fMarital[14],
  jersey_number: fJerseyNum[14],
  img_url: fURL[14],
  sport: fSport,
  upvote: fVote
};
db.create('players', fPlayer15, function(player) {
  console.log("f player 15 has worked");
});

/*BASKETBALL HOTTIES
---------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------*/

var bkplayer = ['Kobe Bryant', 'Jonas Jerebko', 'Wesley Matthews', 'Blake Griffin', 'LeBron James', 'Tyson Chandler', 'Chandler Parsons', 'JJ Redick', 'Dwyane Wade', 'John Wall', 'Chris Paul', 'Serge Ibaka', 'D.J. Augustin', 'Cory Joseph', 'Tristan Thompson'];

var bkAge = [37, 28, 28, 26, 30, 32, 26, 31, 33, 24, 30, 25, 27, 24, 24];

var bkSalary = ['25 million', '4.5 million', '16.41 million', '17.67 million', '24 million', '13 million', '850,000', '6.75 million', '20 million', '7.46 million', '21.47 million', '2.18 million', '3 million', '7 million', '5.13 million'];

var bkJerseyNum = [24, 33, 2, 32, 23, 6, 25, 4, 3, 2, 3, 9, 14, 1, 13];

var bkCollege = ['None', 'None', 'Marquette', 'Oklahoma', 'None', 'None', 'Florida', 'Duke', 'Marquette', 'Kentucky', 'Wake Forest University', 'None', 'Univ of Texas', 'None', 'Univ of Texas'];

var bkTeam = ['LA Lakers', 'Boston Celtics', 'Dallas Mavericks', 'Los Angeles Clippers', 'Cleveland Cavaliers', 'Phoenix Suns', 'Dallas Mavericks', 'Los Angeles Clippers', 'Miami Heat', 'Washington Wizards', 'Los Angeles Clippers', 'Oklahoma City Thunder', 'Chicago Bulls', 'Toronto Raptors', 'Cleveland Cavaliers'];

var bkPosition = ['Shooting Guard', 'Power Forward', 'Shooting Guard', 'Power Forward', 'Small Foward', 'Center', 'Small Foward', 'Shooting Guard', 'Shooting guard', 'Point Guard', 'Point Guard', 'Power Forward/Center', 'Point guard', 'Point Guard', 'Center/Power Foward'];

var bkinstaName = ['@kobebryant', '@Jonasjerebko8', '@wessywes23', '@blakegriffin32', '@kingjames', '@tysonchandler', '@chandlerparsons', '@jjredick4', '@dwyanewade', '@johnwall', '@cp3', '@mr_avecclasse', '@d.j.augustin14_', '@coryjoseph', '@realtristan13'];

var bkMarital = [true, false, false, false, true, true, false, true, true, false, true, false, true, false, false];

var bkImgUrl = [
  'http://img.bleacherreport.net/img/images/photos/002/996/162/hi-res-2601425217d29b9bbc2d722d00dbc0da_crop_north.jpg?w=630&h=420&q=75',
  'http://karlstadbasket.se/wp-content/uploads/2014/10/Jonas-Jerebko-2.jpg',
  'http://edraft.com/image/nba/player/725953',
  'https://s-media-cache-ak0.pinimg.com/236x/94/81/5a/94815a951fd37c54a6d4252254a9c6e1.jpg',
  'http://theaustintimes.com/wp-content/uploads/2015/06/lebronjames23.jpg',
  'http://a2.fssta.com/content/dam/fsdigital/RSN/Southwest/2014/12/08/120814-SW-NBA-Tyson-Chandler-PI.vadapt.620.high.0.jpg',
  'http://media-cache-ec0.pinimg.com/736x/b6/73/31/b6733188e357d4e2c139c383e9e38e3c.jpg',
  'http://images.mstarz.com/data/images/full/16165/redick.jpg',
  'http://pe2.samondeo.com/images1/dwyane-wade-6.jpg',
  'all+Washington+Wizards+v+Charlotte+Bobcats+k5afz6JYy8Tl.jpg',
  'http://playerperspective.com/wp-content/uploads/2013/08/chrispaulglasses.jpg',
  'http://pic4.zhongsou.com/img?id=48055131ec151e55fa0',
  'http://img.bleacherreport.net/img/images/photos/002/975/768/hi-res-221a480788f7d1f4319e6027b9668e0b_crop_north.jpg?w=630&h=420&q=75',
  'http://www.basketusa.com/wp-content/uploads/2015/07/cory-joseph.jpg',
  'https://36.media.tumblr.com/2f533eb3801274ce3484687219b78569/tumblr_ndricvT5Gc1qbcs46o1_500.jpg'
];

var bkSport = "basketball"

var bkVote = 0

var bkPlayer1 = {
  name: bkplayer[0],
  age: bkAge[0],
  salary: bkSalary[0],
  college: bkCollege[0],
  team: bkTeam[0],
  position: bkPosition[0],
  instagram_name: bkInsta[0],
  marital_status: bkMarital[0],
  jersey_number: bkJerseyNum[0],
  img_url: bkURL[0],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer1, function(player) {
  console.log("bk player 1 has worked");
});

var bkPlayer2 = {
  name: bkplayer[1],
  age: bkAge[1],
  salary: bkSalary[1],
  college: bkCollege[1],
  team: bkTeam[1],
  position: bkPosition[1],
  instagram_name: bkInsta[1],
  marital_status: bkMarital[1],
  jersey_number: bkJerseyNum[1],
  img_url: bkURL[1],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer2, function(player) {
  console.log("bk player 2 has worked");
});

var bkPlayer3 = {
  name: bkplayer[2],
  age: bkAge[2],
  salary: bkSalary[2],
  college: bkCollege[2],
  team: bkTeam[2],
  position: bkPosition[2],
  instagram_name: bkInsta[2],
  marital_status: bkMarital[2],
  jersey_number: bkJerseyNum[2],
  img_url: bkURL[2],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer3, function(player) {
  console.log("bk player 3 has worked");
});

var bkPlayer4 = {
  name: bkplayer[3],
  age: bkAge[3],
  salary: bkSalary[3],
  college: bkCollege[3],
  team: bkTeam[3],
  position: bkPosition[3],
  instagram_name: bkInsta[3],
  marital_status: bkMarital[3],
  jersey_number: bkJerseyNum[3],
  img_url: bkURL[3],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer4, function(player) {
  console.log("bk player 4 has worked");
});

var bkPlayer5 = {
  name: bkplayer[4],
  age: bkAge[4],
  salary: bkSalary[4],
  college: bkCollege[4],
  team: bkTeam[4],
  position: bkPosition[4],
  instagram_name: bkInsta[4],
  marital_status: bkMarital[4],
  jersey_number: bkJerseyNum[4],
  img_url: bkURL[4],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer5, function(player) {
  console.log("bk player 5 has worked");
});

var bkPlayer6 = {
  name: bkplayer[5],
  age: bkAge[5],
  salary: bkSalary[5],
  college: bkCollege[5],
  team: bkTeam[5],
  position: bkPosition[5],
  instagram_name: bkInsta[5],
  marital_status: bkMarital[5],
  jersey_number: bkJerseyNum[5],
  img_url: bkURL[5],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer6, function(player) {
  console.log("bk player 6 has worked");
});

var bkPlayer7 = {
  name: bkplayer[6],
  age: bkAge[6],
  salary: bkSalary[6],
  college: bkCollege[6],
  team: bkTeam[6],
  position: bkPosition[6],
  instagram_name: bkInsta[6],
  marital_status: bkMarital[6],
  jersey_number: bkJerseyNum[6],
  img_url: bkURL[6],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer7, function(player) {
  console.log("bk player 7 has worked");
});

var bkPlayer8 = {
  name: bkplayer[7],
  age: bkAge[7],
  salary: bkSalary[7],
  college: bkCollege[7],
  team: bkTeam[7],
  position: bkPosition[7],
  instagram_name: bkInsta[7],
  marital_status: bkMarital[7],
  jersey_number: bkJerseyNum[7],
  img_url: bkURL[7],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer8, function(player) {
  console.log("bk player 8 has worked");
});

var bkPlayer9 = {
  name: bkplayer[8],
  age: bkAge[8],
  salary: bkSalary[8],
  college: bkCollege[8],
  team: bkTeam[8],
  position: bkPosition[8],
  instagram_name: bkInsta[8],
  marital_status: bkMarital[8],
  jersey_number: bkJerseyNum[8],
  img_url: bkURL[8],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer9, function(player) {
  console.log("bk player 9 has worked");
});

var bkPlayer10 = {
  name: bkplayer[9],
  age: bkAge[9],
  salary: bkSalary[9],
  college: bkCollege[9],
  team: bkTeam[9],
  position: bkPosition[9],
  instagram_name: bkInsta[9],
  marital_status: bkMarital[9],
  jersey_number: bkJerseyNum[9],
  img_url: bkURL[9],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer10, function(player) {
  console.log("bk player 10 has worked");
});

var bkPlayer11 = {
  name: bkplayer[10],
  age: bkAge[10],
  salary: bkSalary[10],
  college: bkCollege[10],
  team: bkTeam[10],
  position: bkPosition[10],
  instagram_name: bkInsta[10],
  marital_status: bkMarital[10],
  jersey_number: bkJerseyNum[10],
  img_url: bkURL[10],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer11, function(player) {
  console.log("bk player 11 has worked");
});

var bkPlayer12 = {
  name: bkplayer[11],
  age: bkAge[11],
  salary: bkSalary[11],
  college: bkCollege[11],
  team: bkTeam[11],
  position: bkPosition[11],
  instagram_name: bkInsta[11],
  marital_status: bkMarital[11],
  jersey_number: bkJerseyNum[11],
  img_url: bkURL[11],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer12, function(player) {
  console.log("bk player 12 has worked");
});

var bkPlayer13 = {
  name: bkplayer[12],
  age: bkAge[12],
  salary: bkSalary[12],
  college: bkCollege[12],
  team: bkTeam[12],
  position: bkPosition[12],
  instagram_name: bkInsta[12],
  marital_status: bkMarital[12],
  jersey_number: bkJerseyNum[12],
  img_url: bkURL[12],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer13, function(player) {
  console.log("bk player 13 has worked");
});

var bkPlayer14 = {
  name: bkplayer[13],
  age: bkAge[13],
  salary: bkSalary[13],
  college: bkCollege[13],
  team: bkTeam[13],
  position: bkPosition[13],
  instagram_name: bkInsta[13],
  marital_status: bkMarital[13],
  jersey_number: bkJerseyNum[13],
  img_url: bkURL[13],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer14, function(player) {
  console.log("bk player 14 has worked");
});

var bkPlayer15 = {
  name: bkplayer[14],
  age: bkAge[14],
  salary: bkSalary[14],
  college: bkCollege[14],
  team: bkTeam[14],
  position: bkPosition[14],
  instagram_name: bkInsta[14],
  marital_status: bkMarital[14],
  jersey_number: bkJerseyNum[14],
  img_url: bkURL[14],
  sport: bkSport,
  upvote: bkVote
};
db.create('players', bkPlayer15, function(player) {
  console.log("bk player 15 has worked");
});


/*SOCCER HOTTIES
---------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------*/
var splayer = ['Ricardo Kaka', 'Heath Pearce', 'Benny Feilhaber', 'Zachary Loyd', 'Ryan Johnson', 'Orr Barouch', 'Chris Pontius', 'Graham Zusi', 'Chris Wondolowski', 'Matt Besler', 'Matías Laba', 'Lee Nguyen', 'Fabian Espindola', 'Dom Dwyer', 'Nat Borchers'];

var sAge = [33, 31, 30, 28, 30, 23, 28, 29, 32, 28, 23, 28, 30, 25, 34];

var sSalary = ['6.66 million', ' 292,499(2012)', '400,000(2012)', '73,975(2012)', '137,813(2012)', '44,000(2012)', '155,000(2012)', '105,000(2012)', '300,000(2012)', '91,751(2012)', '325,000', '44,000(2012)', '125,000(2012)', '60,000(2012)', '200,004(2012)'];

var sJerseyNum = [10, 3, 10, 17, 9, 15, 13, 8, 8, 5, 15, 24, 9, 14, 6];

var sTeam = ['Orlando City', 'Orlando City', 'Kansas City', 'FC Dallas', 'Seoul E-Land FC', 'Maccabi Netanya', 'DC United', 'Kansas City', ' San Jose Earthquakes', 'Kansas City', 'Vancouver Whitecaps FC', 'New England Revolution', 'DC United', 'Kansas City', ' Real Salt Lake'];

var sPosition = ['Midfielder', 'Defender', 'Midfielder', 'Defender', 'Forward', 'Forward', 'Midfielder', 'Midfielder', 'Forward', 'Center Defender', 'Midfielder', 'Midfielder', 'Forward', 'Forward', 'Defender'];

var sInsta = ['@kaka', '@heathpearce', 'NA', 'NA', 'NA', 'NA', '@chrispontius13', '@gzusi', '@ChrisWondo', '@mattbesler', 'NA', '@leenguyen24'
  'NA', '@ddwyer14', 'NA'
];

var sMarital = [true, true, true, true, true, false, false, false, true, true, false, false, false, true, true];

var sURL = [
  'http://news.xinhuanet.com/english/2009-06/09/xin_4120606090845750289654.jpg',
  'http://www.fcdallas.com/sites/dallas/files/imagecache/620x350/image_nodes/2010/05/heath-pearce-US.jpg',
  'http://bornwiki.com/bio/benny-feilhaber.jpg',
  'http://www.fcdallas.com/sites/dallas/files/imagecache/620x350/image_nodes/2011/08/Loyd-USMNT.jpg',
  'http://i.smimg.net/12/47/ryan-johnson-toronto-fc.jpg',
  'http://www.chicago-fire.com/sites/chicago/files/image_nodes/2014/02/Barouch%20Embed.png',
  'http://www.dcunited.com/sites/dc/files/image_nodes/2011/11/pontius.jpg',
  'http://a.abcnews.com/images/Sports/ap_graham_zusi_jc_140711_16x9_992.jpg',
  'http://www.ussoccer.com/~/media/images/mnt/players/wondolowski/wondolowski_chris_2015.jpg',
  'http://isportsweb.com/wp-content/uploads//2014/07/Matt-Besler.jpeg',
  'http://vancouver-mp7static.mlsdigital.net/styles/image_player_headshot/s3/mp6/players/head-shots/Mat%C3%ADasLaba.png?W2Wjs4FfDpRksrRyt8GFFugn2obbnzBL&itok=hWWvBfQ5',
  'http://soccerblog.dallasnews.com/files/2014/02/lee-nguyen.jpg',
  'http://www.sbisoccer.com/images/2014/07/FabianEspindolaDCUnited1-FCDallas2014-ISIPhotos.jpg',
  'https://s3.amazonaws.com/assets.asn.com/production/attacheds/6886/original/8614_isi_dwyerdom_MLSACK042614141.jpg?1407333011',
  'http://a.fssta.com/content/dam/fsdigital/fscom/Soccer/images/2014/12/08/120814-SOCCER-rsl-nat-borchers-ahn-PI.vresize.1200.675.high.52.jpg',
];

var sSport = "soccer"

var sVote = 0

var sPlayer1 = {
  name: splayer[0],
  age: sAge[0],
  salary: sSalary[0],
  college: sCollege[0],
  team: sTeam[0],
  position: sPosition[0],
  instagram_name: sInsta[0],
  marital_status: sMarital[0],
  jersey_number: sJerseyNum[0],
  img_url: sURL[0],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer1, function(player) {
  console.log("s player 1 has worked");
});

var sPlayer2 = {
  name: splayer[1],
  age: sAge[1],
  salary: sSalary[1],
  college: sCollege[1],
  team: sTeam[1],
  position: sPosition[1],
  instagram_name: sInsta[1],
  marital_status: sMarital[1],
  jersey_number: sJerseyNum[1],
  img_url: sURL[1],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer2, function(player) {
  console.log("s player 2 has worked");
});

var sPlayer3 = {
  name: splayer[2],
  age: sAge[2],
  salary: sSalary[2],
  college: sCollege[2],
  team: sTeam[2],
  position: sPosition[2],
  instagram_name: sInsta[2],
  marital_status: sMarital[2],
  jersey_number: sJerseyNum[2],
  img_url: sURL[2],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer3, function(player) {
  console.log("s player 3 has worked");
});

var sPlayer4 = {
  name: splayer[3],
  age: sAge[3],
  salary: sSalary[3],
  college: sCollege[3],
  team: sTeam[3],
  position: sPosition[3],
  instagram_name: sInsta[3],
  marital_status: sMarital[3],
  jersey_number: sJerseyNum[3],
  img_url: sURL[3],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer4, function(player) {
  console.log("s player 4 has worked");
});

var sPlayer5 = {
  name: splayer[4],
  age: sAge[4],
  salary: sSalary[4],
  college: sCollege[4],
  team: sTeam[4],
  position: sPosition[4],
  instagram_name: sInsta[4],
  marital_status: sMarital[4],
  jersey_number: sJerseyNum[4],
  img_url: sURL[4],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer5, function(player) {
  console.log("s player 5 has worked");
});

var sPlayer6 = {
  name: splayer[5],
  age: sAge[5],
  salary: sSalary[5],
  college: sCollege[5],
  team: sTeam[5],
  position: sPosition[5],
  instagram_name: sInsta[5],
  marital_status: sMarital[5],
  jersey_number: sJerseyNum[5],
  img_url: sURL[5],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer6, function(player) {
  console.log("s player 6 has worked");
});

var sPlayer7 = {
  name: splayer[6],
  age: sAge[6],
  salary: sSalary[6],
  college: sCollege[6],
  team: sTeam[6],
  position: sPosition[6],
  instagram_name: sInsta[6],
  marital_status: sMarital[6],
  jersey_number: sJerseyNum[6],
  img_url: sURL[6],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer7, function(player) {
  console.log("s player 7 has worked");
});

var sPlayer8 = {
  name: splayer[7],
  age: sAge[7],
  salary: sSalary[7],
  college: sCollege[7],
  team: sTeam[7],
  position: sPosition[7],
  instagram_name: sInsta[7],
  marital_status: sMarital[7],
  jersey_number: sJerseyNum[7],
  img_url: sURL[7],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer8, function(player) {
  console.log("s player 8 has worked");
});

var sPlayer9 = {
  name: splayer[8],
  age: sAge[8],
  salary: sSalary[8],
  college: sCollege[8],
  team: sTeam[8],
  position: sPosition[8],
  instagram_name: sInsta[8],
  marital_status: sMarital[8],
  jersey_number: sJerseyNum[8],
  img_url: sURL[8],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer9, function(player) {
  console.log("s player 9 has worked");
});

var sPlayer10 = {
  name: splayer[9],
  age: sAge[9],
  salary: sSalary[9],
  college: sCollege[9],
  team: sTeam[9],
  position: sPosition[9],
  instagram_name: sInsta[9],
  marital_status: sMarital[9],
  jersey_number: sJerseyNum[9],
  img_url: sURL[9],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer10, function(player) {
  console.log("s player 10 has worked");
});

var sPlayer11 = {
  name: splayer[10],
  age: sAge[10],
  salary: sSalary[10],
  college: sCollege[10],
  team: sTeam[10],
  position: sPosition[10],
  instagram_name: sInsta[10],
  marital_status: sMarital[10],
  jersey_number: sJerseyNum[10],
  img_url: sURL[10],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer11, function(player) {
  console.log("s player 11 has worked");
});

var sPlayer12 = {
  name: splayer[11],
  age: sAge[11],
  salary: sSalary[11],
  college: sCollege[11],
  team: sTeam[11],
  position: sPosition[11],
  instagram_name: sInsta[11],
  marital_status: sMarital[11],
  jersey_number: sJerseyNum[11],
  img_url: sURL[11],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer12, function(player) {
  console.log("s player 12 has worked");
});

var sPlayer13 = {
  name: splayer[12],
  age: sAge[12],
  salary: sSalary[12],
  college: sCollege[12],
  team: sTeam[12],
  position: sPosition[12],
  instagram_name: sInsta[12],
  marital_status: sMarital[12],
  jersey_number: sJerseyNum[12],
  img_url: sURL[12],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer13, function(player) {
  console.log("s player 13 has worked");
});

var sPlayer14 = {
  name: splayer[13],
  age: sAge[13],
  salary: sSalary[13],
  college: sCollege[13],
  team: sTeam[13],
  position: sPosition[13],
  instagram_name: sInsta[13],
  marital_status: sMarital[13],
  jersey_number: sJerseyNum[13],
  img_url: sURL[13],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer14, function(player) {
  console.log("s player 14 has worked");
});

var sPlayer15 = {
  name: splayer[14],
  age: sAge[14],
  salary: sSalary[14],
  college: sCollege[14],
  team: sTeam[14],
  position: sPosition[14],
  instagram_name: sInsta[14],
  marital_status: sMarital[14],
  jersey_number: sJerseyNum[14],
  img_url: sURL[14],
  sport: sSport,
  upvote: sVote
};
db.create('players', sPlayer15, function(player) {
  console.log("s player 15 has worked");
});
