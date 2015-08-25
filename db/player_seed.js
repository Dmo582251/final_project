var db = require('../db.js');





//Baseball Hotties
var bsplayer = [];

var bsAge = [];

var bsSalary = [];

var bsJerseyNum = [];

var bsCollege = [];

var bsTeam = [];

var bsPosition = [];

var bsInsta = [];

var bsMarital = [];

var bsURL = [];

var bsSport = "baseball"

var bsVote = 0


//Hockey Hotties
var hplayer = [];

var hAge = [];

var hSalary = [];

var hJerseyNum = [];

var hCollege = [];

var hTeam = [];

var hPosition = [];

var hInsta = [];

var hMarital = [];

var hURL = [];

var hSport = "hockey"

var hVote = 0



//Football Hotties
var fplayer = [];

var fAge = [];

var fSalary = [];

var fJerseyNum = [];

var fCollege = [];

var fTeam = [];

var fPosition = [];

var fInsta = [];

var fMarital = [];

var fURL = [];

var fSport = "hockey"

var fVote = 0




//Basketball Hotties

var bkplayer = ['Kobe Bryant', 'Jonas Jerebko', 'Wesley Matthews', 'Blake Griffin', 'LeBron James', 'Tyson Chandler', 'Chandler Parsons', 'JJ Redick', 'Dwyane Wade', 'John Wall', 'Chris Paul', 'Serge Ibaka', 'D.J. Augustin', 'Cory Joseph', 'Tristan Thompson'];

var bkAge = [37, 28, 28, 26, 30, 32, 26, 31, 33, 24, 30, 25, 27, 24, 24];

var bkSalary = ['25 million', '4.5 million', '16.41 million', '17.67 million', '24 million', '13 million', '850,000', '6.75 million', '20 million', '7.46 million', '21.47 million', '2.18 million', '3 million', '7 million', '5.13 million'];

var bkJerseyNum = [24, 33, 2, 32, 23, 6, 25, 4, 3, 2, 3, 9, 14, 1, 13];

var bkCollege = ['None', 'None', 'Marquette', 'Oklahoma', 'None', 'None', 'Florida', 'Duke', 'Marquette', 'Kentucky', 'Wake Forest University', 'None', 'Univ of Texas', 'None', 'Univ of Texas'];

var bkTeam = ['LA Lakers', 'Boston Celtics', 'Dallas Mavericks', 'Los Angeles Clippers', 'Cleveland Cavaliers', 'Phoenix Suns', 'Dallas Mavericks', 'Los Angeles Clippers', 'Miami Heat', 'Washington Wizards', 'Los Angeles Clippers', 'Oklahoma City Thunder', 'Chicago Bulls', 'Toronto Raptors', 'Cleveland Cavaliers'];

var bkPosition = ['Shooting Guard', 'Power Forward', 'Shooting Guard', 'Power Forward', 'Small Foward', 'Center', 'Small Foward', 'Shooting Guard', 'Shooting guard', 'Point Guard', 'Point Guard', 'Power Forward/Center', 'Point guard', 'Point Guard', 'Center/Power Foward'];

var bkinstaName = ['@kobebryant', '@Jonasjerebko8', '@wessywes23', '@blakegriffin32', '@kingjames', '@tysonchandler', '@chandlerparsons', '@jjredick4', '@dwyanewade', '@johnwall', '@cp3', '@mr_avecclasse', '@d.j.augustin14_', '@coryjoseph', '@realtristan13'];

var bkMarital = [true, false, false, false, true, true, false, true, true, false, true, false, true, false, false];

var bkImgUrl = [];

var bkSport = "basketball"

var bkVote = 0


//Soccer Hotties
var splayer = [' Ricardo Kaka', 'Heath Pearce', 'Benny Feilhaber', 'Zachary Loyd', 'Ryan Johnson', 'Orr Barouch', 'Chris Pontius', 'Graham Zusi', 'Chris Wondolowski', 'Matt Besler', 'Matías Laba', 'Lee Nguyen', 'Fabian Espindola', 'Dom Dwyer', 'Nat Borchers'];

var sAge = [33, 31, 30, 28, 30, 23, 28, 29, 32, 28, 23, 28, 30, 25, 34];

var sSalary = ['6.66 million', ' 292,499(2012)', '400,000(2012)', '73,975(2012)', '137,813(2012)', '44,000(2012)', '155,000(2012)', '105,000(2012)', '300,000(2012)', '91,751(2012)', '325,000', '44,000(2012)', '125,000(2012)', '60,000(2012)', '200,004(2012)'];

var sJerseyNum = [10, 3, 10, 17, 9, 15, 13, 8, 8, 5, 15, 24, 9, 14, 6];

var sTeam = ['Orlando City', 'Orlando City', 'Kansas City', 'FC Dallas', 'Seoul E-Land FC', 'Maccabi Netanya', 'DC United', 'Kansas City', ' San Jose Earthquakes', 'Kansas City', 'Vancouver Whitecaps FC', 'New England Revolution', 'DC United', 'Kansas City', ' Real Salt Lake'];

var sPosition = ['Midfielder', 'Defender', 'Midfielder', 'Defender', 'Forward', 'Forward', 'Midfielder', 'Midfielder', 'Forward', 'Center Defender', 'Midfielder', 'Midfielder', 'Forward', 'Forward', 'Defender'];

var sInsta = ['@kaka', '@heathpearce', 'NA', 'NA', 'NA', 'NA', '@chrispontius13', '@gzusi', '@ChrisWondo', '@mattbesler', 'NA', '@leenguyen24' 'NA', '@ddwyer14', 'NA'];

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
  'http://a.fssta.com/content/dam/fsdigital/fscom/Soccer/images/2014/12/08/120814-SOCCER-rsl-nat-borchers-ahn-PI.vresize.1200.675.high.52.jpg'
];

var sSport = "soccer"

var sVote = 0



