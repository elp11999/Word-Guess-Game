//
// HangMan JavaSript
//
$(document).ready(function() {

    // NFL Theme
    var NFLTheme = {
        title : "Football",
        image : "assets/images/hangman-football.jpg",
        winAudio : "assets/audio/winner.wav",
        loseAudio : "assets/audio/loser.wav",
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
                 "wide receiver",
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
        title : "Basketball",
        image : "assets/images/hangman-basketball.jpg",
        winAudio : "assets/audio/winner.wav",
        loseAudio : "assets/audio/loser.wav",
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
        title : "Baseball",
        image : "assets/images/hangman-baseball.jpg",
        winAudio : "assets/audio/winner.wav",
        loseAudio : "assets/audio/loser.wav",
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
        title : "Hockey",
        image : "assets/images/hangman-hockey.jpg",
        winAudio : "assets/audio/winner.wav",
        loseAudio : "assets/audio/loser.wav",
        words : ["hockey",
                 "glove save",
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
        image : "assets/images/hangman-redskin.jpg",
        winAudio : "assets/audio/winner.wav",
        loseAudio : "assets/audio/loser.wav",
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
                 "doug williams",
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
        image : "assets/images/hangman-packers.jpg",
        winAudio : "assets/audio/winner.wav",
        loseAudio : "assets/audio/loser.wav",
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
        image : "assets/images/hangman-stars.jpg",
        winAudio : "assets/audio/winner.wav",
        loseAudio : "assets/audio/loser.wav",
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
        image : "assets/images/hangman-yoga.jpg",
        winAudio : "assets/audio/winner.wav",
        loseAudio : "assets/audio/loser.wav",
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

        // Game initialized
        initialized: false,

        // Game started
        started: false,

        // Number of wins
        wins : 0,

        // Number of losses
        losses : 0,

        // Correct guesses
        correctGuesses : 0,

        // Guesses remaining
        guessesRemaining : 0,

        // Letters guessed
        lettersGuessed: [],
        
        // Current theme
        currentTheme : [],

        // Current word
        currentWord : [],

        // Current work letter count
        currentWordLetterCount : 0,

        // Displayed word
        displayedWord : [],
        
        // Themes
        themes : [NFLTheme, NBATheme, MLBTheme, NHLTheme, RedskinsTheme, PackersTheme, StarsTheme, YogaTheme],

        // Initialization function
        initializeGame: function() {
            this.pickNewTheme();
            this.initialized = true;
        },

        // Pick New theme function
        pickNewTheme: function() {

            // Set game started
            this.started = true;

            // Set current theme
            if (this.initialized === true)
                this.currentTheme = this.themes[Math.floor(Math.random() * this.themes.length)];
            else
                this.currentTheme = RedskinsTheme;  // Just for you Malcom!!!

            // Get a word from the current theme
            this.currentWord = this.currentTheme.words[Math.floor(Math.random() * this.currentTheme.words.length)];
                        
            // Initalize properties
            this.correctGuesses = 0;
            this.currentWordLetterCount = 0;
            this.guessesRemaining = 8;
            this.lettersGuessed = [];
            this.displayedWord = [];

            // Create array to hold the users attempt solve the game
            for (let i = 0; i < this.currentWord.length; i++) {
                this.displayedWord.push("_");
                if (this.currentWord.charAt(i) !== " ")
                    this.currentWordLetterCount++;
            }

            // Update html
            $('.hangmanimage').attr('src', this.currentTheme.image); 
            $('.gallowimage').hide();            
            $('.info').text("Current theme: " + this.currentTheme.title);
            $('#displayedword').show(); 
            $('.start').text("Replay");           
            this.updateHtml(); 

            console.log("init: started for word " + this.currentWord + " in theme " + this.currentTheme.title);
        },

         // Play game function
        playGame: function(key) {

            //console.log("user entered " + key);

            // Check for alpha values only
            if (!key.match(/^[a-z]+$/))
                return;

            // Check for duplicate key
            if (this.lettersGuessed.indexOf(key) >= 0)
                return;

            // Add key to letters guessed
            this.lettersGuessed.push(key);

            // Check if key is contained in the current word
            if (this.checkGuess(key) === false) {
                var image = "assets/images/gallow" + this.guessesRemaining + ".jpg";
                $('.gallowimage').attr('src', image);
                $('.gallowimage').show();
                this.guessesRemaining--;
            }

            // Check if player won or lost the game
            if (this.currentWordLetterCount === this.correctGuesses) {
                this.winner();
            } else if (this.guessesRemaining === 0) {
                this.loser();
            }

            // Update html
            this.updateHtml();
        },

        // Check Guess function
        checkGuess: function(key) {
            let goodGuess = false;

            for (let i = 0; i < this.currentWord.length; i++) {
                if (this.currentWord.charAt(i) === key) {
                    this.displayedWord[i] = key;
                    this.correctGuesses++;
                    goodGuess = true;
                }
            }
            return goodGuess;
        },

        // Update html
        updateHtml: function() {
            $('#wins').text(this.wins);
            $('#losses').text(this.losses);
            $('#displayedword').text(this.displayedWord.join(" "));
            $('#guessesleft').text(this.guessesRemaining);
            $('#lettersguessed').text(this.lettersGuessed.toString());        
        },
    
        // Winner function
        winner: function() {
            this.wins++;

            // Show winner image
            $('.gallowimage').attr('src', "assets/images/winner.jpg");
            $('.gallowimage').show();

            // Play winner audio
            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", this.currentTheme.winAudio);
            audioElement.play();

            // Set game over
            this.started = false;
        },
    
        // Loser function
        loser: function() {
            this.losses++;

            // Show player the word
            for (let i = 0; i < this.currentWord.length; i++) {                
                if (this.currentWord.charAt(i) !== " ")
                    this.displayedWord[i] = this.currentWord.charAt(i);
                else
                    this.displayedWord[i] = "_";
            }

            // Play loser audio
            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", this.currentTheme.loseAudio);
            audioElement.play();

            // Set game over
            this.started = false;
        }
    };

    // Set call back for document keyup
    $(document).keyup(function(event) {
        if (hangMan.started === true)
            hangMan.playGame(event.key);
    });

    $('.start').click(function() {
        hangMan.initializeGame();
    });

});

