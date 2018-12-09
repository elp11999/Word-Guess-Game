//
// HangMan JavaSript
//
$(document).ready(function() {

    // NFL Theme
    var NFLTheme = {
        title : "National Football League",
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
        title : "National Baskeball Association",
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
        title : "Major League Baseball",
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
        title : "National Hockey League",
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
                 "washington dc",
                 "sonny jurgensen",
                 "dexter manley",
                 "boston braves",
                 "anthony allen",
                 "vince lombardi",
                 "lavar arrington",
                 "heath shuler",
                 "albert haynesworth",
                 "sammy baugh",
                 "burgundy and gold",
                 "art monk",
                 "billy kilmer",
                 "john riggins",
                 "darrell green",
                 "joe gibbs",
                 "george allen",
                 "doug wlliams",
                 "wilber marshal",
                 "joe theismann",
                 "hail to the redskins",
                 "jay schroeder",
                 "daniel snyder",
                 "jay gruden",
                 "sam huff",
                 "doc walker",
                 "dave butz",
                 "mark moseley",
                 "mark rypien",
                 "richie petitbon"]
    };

    // Packers Theme
    var PackersTheme = {
        title : "Green Bay Packers",
        image : "assets/images/packers.jpg",
        words : ["packers",
                 "green bay",
                 "lambeau field",
                 "vince lombardi",
                 "bart starr",
                 "jerry kramer",
                 "paul horning",
                 "donny anderson",
                 "ray nitsche",
                 "jim taylor",
                 "boyd dowler",
                 "carrol dale",
                 "brett favre",
                 "aaron rodgers ",
                 "mike mccarthy",
                 "cheesehead",
                 "reggie white",
                 "don hutson",
                 "hagemeister park",
                 "mike sherman",
                 "don majowski",
                 "edgar bennett",
                 "mason crosby",
                 "clay matthews",
                 "henry jordan",
                 "dave anderson",
                 "willie wood",
                 "travis williams",
                 "curly lambeau",
                 "forrest gregg",
                 "go pack go"]
    };

    // Stars Theme
    var StarsTheme = {
        title : "Dallas Stars",
        image : "assets/images/stars.jpg",
        words : ["stars",
                 "dallas",
                 "american airlines center",
                 "mike modano",
                 "mark tinordi",
                 "reunion arena",
                 "brenden morrow",
                 "ed belfour",
                 "andy moog",
                 "marty turco",
                 "brett hull",
                 "manny fernandez",
                 "darcy wakaluk",
                 "neal broten",
                 "ken hitchcock",
                 "daryl sydor",
                 "shane churla",
                 "jere lehtinen",
                 "derian hatcher",
                 "jamie langenbrunner",
                 "grant marshall",
                 "rock you like a hurricane",
                 "jim montgomery",
                 "jamie benn",
                 "tyler seguin",
                 "ben bishop",
                 "bob gainey",
                 "joe nieuwendyk",
                 "norman green",
                 "craig ludwick",
                 "ralph strangis"]
    };

    // Yoga Theme
    var YogaTheme = {
        title : "Yoga",
        image : "assets/images/yoga.jpg",
        words : ["sanskrit",
                 "tirumalai krishnamacharya",
                 "warrior",
                 "downward facing dog",
                 "dolphin",
                 "pranayama",
                 "ashtanga",
                 "bks iyengar",
                 "ahimsa",
                 "iyengar",
                 "bikram",
                 "meditation",
                 "upward facing dog",
                 "yoga",
                 "krishnamacharya",
                 "union",
                 "patanjali",
                 "chaturanga ",
                 "plank",
                 "lotis",
                 "shavasana",
                 "cobra ",
                 "halasana)",
                 "plough",
                 "sirshasana",
                 "asana",
                 "crow",
                 "mountain",
                 "triangle",
                 "half moon",
                 "hatha"]
    };

    //
    // HangMan object
    //
    var hangMan = {

        // initialized
        initialized: false,

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
        themes : [NFLTheme, NBATheme, MLBTheme, NHLTheme, RedskinsTheme, PackersTheme, StarsTheme, YogaTheme],

        // Initialization function
        initializeGame: function() {
            this.currentTheme = RedskinsTheme;  // Just for you Malcom... lol
            this.currentWord = this.currentTheme.words[Math.floor(Math.random() * this.currentTheme.words.length)];
            console.log("init: started for word " + this.currentWord + " in theme " + this.currentTheme.title);
            this.initialized = true;
        },

        // Pick New theme function
        pickNewTheme: function() {
            this.currentTheme = this.themes[Math.floor(Math.random() * this.themes.length)];
            this.currentWord = this.currentTheme.words[Math.floor(Math.random() * this.currentTheme.words.length)];
            console.log("init: started for word " + this.currentWord + " in theme " + this.currentTheme.title);
            this.initialized = true;
        },

         // Play game function
        playGame: function() {
            console.log("key up for " + event.key);
        }
    };

    console.log("Word-Guess-Game started...");

    // console.log("Wns=" + hangMan.wins);
    // console.log("Losses=" + hangMan.losses);
    // console.log("LettersGuessed=" + hangMan.lettersGuessed);
    // console.log("GuessesRemaining=" + hangMan.losses);
    // console.log("Themes=" + hangMan.themes);
    // console.log("currentTheme=" + hangMan.currentTheme);
    // console.log("currentWord=" + hangMan.currentWord);

    $("body").keyup(function(event) {
        if (hangMan.initialized === false)
            hangMan.initializeGame();
        else
            hangMan.playGame(event.key);
    });

});


