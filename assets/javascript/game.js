//
// HangMan JavaSript
//

// NFL Theme
var NFLTheme = {
    title : "NFL",
    image : "assets/images/nfl.jpg",
    words : ["football",
             "cleats",
             "packers",
             "redskins",
             "center",
             "guard",
             "tackle",
             "quarterback",
             "tightend",
             "fullback",
             "linebacker",
             "cornerback",
             "widereceiver",
             "end zone",
             "half time",
             "penalty",
             "encroachment",
             "offsides",
             "holding",
             "penalty",
             "clipping",
             "interference",
             "back judge",
             "line judge",
             "officials",
             "safety",
             "extra point",
             "field goal",
             "goalpost",
             "hashmarks",
             "touchdown"]
};

// NBA Theme
var NBATheme = {
    title : "NBA",
    image : "assets/images/nba.jpg",
    words : ["backboard",
             "basket",
             "basketball",
             "hoop",
             "dribble",
             "dunk",
             "foul",
             "free throw",
             "guard",
             "center",
             "forward",
             "naismith",
             "jump shot",
             "personal foul",
             "rebound",
             "spurs",
             "mavericks",
             "lakers",
             "warriors",
             "dribbling",
             "julius erving",
             "oscar robertson",
             "magic johnson",
             "dirk nowitzki",
             "stephen curry",
             "russell westbrook",
             "michael jordan",
             "wilt chamberlain",
             "lebron james",
             "kevin durant",
             "personal foul"]
};

// MLB Theme
var MLBTheme = {
    title : "MLB",
    image : "assets/images/nba.jpg",
    words : ["baseball",
             "first base",
             "second base",
             "third base",
             "home plate",
             "home run",
             "foul ball",
             "glove",
             "pitcher",
             "catcher",
             "outfielder",
             "infielder",
             "balk",
             "bat",
             "strikeout",
             "flyout",
             "ballpark",
             "play ball",
             "inning",
             "curve ball",
             "change up",
             "forkball",
             "spitball",
             "shorstop",
             "manager",
             "umpire",
             "tommy john surgery",
             "strike zone",
             "seventh inning stretch",
             "pitchers mound",
             "baserunner"]
};

// NHL Theme
var NHLTheme = {
    title : "NHL",
    image : "assets/images/nhl.jpg",
    words : ["hockey",
             "glove safe",
             "stick",
             "puck",
             "goal tender",
             "sin bin",
             "slap shot",
             "skates",
             "power play",
             "penalty shot",
             "interference",
             "fighting",
             "power play",
             "short handed goal",
             "assist",
             "stanley cup",
             "penalty box",
             "center ice",
             "slashing",
             "faceoff circle",
             "blue line",
             "empty net goal ",
             "double minor",
             "cross checking",
             "rink",
             "hat trick",
             "breakaway",
             "forechecking",
             "penalty kill",
             "shootout",
             "hand pass"]
};

// Redskins Theme
var RedskinsTheme = {
    title : "Washington Redskins",
    image : "assets/images/redskins.jpg",
    words : ["redskins",
             "glove safe",
             "stick",
             "puck",
             "goal tender",
             "sin bin",
             "slap shot",
             "skates",
             "power play",
             "penalty shot",
             "interference",
             "fighting",
             "power play",
             "short handed goal",
             "assist",
             "stanley cup",
             "penalty box",
             "center ice",
             "slashing",
             "faceoff circle",
             "blue line",
             "empty net goal ",
             "double minor",
             "cross checking",
             "rink",
             "hat trick",
             "breakaway",
             "forechecking",
             "penalty kill",
             "shootout",
             "hand pass"]
};

// Packers Theme
var PackersTheme = {
    title : "Green Bay Packers",
    image : "assets/images/packers.jpg",
    words : []
};

// Stars Theme
var StarsTheme = {
    title : "Dallas Stars",
    image : "assets/images/stars.jpg",
    words : []
};

// Rangers Theme
var RangersTheme = {
    title : "Texas Rangers",
    image : "assets/images/rangers.jpg",
    words : []
};

//
// HangMan object
//
var hangMan = {

    // Number of wins
    wins : 0,

    // Number of losses
    losses : 0,

    // Guesses remaining
    guessesRemaining : 0,

    // Letters guessed
    lettersGuessed: [],
    
    // Current theme
    currentTheme : [],

    // Current word
    currentWord : [],
    
    // Themes
    themes : [NFLTheme, NBATheme, MLBTheme, NHLTheme, RedskinsTheme, PackersTheme, StarsTheme, RangersTheme],

    // Initialization function
    init: function() {
        console.log("init: started.");
    }
};

console.log("Word-Guess-Game started...");

console.log("Wns=" + hangMan.wins);
console.log("Losses=" + hangMan.losses);
console.log("LettersGuessed=" + hangMan.lettersGuessed);
console.log("GuessesRemaining=" + hangMan.losses);
console.log("Themes=" + hangMan.themes);
console.log("currentTheme=" + hangMan.currentTheme);
console.log("currentWord=" + hangMan.currentWord);

hangMan.init();

