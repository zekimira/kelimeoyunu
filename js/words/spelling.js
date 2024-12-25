const spellingWords = {
    kolay: [
        // Unit 1 - Günlük Kelimeler
        {
            tr: "ambulans",
            en: "ambulance",
            similar: ["ambulence", "ambulanse", "ambilance", "ambulence"]
        },
        {
            tr: "balon",
            en: "balloon",
            similar: ["baloon", "ballon", "ballun", "baloun"]
        },
        {
            tr: "bisküvi",
            en: "biscuit",
            similar: ["biscut", "biskit", "biscuite", "biskuit"]
        },
        {
            tr: "kafe",
            en: "café",
            similar: ["cafe", "caffe", "caffee", "cafee"]
        },
        {
            tr: "pasta",
            en: "cake",
            similar: ["ceke", "kake", "caik", "cace"]
        },
        {
            tr: "kamp",
            en: "camp",
            similar: ["campe", "kamp", "camb", "kamb"]
        },
        {
            tr: "doktor",
            en: "doctor",
            similar: ["docter", "doctar", "dokter", "doctour"]
        },
        {
            tr: "e-posta",
            en: "e-mail",
            similar: ["email", "e-male", "imail", "e-maill"]
        },
        {
            tr: "elektrik",
            en: "electrics",
            similar: ["electrix", "elektrics", "electriks", "elektriks"]
        },
        {
            tr: "garaj",
            en: "garage",
            similar: ["garaj", "garaje", "garadge", "garrage"]
        },
        {
            tr: "otel",
            en: "hotel",
            similar: ["hotell", "hotle", "hottel", "houtel"]
        },
        {
            tr: "internet",
            en: "Internet",
            similar: ["internet", "intrenet", "intenet", "internett"]
        },
        {
            tr: "dizüstü bilgisayar",
            en: "laptop",
            similar: ["laptob", "leptop", "laptoop", "loptop"]
        },
        {
            tr: "limon",
            en: "lemon",
            similar: ["lemun", "limon", "lemmon", "lemonn"]
        },
        {
            tr: "mikrofon",
            en: "microphone",
            similar: ["microfone", "mikrofon", "microphon", "microphonne"]
        },
        {
            tr: "not",
            en: "note",
            similar: ["notte", "nawt", "knot", "noot"]
        },
        {
            tr: "ofis",
            en: "office",
            similar: ["ofis", "offis", "oface", "offise"]
        },
        {
            tr: "piknik",
            en: "picnic",
            similar: ["picknick", "piknic", "picknick", "piknik"]
        },
        {
            tr: "sınav",
            en: "quiz",
            similar: ["quizz", "quez", "quize", "qwiz"]
        },
        {
            tr: "radyo",
            en: "radio",
            similar: ["radyo", "redio", "raydio", "radiyo"]
        },
        {
            tr: "salata",
            en: "salad",
            similar: ["sallad", "salat", "saled", "selad"]
        },
        {
            tr: "sandviç",
            en: "sandwich",
            similar: ["sandwitch", "sandwic", "sandvich", "sendwich"]
        },
        {
            tr: "spor",
            en: "sport",
            similar: ["spor", "spoort", "sportt", "sport"]
        },
        {
            tr: "dur",
            en: "stop",
            similar: ["stop", "stopp", "stob", "stopb"]
        },
        {
            tr: "süpermarket",
            en: "supermarket",
            similar: ["supermarked", "süpermarket", "supermarkett", "supermarcet"]
        },
        {
            tr: "telefon",
            en: "telephone",
            similar: ["telefon", "telephon", "tellophone", "telephonne"]
        },
        {
            tr: "televizyon",
            en: "television",
            similar: ["televisyon", "televition", "telavision", "televesion"]
        },
        {
            tr: "domates",
            en: "tomato",
            similar: ["tomatto", "tamato", "tometo", "tomatoe"]
        },
        {
            tr: "tren",
            en: "train",
            similar: ["trane", "trayn", "trian", "trainn"]
        },
        {
            tr: "kelime",
            en: "word",
            similar: ["werd", "wurd", "wordd", "worde"]
        },
        {
            tr: "üniversite",
            en: "university",
            similar: ["univercity", "universitet", "universite", "univarsity"]
        },
        {
            tr: "vanilya",
            en: "vanilla",
            similar: ["vanila", "vanilla", "venilla", "wanilla"]
        },
        {
            tr: "video",
            en: "video",
            similar: ["vidio", "vedio", "videyo", "vidyo"]
        },
        {
            tr: "yoğurt",
            en: "yoghurt",
            similar: ["yogurt", "yoghurd", "yogourt", "yoghert"]
        },

        // Unit 2 - Selamlaşma ve Tanışma
        {
            tr: "günaydın",
            en: "good morning",
            similar: ["goodmorning", "gud morning", "good mourning", "good mornin"]
        },
        {
            tr: "iyi günler",
            en: "good afternoon",
            similar: ["goodafternoon", "good afternun", "good afternnon", "gud afternoon"]
        },
        {
            tr: "iyi akşamlar",
            en: "good evening",
            similar: ["goodevening", "good evning", "good evenin", "gud evening"]
        },
        {
            tr: "iyi geceler",
            en: "good night",
            similar: ["goodnight", "good nite", "good nigt", "goodnite"]
        },
        {
            tr: "merhaba",
            en: "hello",
            similar: ["helo", "hallo", "hullo", "hellow"]
        },
        {
            tr: "selam",
            en: "hi",
            similar: ["hay", "hii", "hai", "hy"]
        },
        {
            tr: "hoşça kal",
            en: "goodbye",
            similar: ["goodby", "goodbay", "goodbai", "gudbye"]
        },
        {
            tr: "nasılsın",
            en: "how are you",
            similar: ["how r you", "how r u", "howareyou", "how r yu"]
        },
        {
            tr: "adın ne",
            en: "what's your name",
            similar: ["whats your name", "what is your name", "wots your name", "whut is your name"]
        },
        {
            tr: "tanıştığıma memnun oldum",
            en: "nice to meet you",
            similar: ["nice to meet u", "nice 2 meet you", "nice to meat you", "nice tu meet you"]
        },

        // Unit 3 - Sınıf İçi Komutlar
        {
            tr: "aç",
            en: "open",
            similar: ["opan", "oppen", "openn", "oppan"]
        },
        {
            tr: "kapat",
            en: "close",
            similar: ["clos", "cloze", "clouz", "clouse"]
        },
        {
            tr: "kes",
            en: "cut",
            similar: ["cutt", "kut", "catt", "cout"]
        },
        {
            tr: "çiz",
            en: "draw",
            similar: ["drow", "drawe", "draww", "drau"]
        },
        {
            tr: "boya",
            en: "paint",
            similar: ["paynt", "paint", "peint", "painte"]
        },
        {
            tr: "söyle",
            en: "say",
            similar: ["sey", "saye", "sae", "sai"]
        },
        {
            tr: "otur",
            en: "sit",
            similar: ["sit", "sitt", "seat", "seet"]
        },
        {
            tr: "yapıştır",
            en: "stick",
            similar: ["stik", "stic", "stikk", "stic"]
        },
        {
            tr: "ayağa kalk",
            en: "stand",
            similar: ["stend", "stond", "standd", "stande"]
        },
        {
            tr: "dön",
            en: "turn",
            similar: ["tern", "trun", "turnn", "turrn"]
        }
    ],

    orta: [
        // Unit 4 - Sayılar
        {
            tr: "bir",
            en: "one",
            similar: ["wan", "wun", "won", "ones"]
        },
        {
            tr: "iki",
            en: "two",
            similar: ["too", "to", "tuu", "twoo"]
        },
        {
            tr: "üç",
            en: "three",
            similar: ["tree", "free", "thriee", "thre"]
        },
        {
            tr: "dört",
            en: "four",
            similar: ["for", "fore", "fowor", "foar"]
        },
        {
            tr: "beş",
            en: "five",
            similar: ["fayv", "faiv", "fiev", "fayf"]
        },
        {
            tr: "altı",
            en: "six",
            similar: ["siks", "sics", "sixe", "sixx"]
        },
        {
            tr: "yedi",
            en: "seven",
            similar: ["sevan", "saven", "sevn", "sewen"]
        },
        {
            tr: "sekiz",
            en: "eight",
            similar: ["eit", "eyt", "eaght", "eight"]
        },
        {
            tr: "dokuz",
            en: "nine",
            similar: ["nain", "nyne", "nein", "nayn"]
        },
        {
            tr: "on",
            en: "ten",
            similar: ["tan", "tenn", "toen", "tena"]
        },
        {
            tr: "on bir",
            en: "eleven",
            similar: ["elevan", "elevn", "elven", "elevenn"]
        },
        {
            tr: "on iki",
            en: "twelve",
            similar: ["twelv", "twelf", "twelwe", "twelfe"]
        },
        {
            tr: "on üç",
            en: "thirteen",
            similar: ["thirten", "thirtene", "therteen", "thirtin"]
        },
        {
            tr: "on dört",
            en: "fourteen",
            similar: ["forteen", "fourten", "fortene", "fourtheen"]
        },
        {
            tr: "on beş",
            en: "fifteen",
            similar: ["fiften", "fiveteen", "fiftheen", "fiftin"]
        },
        {
            tr: "on altı",
            en: "sixteen",
            similar: ["sixten", "sixtheen", "sixtene", "siksteen"]
        },
        {
            tr: "on yedi",
            en: "seventeen",
            similar: ["seventen", "seventene", "seventhin", "seventten"]
        },
        {
            tr: "on sekiz",
            en: "eighteen",
            similar: ["eighten", "eightene", "eighttene", "eightteen"]
        },
        {
            tr: "on dokuz",
            en: "nineteen",
            similar: ["ninten", "nintene", "ninetene", "ninetheen"]
        },
        {
            tr: "yirmi",
            en: "twenty",
            similar: ["tweny", "twentty", "twentie", "twenti"]
        },

        // Unit 5 - Renkler
        {
            tr: "siyah",
            en: "black",
            similar: ["blak", "bleck", "blackk", "blac"]
        },
        {
            tr: "mavi",
            en: "blue",
            similar: ["blu", "blou", "bleue", "blew"]
        },
        {
            tr: "kahverengi",
            en: "brown",
            similar: ["broun", "braun", "browne", "browen"]
        },
        {
            tr: "yeşil",
            en: "green",
            similar: ["gren", "grean", "greenn", "griin"]
        },
        {
            tr: "turuncu",
            en: "orange",
            similar: ["orenge", "orang", "oranj", "orangge"]
        },
        {
            tr: "pembe",
            en: "pink",
            similar: ["pinc", "pynk", "pingk", "pinka"]
        },
        {
            tr: "mor",
            en: "purple",
            similar: ["purpel", "purpl", "perpel", "purpple"]
        },
        {
            tr: "kırmızı",
            en: "red",
            similar: ["rad", "redd", "rede", "rid"]
        },
        {
            tr: "beyaz",
            en: "white",
            similar: ["whit", "wight", "whyte", "wite"]
        },
        {
            tr: "sarı",
            en: "yellow",
            similar: ["yelow", "yello", "yellou", "yelo"]
        },

        // Unit 6 - Oyun Alanı
        {
            tr: "top",
            en: "ball",
            similar: ["bal", "boll", "baal", "baul"]
        },
        {
            tr: "bisiklet",
            en: "bike",
            similar: ["bik", "bicke", "bieke", "byke"]
        },
        {
            tr: "tırman",
            en: "climb",
            similar: ["clime", "klimb", "clymb", "climbe"]
        },
        {
            tr: "dans et",
            en: "dance",
            similar: ["dans", "danse", "dence", "dannce"]
        },
        {
            tr: "uç",
            en: "fly",
            similar: ["flie", "flye", "flay", "fligh"]
        },
        {
            tr: "saklan",
            en: "hide",
            similar: ["hyde", "hied", "hidd", "hidde"]
        },
        {
            tr: "sek sek",
            en: "hop",
            similar: ["hopp", "hoop", "hope", "hopp"]
        },
        {
            tr: "zıpla",
            en: "jump",
            similar: ["jamp", "jomp", "jumpp", "jumb"]
        },
        {
            tr: "tekme at",
            en: "kick",
            similar: ["kik", "kic", "kickk", "kiq"]
        },
        {
            tr: "oyna",
            en: "play",
            similar: ["plai", "pley", "plaey", "pley"]
        },
        {
            tr: "sür",
            en: "ride",
            similar: ["rid", "ryde", "riyd", "raide"]
        },
        {
            tr: "koş",
            en: "run",
            similar: ["runn", "ran", "rune", "rann"]
        },
        {
            tr: "atla",
            en: "skip",
            similar: ["skipp", "scip", "skipe", "skipee"]
        },
        {
            tr: "kay",
            en: "slide",
            similar: ["slyd", "slaide", "slied", "sliyd"]
        },
        {
            tr: "sallan",
            en: "swing",
            similar: ["sving", "sweng", "swhing", "swyng"]
        },
 
        // Unit 7 - Vücut Bölümleri
        {
            tr: "kol",
            en: "arm",
            similar: ["arm", "arme", "armm", "orm"]
        },
        {
            tr: "kulak",
            en: "ear",
            similar: ["eer", "ere", "eear", "eir"]
        },
        {
            tr: "göz",
            en: "eye",
            similar: ["ey", "eey", "eaye", "i"]
        },
        {
            tr: "yüz",
            en: "face",
            similar: ["fase", "fays", "fece", "fayss"]
        },
        {
            tr: "parmak",
            en: "finger",
            similar: ["fingr", "fingar", "fingger", "fingur"]
        },
        {
            tr: "ayak",
            en: "foot",
            similar: ["fut", "foote", "fot", "foott"]
        },
        {
            tr: "saç",
            en: "hair",
            similar: ["hare", "haire", "har", "heir"]
        },
        {
            tr: "el",
            en: "hand",
            similar: ["hend", "hade", "handd", "hande"]
        },
        {
            tr: "baş",
            en: "head",
            similar: ["hed", "hedd", "heid", "heade"]
        },
        {
            tr: "diz",
            en: "knee",
            similar: ["nee", "knee", "knea", "knie"]
        },
        {
            tr: "bacak",
            en: "leg",
            similar: ["leg", "legg", "lege", "lagg"]
        },
        {
            tr: "ağız",
            en: "mouth",
            similar: ["mauth", "mowth", "mounth", "mooth"]
        },
        {
            tr: "burun",
            en: "nose",
            similar: ["nouse", "noze", "nowse", "nouze"]
        },
        {
            tr: "omuz",
            en: "shoulder",
            similar: ["sholder", "showlder", "shouldar", "shulder"]
        },
        {
            tr: "ayak parmağı",
            en: "toe",
            similar: ["tou", "tow", "toue", "towe"]
        }
    ],
 
    zor: [
        // Unit 8 - Evcil Hayvanlar
        {
            tr: "kuş",
            en: "bird",
            similar: ["burd", "berd", "birdd", "brid"]
        },
        {
            tr: "kedi",
            en: "cat",
            similar: ["kat", "catt", "cet", "katt"]
        },
        {
            tr: "köpek",
            en: "dog",
            similar: ["dogg", "dawg", "doog", "dok"]
        },
        {
            tr: "balık",
            en: "fish",
            similar: ["fich", "phish", "fishe", "fesh"]
        },
        {
            tr: "hamster",
            en: "hamster",
            similar: ["hampster", "hamstar", "hamester", "hammster"]
        },
        {
            tr: "fare",
            en: "mouse",
            similar: ["mause", "mowse", "mouze", "mowz"]
        },
        {
            tr: "papağan",
            en: "parrot",
            similar: ["parot", "perrot", "parret", "parrott"]
        },
        {
            tr: "tavşan",
            en: "rabbit",
            similar: ["rabit", "rabitt", "rabbitt", "rabbet"]
        },
        {
            tr: "yılan",
            en: "snake",
            similar: ["snak", "snaik", "sneyk", "sneik"]
        },
        {
            tr: "kaplumbağa",
            en: "turtle",
            similar: ["turtel", "tourtle", "tertl", "turdle"]
        },
 
        // Unit 9 - Meyveler
        {
            tr: "elma",
            en: "apple",
            similar: ["appel", "apel", "appil", "aple"]
        },
        {
            tr: "muz",
            en: "banana",
            similar: ["bananna", "bannana", "banana", "banan"]
        },
        {
            tr: "üzüm",
            en: "grape",
            similar: ["grap", "greip", "graip", "greyp"]
        },
        {
            tr: "kivi",
            en: "kiwi",
            similar: ["kivi", "kiwy", "kiwee", "kiwwi"]
        },
        {
            tr: "limon",
            en: "lemon",
            similar: ["lemun", "limon", "lemmon", "lemonn"]
        },
        {
            tr: "portakal",
            en: "orange",
            similar: ["orenge", "orang", "oranj", "orangge"]
        },
        {
            tr: "şeftali",
            en: "peach",
            similar: ["pech", "peatch", "peech", "peatch"]
        },
        {
            tr: "armut",
            en: "pear",
            similar: ["pare", "pair", "pere", "peare"]
        },
        {
            tr: "ananas",
            en: "pineapple",
            similar: ["pinapple", "pineaple", "pinnaple", "pineappel"]
        },
        {
            tr: "erik",
            en: "plum",
            similar: ["plam", "plumm", "plume", "plumb"]
        },
        {
            tr: "çilek",
            en: "strawberry",
            similar: ["strawbery", "strawberrie", "strawberri", "stawberry"]
        },
        {
            tr: "karpuz",
            en: "watermelon",
            similar: ["watermellon", "wattermelon", "wotermelon", "watermelen"]
        },
 
        // Unit 10 - Vahşi Hayvanlar
        {
            tr: "ayı",
            en: "bear",
            similar: ["bare", "beare", "ber", "baer"]
        },
        {
            tr: "fil",
            en: "elephant",
            similar: ["elefant", "elephent", "eliphant", "elephante"]
        },
        {
            tr: "zürafa",
            en: "giraffe",
            similar: ["giraff", "girrafe", "girafe", "jiraf"]
        },
        {
            tr: "goril",
            en: "gorilla",
            similar: ["gorila", "guerilla", "gorila", "gorrilla"]
        },
        {
            tr: "kanguru",
            en: "kangaroo",
            similar: ["kangarou", "kangaru", "kengaroo", "cangaroo"]
        },
        {
            tr: "aslan",
            en: "lion",
            similar: ["loin", "liyon", "lyen", "lyon"]
        },
        {
            tr: "maymun",
            en: "monkey",
            similar: ["munkey", "monky", "monkee", "mankey"]
        },
        {
            tr: "panda",
            en: "panda",
            similar: ["pande", "pandy", "pandaa", "pander"]
        },
        {
            tr: "kaplan",
            en: "tiger",
            similar: ["tigr", "tyger", "tigger", "tiger"]
        },
        {
            tr: "zebra",
            en: "zebra",
            similar: ["zebrah", "zeebra", "zebrah", "zebraa"]
        }
    ]
 };