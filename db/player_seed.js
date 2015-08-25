var db = require('../db.js');


//Baseball Hotties
var bsplayer = ['Brennan Boesch','Curtis Granderson', 'Cole Hamels', 'Matt Kemp', 'Chase Utley', 'Daniel Norris', 'Christian Yelich', 'George Springer', 'Kris Bryant', 'Brett Lawrie', 'Bryce Harper', 'Mike Trout', 'Brandon Crawford', 'Anthony Recker', 'Tyler Moore'];

var bsAge = [30, 34, 31, 30, 36, 22, 23, 25, 23, 25, 22, 24, 28, 31, 28];

var bsSalary = ['1.25 million','15 million', '8.361 million', '21 million', '2.13 million', '180,685', '570,000', ' 512,900', '471,448', '516,100', '2.5 million', '5.25 million', '481,000 (2012)', '416,001', '518,200'];

var bsJerseyNum = [27, 3, 35, 27, 26, 44, 21, 4, 17, 13, 34, 27, 35, 20, 12];

var bsCollege = ['NA','Univ of Illinois', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'East Carolina University', 'NA', 'Alvernia University', 'Mississippi State University'];

var bsTeam = ['Cincinnati Reds','New York Mets', 'Texas Rangers', ' San Diego Padres', 'Los Angeles Dodgers', 'Detroit Tigers', 'Miami Marlins', ' Houston Astros', 'Chicago Cubs', 'Oakland Athletics', 'Washington Nationals', ' Los Angeles Angels of Anaheim', ' San Francisco Giants', 'New York Mets', 'Washington Nationals'];

var bsPosition = ['Outfielder','Outfielder', 'Pitcher', 'Outfielder', 'Infielder', 'Starting Pitcher', 'Outfielder', 'Outfielder', 'Infielder', 'Infielder', 'Outfielder', 'Outfielder', 'Infielder', 'Catcher', 'Infielder'];

var bsInsta = ['NA','@cgrand3', 'NA', '@therealmattkemp', '@therealchaseutley', '@danielnorris18', '@christianyelich', 'NA', '@kris_bryant17', '@blawrie1313', '@bharper3407', '@miketrout', 'NA', 'NA', 'NA'];

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




//Hockey Hotties
var hplayer = ['Alexander Wennberg', 'David Rundblad', 'Brendan Smith','Henrik Lundqvist','Jonathan Toews', 'Ryan Kesler', 'Sydney Crosby', 'Erik Karlsson', 'Tyler Seguin', 'Jared Boll', 'Chris Higgins', 'Derick Brassard', 'Carey Price', 'Niklas Hjalmarsson', 'Erik Gudbranson'];

var hAge = [ 20, 24, 26,33, 27, 30, 28, 25, 23, 29, 32, 27, 28, 28, 23];

var hSalary = ['925,000', '900,000(2013)' '2.25 million', '11 million', '6.5 million','7.875 million(2017)', '12 million', '875,000(2012)', '5.5 million', '1.7 million', '2.5 million', '7 million', ' 6.75 million', ' 3.5 million(2013)', '2.25 million'];

var hJerseyNum = [41, 5, 2, 30, 19, 17, 87, 65, 91, 40, 20, 16, 31, 4, 44];

var hCollege = ['NA', 'NA', 'NA', 'NA', 'Univ North Dakota','Ohio State', 'NA', 'NA', 'NA', 'NA', 'Yale University', 'NA', 'NA', 'NA', 'NA'];

var hTeam = ['Columbus Blue Jackets', 'Chicago Blackhawks', 'Detroit Red Wings','New York Rangers' ,'Chicago Blackhawks','Anaheim Ducks', 'Pittsburgh Penguins', ' Ottawa Senators', 'Dallas Stars', ' Columbus Blue Jackets', 'Vancouver Canucks', 'New York Rangers', 'Montreal Canadiens', 'Chicago Blackhawks', ' Florida Panthers'];

var hPosition = ['Centerman', 'Defenseman', 'Defenseman','Goalie', 'Centerman','Centerman/Forward', 'Centerman', 'Defenseman', 'Centerman', 'Right Wing', 'Left Wing', 'Centerman', 'Goalie', 'Defenseman', 'Defenseman'];

var hInsta = ['@alexanderwennberg', '@davidrundblad', '@bssmith2','hank30nyr' ,'@19jtoew','NA', 'NA', '@erikkarlsson65', '@tseguin92', 'NA', 'NA', '@brassardderick', '@careyprice_31_', 'NA', '@guddy44'];

var hMarital = [false, false, false, true ,false, true, false, true, false, false, false, false, true, true, false];

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



//Football Hotties
var fplayer = ['Eric Decker', 'Tom Brady', 'Danny Amendola', 'Reggie Bush', 'Arian Foster', 'Brady Quinn', 'Miles Austin', 'Jordan Cameron', 'Cam Newton', 'Brylon Edwards', 'Mark Sanchez', 'Trent Edwards', 'Wes Welker', 'Sam Bradford', 'Joe Flacco'];

var fAge = [28, 38, 29, 30, 29, 30, 31, 27, 26, 32, 28, 31, 34, 27, 30];

var fSalary = ['36,250,000(5 year contract)', '$27,000,000(3 year contract', '$3.116 million', '$2,500,000(1 year contract', '$43,500,000(5 year contract', 'NA', '2,3 million(1 year contract)', '15 million(2 year contract)', '22,500,000', '$1,000,000(2011)', '$9,000,000(2 year contract)', '$730,000(1 contract past)', '$2 million(2013)', '13,007,500', '120.6 million'];

var fJerseyNum = [87, 12, 80, 23, 23, -0, 19, 84, 1, -0, 3, -0, -0, 7, 5];

var fCollege = ['Minnesota', 'University of Michigan', 'Texas Tech', 'USC', 'Tennesse', 'Notre Dame', 'Monmouth', 'USC', 'Auburn', 'Michigan', 'USC', 'Stanford', 'Texas Tech', 'Oklahoma', 'Univ of Delaware' ];

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
  'http://a.fssta.com/content/dam/fsdigital/fscom/Soccer/images/2014/12/08/120814-SOCCER-rsl-nat-borchers-ahn-PI.vresize.1200.675.high.52.jpg',
];

var sSport = "soccer"

var sVote = 0



