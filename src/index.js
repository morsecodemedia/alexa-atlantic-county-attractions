
// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function

var languageStrings = {
  'en'  : {
    'translation' : {
      'WELCOME' : "Welcome to Atlantic County Attractions!",
      'HELP'    : "Say about, to hear more about Atlantic County, or say coffee, breakfast, lunch, or dinner, to hear local restaurant suggestions, or say recommend an attraction, or say, go outside. ",
      'ABOUT'   : "All of what is known today as Atlantic County was once called Egg Harbor Township, the eastern half of the original County of Gloucester. Named as an official district as early as 1693, it was bounded on the north by the Little Egg Harbor River (now known as the Mullica River), and on the south by the Great Egg Harbor River and its southern branch the Tuckahoe River. Its eastern boundary was the Atlantic Ocean, but the western boundary in the South Jersey interior was not fixed until 1761. The county was formally created from portions of Gloucester County as of February 7, 1837, and consisted of the townships of Egg Harbor, Galloway, Hamilton and Weymouth.",
      'STOP'    : "Okay, see you next time!"
    }
  }
};
var data = {
  //TODO: remove the hardcoded location data of the Alexa and move it to a DB. Allow the user to set their location. This will also allow us to calculate more accurate distances.
  "city"        : "Mays Landing",
  "state"       : "NJ",
  "postcode"    : "08330",

  "restaurants" : [
    {
      "name":        "Golden Pyramid Restaurant",
      "categories":  [
        "Mediterranean",
        "Italian",
        "Middle Eastern",
        "Lunch",
        "Dinner"
      ],
      "rating":      "5",
      "price":       "$$",
      "location":    {
        "address1":  "6032 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Hamilton Township",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.4778499",
        "longitude": "-74.71608"
      },
      "phone":       "+16098292129",
      "description": ""
    },
    {
      "name":        "Paragon Bar & Grille",
      "categories":  [
        "American (Traditional)",
        "Sports Bars",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4.5",
      "price":       "$$",
      "location":    {
        "address1":  "5698 Somers Point Mays Landing Rd",
        "address2":  "",
        "address3":  "",
        "city":      "Hamilton Township",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.4497184",
        "longitude": "-74.7196848"
      },
      "phone":       "+16096251926",
      "description": ""
    },
    {
      "name":        "The Pickwickian Tavern & Smokery",
      "categories":  [
        "Pubs",
        "American (Traditional)",
        "Venues & Event Spaces",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4.5",
      "price":       "",
      "location":    {
        "address1":  "1252 Harding Hwy",
        "address2":  "Cedar Avenue & Rt. 40",
        "address3":  "",
        "city":      "Buena Vista Township",
        "zip_code":  "08350",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.492978160481",
        "longitude": "-74.873985655969"
      },
      "phone":       "+18562123205",
      "description": ""
    },
    {
      "name":        "Crabby's",
      "categories":  [
        "Seafood",
        "Soup",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4",
      "price":       "$$",
      "location":    {
        "address1":  "1413 Blvd Rte 50",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.434245",
        "longitude": "-74.735893"
      },
      "phone":       "+16096252722",
      "description": ""
    },
    {
      "name":        "Leatherhead Pub",
      "categories":  [
        "Bars",
        "American (Traditional)",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4",
      "price":       "$$",
      "location":    {
        "address1":  "105 Philadelphia Ave",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor City",
        "zip_code":  "08215",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.529038297523",
        "longitude": "-74.647476486862"
      },
      "phone":       "+16099652337",
      "description": ""
    },
    {
      "name":        "Kristy Crab",
      "categories":  [
        "Seafood",
        "Lunch",
        "Dinner"
      ],
      "rating":      "5",
      "price":       "",
      "location":    {
        "address1":  "6109 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.481269836426",
        "longitude": "-74.71949005127"
      },
      "phone":       "+16099099933",
      "description": ""
    },
    {
      "name":        "Assaggio!",
      "categories":  [
        "Italian",
        "Seafood",
        "Steakhouses",
        "Dinner"
      ],
      "rating":      "4.5",
      "price":       "$$",
      "location":    {
        "address1":  "500 W White Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor City",
        "zip_code":  "08215",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.489257804269",
        "longitude": "-74.591734677246"
      },
      "phone":       "+16099653303",
      "description": ""
    },
    {
      "name":        "Ye Olde Mill Street Pub",
      "categories":  [
        "American (Traditional)",
        "Pubs",
        "Lunch",
        "Dinner"
      ],
      "rating":      "3.5",
      "price":       "$$",
      "location":    {
        "address1":  "6033 Main St",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.45350194731",
        "longitude": "-74.730253649885"
      },
      "phone":       "+16096252466",
      "description": ""
    },
    {
      "name":        "Italiano's Maplewood II",
      "categories":  [
        "Italian",
        "Dinner"
      ],
      "rating":      "4",
      "price":       "$$",
      "location":    {
        "address1":  "6126 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.482326648775",
        "longitude": "-74.722987170707"
      },
      "phone":       "+16096251181",
      "description": ""
    },
    {
      "name":        "Steve's Grilled Cheese and Quesadilla Company",
      "categories":  [
        "American (Traditional)",
        "Lunch",
        "Dinner"
      ],
      "rating":      "5",
      "price":       "",
      "location":    {
        "address1":  "4403 E Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.453851",
        "longitude": "-74.643862"
      },
      "phone":       "+16092411037",
      "description": ""
    },
    {
      "name":        "Tacos El Tio",
      "categories":  [
        "Mexican",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4",
      "price":       "$$",
      "location":    {
        "address1":  "6400 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor Township",
        "zip_code":  "08234",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.424928",
        "longitude": "-74.592649"
      },
      "phone":       "+16095686386",
      "description": ""
    },
    {
      "name":        "Flat Stone Tavern & Grill",
      "categories":  [
        "American (New)",
        "Pizza",
        "Beer Bar",
        "Lunch",
        "Dinner"
      ],
      "rating":      "3.5",
      "price":       "$$",
      "location":    {
        "address1":  "6105 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor Township",
        "zip_code":  "08234",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.432181",
        "longitude": "-74.607645"
      },
      "phone":       "+16092728808",
      "description": ""
    },
    {
      "name":        "Sugar Hill Sub & Deli",
      "categories":  [
        "Sandwiches",
        "Delis",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4",
      "price":       "$",
      "location":    {
        "address1":  "5445 Somers Point Rd",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.447",
        "longitude": "-74.7187299"
      },
      "phone":       "+16096250538",
      "description": ""
    },
    {
      "name":        "Steve & Cookie's By the Bay",
      "categories":  [
        "American (New)",
        "Bars",
        "Desserts",
        "Dinner"
      ],
      "rating":      "4.5",
      "price":       "$$$",
      "location":    {
        "address1":  "9700 Amherst Ave",
        "address2":  "",
        "address3":  "",
        "city":      "Margate City",
        "zip_code":  "08402",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.32331",
        "longitude": "-74.52048"
      },
      "phone":       "+16098231163",
      "description": ""
    },
    {
      "name":        "LB One Steakhouse",
      "categories":  [
        "Steakhouses",
        "Dinner"
      ],
      "rating":      "4.5",
      "price":       "$$",
      "location":    {
        "address1":  "6605 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor Township",
        "zip_code":  "08234",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.417952",
        "longitude": "-74.582216"
      },
      "phone":       "+16096457655",
      "description": ""
    },
    {
      "name":        "Pho Life",
      "categories":  [
        "Vietnamese",
        "Vegan",
        "Vegetarian",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4",
      "price":       "$$",
      "location":    {
        "address1":  "4215 E Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.448356",
        "longitude": "-74.632042"
      },
      "phone":       "+16093778054",
      "description": ""
    },
    {
      "name":        "Laureldale Pub & Grill",
      "categories":  [
        "American (Traditional)",
        "Pubs",
        "Lunch",
        "Dinner"
      ],
      "rating":      "5",
      "price":       "$$",
      "location":    {
        "address1":  "2301 Rte 50",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.488191619319",
        "longitude": "-74.698241186509"
      },
      "phone":       "+16096251400",
      "description": ""
    },
    {
      "name":        "Brick House Pub and Grille",
      "categories":  [
        "Pubs",
        "American (Traditional)",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4",
      "price":       "$$",
      "location":    {
        "address1":  "4450 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.45083",
        "longitude": "-74.6429334"
      },
      "phone":       "+16098372763",
      "description": ""
    },
    {
      "name":        "Mays Landing Diner",
      "categories":  [
        "American (Traditional)",
        "Coffee",
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "rating":      "3.5",
      "price":       "$$",
      "location":    {
        "address1":  "6177 Harding Hwy",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.448382230291",
        "longitude": "-74.746996808985"
      },
      "phone":       "+16096255051",
      "description": ""
    },
    {
      "name":        "Crossroads Bar & Grill",
      "categories":  [
        "Bars",
        "Seafood",
        "Chicken Wings",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4.5",
      "price":       "$$",
      "location":    {
        "address1":  "151 Philadelphia Ave",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor City",
        "zip_code":  "08215",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.530087943678",
        "longitude": "-74.646665118635"
      },
      "phone":       "+16094455211",
      "description": ""
    },
    {
      "name":        "Wawa Store Number 749",
      "categories":  [
        "Coffee",
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "rating":      "",
      "price":       "$",
      "location":    {
        "address1":  "300 North Route 50",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "",
        "longitude": ""
      },
      "phone":       "+16096258211",
      "description": "This Wawa does not have a gas station."
    },
    {
      "name":        "Wawa Store Number 925",
      "categories":  [
        "Coffee",
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "rating":      "",
      "price":       "$",
      "location":    {
        "address1":  "5201 Harding Highway",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "",
        "longitude": ""
      },
      "phone":       "+16099090418",
      "description": "This Wawa does have a gas station."
    },
    {
      "name":        "Wawa Store Number 941",
      "categories":  [
        "Coffee",
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "rating":      "",
      "price":       "",
      "location":    {
        "address1":  "4262 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "",
        "zip_code":  "",
        "country":   "",
        "state":     "",
        "latitude":  "",
        "longitude": ""
      },
      "phone":       "+16094842424",
      "description": "This Wawa does have a gas station."
    },
    {
      "name":        "JJ's Diner",
      "categories":  [
        "Breakfast",
        "Brunch",
        "Coffee"
      ],
      "rating":      "5",
      "price":       "$",
      "location":    {
        "address1":  "610 W Delilah Rd",
        "address2":  "",
        "address3":  "",
        "city":      "Pleasantville",
        "zip_code":  "08232",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.4095",
        "longitude": "-74.52245"
      },
      "phone":       "+16096411400",
      "description": ""
    },
    {
      "name":        "Sublime Seafood",
      "categories":  [
        "Seafood",
        "Soup",
        "Salad",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4.5",
      "price":       "$",
      "location":    {
        "address1":  "6825 Tilton Rd",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor Township",
        "zip_code":  "08234",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.38961",
        "longitude": "-74.56"
      },
      "phone":       "+16093804612",
      "description": ""
    },
    {
      "name":        "Chickie and Pete's",
      "categories":  [
        "Sports Bars",
        "Seafood",
        "American (Traditional)",
        "Lunch",
        "Dinner"
      ],
      "rating":      "",
      "price":       "$$",
      "location":    {
        "address1":  "6055 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor Township",
        "zip_code":  "08234",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.434060671062",
        "longitude": "-74.610342494854"
      },
      "phone":       "+16092721930",
      "description": ""
    },
    {
      "name":        "Harbor Diner",
      "categories":  [
        "Diners",
        "Breakfast",
        "Brunch",
        "Coffee",
        "Soup",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4",
      "price":       "$",
      "location":    {
        "address1":  "613 White Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor City",
        "zip_code":  "08215",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.5283405",
        "longitude": "-74.646798"
      },
      "phone":       "+16099650797",
      "description": ""
    },
    {
      "name":        "Frankie's Pizza II",
      "categories":  [
        "Pizza",
        "Italian",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4",
      "price":       "$",
      "location":    {
        "address1":  "565 N Rte 50",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.45712",
        "longitude": "-74.72519"
      },
      "phone":       "+16096257566",
      "description": ""
    },
    {
      "name":        "Ky Lin Chinese Restaurant",
      "categories":  [
        "Chinese",
        "Malaysian",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4.5",
      "price":       "$$",
      "location":    {
        "address1":  "6106 Black Horse Pike",
        "address2":  "Unit 5B",
        "address3":  "",
        "city":      "Egg Harbor Township",
        "zip_code":  "08234",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.433158874512",
        "longitude": "-74.606819152832"
      },
      "phone":       "+16093830668",
      "description": ""
    },
    {
      "name":        "Rama Thai",
      "categories":  [
        "Thai",
        "Lunch",
        "Dinner"
      ],
      "rating":      "",
      "price":       "$$",
      "location":    {
        "address1":  "3003 English Creek Ave",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor Township",
        "zip_code":  "08234",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.43425777581",
        "longitude": "-74.614431686771"
      },
      "phone":       "+16096771004",
      "description": ""
    },
    {
      "name":        "Pepes",
      "categories":  [
        "Delis",
        "Sandwiches",
        "Mexican",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4.5",
      "price":       "$",
      "location":    {
        "address1":  "201 Cincinnati Ave",
        "address2":  "Ste A",
        "address3":  "",
        "city":      "Egg Harbor City",
        "zip_code":  "08215",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.529632568359",
        "longitude": "-74.645118713379"
      },
      "phone":       "+16099652087",
      "description": ""
    },
    {
      "name":        "Crossroads Bar & Grill",
      "categories":  [
        "Bars",
        "Seafood",
        "Chicken Wings",
        "Lunch",
        "Dinner"
      ],
      "rating":      "",
      "price":       "$$",
      "location":    {
        "address1":  "151 Philadelphia Ave",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor city",
        "zip_code":  "08215",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.530087943678",
        "longitude": "-74.646665118635"
      },
      "phone":       "+16094455211",
      "description": ""
    },
    {
      "name":        "T. Wakes Smoked BBQ & Shrimp Shack",
      "categories":  [
        "Barbeque",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4.5",
      "price":       "$$",
      "location":    {
        "address1":  "6701 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor Township",
        "zip_code":  "08234",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.4057",
        "longitude": "-74.56531"
      },
      "phone":       "+16093778542",
      "description": ""
    },
    {
      "name":        "LB One Steakhouse",
      "categories":  [
        "Steakhouses",
        "Dinner"
      ],
      "rating":      "4.5",
      "price":       "$$",
      "location":    {
        "address1":  "6605 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor Township",
        "zip_code":  "08234",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.417952",
        "longitude": "-74.582216"
      },
      "phone":       "+16096457655",
      "description": ""
    },
    {
      "name":        "Sakura Japanese Steak, Seafood House & Sushi Bar",
      "categories":  [
        "Japanese",
        "Steakhouses",
        "Sushi Bars",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4",
      "price":       "$$",
      "location":    {
        "address1":  "4215 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.45475167818",
        "longitude": "-74.727630615234"
      },
      "phone":       "+16094850071",
      "description": ""
    },
    {
      "name":        "Careme's Restaurant",
      "categories":  [
        "Cafes",
        "Lunch",
        "Dinner",
        "Coffee"
      ],
      "rating":      "4",
      "price":       "$$",
      "location":    {
        "address1":  "Atlantic Cape Community College",
        "address2":  "5100 Black Horse Pike",
        "address3":  "Bldg M",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.452233290396",
        "longitude": "-74.727630615234"
      },
      "phone":       "+16093434940",
      "description": ""
    },
    {
      "name":        "Johnnie's Restutant",
      "categories":  [
        "Breakfast",
        "Brunch",
        "Coffee",
        "American (Traditional)"
      ],
      "rating":      "4",
      "price":       "$",
      "location":    {
        "address1":  "6056 Harding Hwy",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.447661",
        "longitude": "-74.734853"
      },
      "phone":       "+16096252000",
      "description": ""
    },
    {
      "name":        "Watering Hole Cafe",
      "categories":  [
        "Sports Bars",
        "Cafes",
        "Music Venues",
        "Lunch",
        "Dinner"
      ],
      "rating":      "3.5",
      "price":       "$",
      "location":    {
        "address1":  "6494 Weymouth Rd",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.441555421235",
        "longitude": "-74.729323322754"
      },
      "phone":       "+16096259300",
      "description": ""
    },
    {
      "name":        "Brick House Pub and Grille",
      "categories":  [
        "Pubs",
        "American (Traditional)",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4",
      "price":       "$$",
      "location":    {
        "address1":  "4450 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.45083",
        "longitude": "-74.6429334"
      },
      "phone":       "+16098372763",
      "description": ""
    },
    {
      "name":        "Cousin Mario's",
      "categories":  [
        "Pizza",
        "Italian",
        "Lunch",
        "Dinner"
      ],
      "rating":      "3.5",
      "price":       "$$",
      "location":    {
        "address1":  "5401 Harding Hwy",
        "address2":  "Ste 3",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.448919510166",
        "longitude": "-74.708952971347"
      },
      "phone":       "+16098372698",
      "description": ""
    },
    {
      "name":        "Flat Stone Tavern & Grill",
      "categories":  [
        "American (New)",
        "Pizza",
        "Beer Bar",
        "Lunch",
        "Dinner"
      ],
      "rating":      "3.5",
      "price":       "$$",
      "location":    {
        "address1":  "6105 Black Horse Pike",
        "address2":  "",
        "address3":  "",
        "city":      "Egg Harbor Township",
        "zip_code":  "08234",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.432181",
        "longitude": "-74.607645"
      },
      "phone":       "+16092728808",
      "description": ""
    },
    {
      "name":        "Best Food In Town",
      "categories":  [
        "Chinese",
        "Lunch",
        "Dinner"
      ],
      "rating":      "4",
      "price":       "$",
      "location":    {
        "address1":  "800 Rt 50",
        "address2":  "",
        "address3":  "",
        "city":      "Mays Landing",
        "zip_code":  "08330",
        "country":   "US",
        "state":     "NJ",
        "latitude":  "39.457682356531",
        "longitude": "-74.724332898027"
      },
      "phone":       "+16096258818",
      "description": ""
    },


    // {
    //   "name"        : "",
    //   "categories"  : [
    //     ""
    //   ],
    //   "rating"      : "",
    //   "price"       : "",
    //   "location"    : {
    //     "address1"  : "",
    //     "address2"  : "",
    //     "address3"  : "",
    //     "city"      : "",
    //     "zip_code"  : "",
    //     "country"   : "",
    //     "state"     : "",
    //     "latitude"  : "",
    //     "longitude" : ""
    //   },
    //   "phone"       : "",
    //   "description" : ""
    // }
  ],
  // TODO: Update Attractions object structure
  "attractions":[
    {
      "name"        : "Mays Landing Country Club",
      "description" : "Located at 1855 Cates Road, the Mays Landing Country Club is known as the Best Birdie for the Buck. This affordable 18-holes of golf is a 6,624 yard course, par 71 and player friendly. They offer a driving range as well as putting and chipping areas. The Grill Room is open daily to the public, offering a full bar and great daily specials. Stop in and try one of delicious crab cakes! Planning a special event? The Mays Landing Country Club offers both on-site and off-site catering. The beautiful banquet room looks over the scenic golf course, and seats up to 200 guests.",
      "distance"    : "0"
    },
    {
      "name"        : "Balic Winery",
      "description" : "Balić Winery makes more than 27 award winning fine hand crafted wines with the European accent. With this kind of selection of premium and ultra-premium wines under one roof, why go anywhere else? Descendants of early settlers of Mays Landing planted Balić Winery, a vineyard since the early 1900's. Savo Balić, a former vine-grower from the Adriatic Sea, migrated to the United States. In 1966 he fulfilled his lifelong desire to bring European accent to the American wine making scene by acquiring the 57-acre vineyard.",
      "distance"    : "0"
    },
    {
      "name"        : "Split Elm Equestrian",
      "description" : "Split Elm 1 (the kid's barn) has a 19 stall barn and five 2-3 acre fields. One field is the main riding arena and the other three are used for turnout. The kid's barn also features a 50 x 150 indoor arena complete with rubber footing, surround sound, cameras accessible from home and ceiling fans. Split Elm 2 (the adult's barn) has a 23 stall barn and six paddocks. The adult's barn features trails, a 7/8 mile sand race track, another riding ring and a small pond. The idea for the Split Elm name came from the presence of a magnificent elm tree located at Split Elm 1. Split Elm l also features a large lounge for boarders. The Lounge is available to be rented out for parties, and is the used for summer camp, Shore Riders Pony Club and 4h activities! Split Elm is a preserved horse farm and is registered as such with the state of NJ.",
      "distance"    : "0"
    },
    {
      "name"        : "Jersey Shore Children's Museum",
      "description" : "JSCM is a non-profit, hands-on discovery center dedicated to stimulating curiosity and awareness in the areas of science, technology, history, and culture. Programs and exhibits encourage children (of all ages) to explore the world around them by providing an environment that stimulates creativity, imagination, and learning through interactive play.",
      "distance"    : "0"
    }
  ]
}

// Weather courtesy of the Yahoo Weather API.
// This free API recommends no more than 2000 calls per day

var myAPI = {
  host: 'query.yahooapis.com',
  port: 443,
  path: `/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodeURIComponent(data.city)}%2C%20${data.state}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`,
  method: 'GET'
};
// 2. Skill Code =======================================================================================================

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);

  // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';
  ///alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

// TODO: Rewrite all handlers to work with updated data structure
var handlers = {
  'LaunchRequest': function () {
    var say = this.t('WELCOME') + ' ' + this.t('HELP');
    this.emit(':ask', say, say);
  },

  'AboutIntent': function () {
    this.emit(':tell', this.t('ABOUT'));
  },

  'CoffeeIntent': function () {
    var restaurant = randomArrayElement(getRestaurantsByMeal('coffee'));
    this.attributes['restaurant'] = restaurant.name;

    var say = "For a great coffee shop, I recommend, well there aren't any great coffee shops, but the is " + restaurant.name + ". Would you like to hear more?";
    this.emit(':ask', say);
  },

  'BreakfastIntent': function () {
    var restaurant = randomArrayElement(getRestaurantsByMeal('breakfast'));
    this.attributes['restaurant'] = restaurant.name;

    var say = 'For breakfast, try this, ' + restaurant.name + '. They have bacon, I promise. Would you like to hear more?';
    this.emit(':ask', say);
  },

  'LunchIntent': function () {
    var restaurant = randomArrayElement(getRestaurantsByMeal('lunch'));
    this.attributes['restaurant'] = restaurant.name;

    var say = 'Lunch time! Here is a good spot. ' + restaurant.name + '. Would you like to hear more?';
    this.emit(':ask', say);
  },

  'DinnerIntent': function () {
    var restaurant = randomArrayElement(getRestaurantsByMeal('dinner'));
    this.attributes['restaurant'] = restaurant.name;

    var say = 'Enjoy dinner at, ' + restaurant.name + '. Would you like to hear more?';
    this.emit(':ask', say);
  },

  'AMAZON.YesIntent': function () {
    var restaurantName = this.attributes['restaurant'];
    var restaurantDetails = getRestaurantByName(restaurantName);

    var say = restaurantDetails.name
      + ' is located at ' + restaurantDetails.address
      + ', the phone number is ' + restaurantDetails.phone
      + ', and the description is, ' + restaurantDetails.description
      + '  I have sent these details to the Alexa App on your phone. Enjoy your meal! <say-as interpret-as="interjection">mangia</say-as>.' ;

    var card = restaurantDetails.name + '\n' + restaurantDetails.address + '\n'
      + data.city + ', ' + data.state + ' ' + data.postcode
      + '\nphone: ' + restaurantDetails.phone + '\n';

    this.emit(':tellWithCard', say, restaurantDetails.name, card);
  },

  'AttractionIntent': function () {
    var distance = 200;
    if (this.event.request.intent.slots.distance.value) {
      distance = this.event.request.intent.slots.distance.value;
    }

    var attraction = randomArrayElement(getAttractionsByDistance(distance));
    var say = 'Try '
      + attraction.name + ', which is '
      + (attraction.distance == "0" ? 'right downtown. ' : attraction.distance + ' miles away. Have fun! ')
      + attraction.description;
    this.emit(':tell', say);
  },

  'GoOutIntent': function () {

    getWeather( ( localTime, currentTemp, currentCondition) => {
      // time format 10:34 PM
      // currentTemp 72
      // currentCondition, e.g.  Sunny, Breezy, Thunderstorms, Showers, Rain, Partly Cloudy, Mostly Cloudy, Mostly Sunny

      // sample API URL for Irvine, CA
      // https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22irvine%2C%20ca%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys

      this.emit(':tell', 'It is ' + localTime
        + ' and the weather in ' + data.city
        + ' is '
        + currentTemp + ' and ' + currentCondition);

      // TODO:
      // Decide, based on current time and weather conditions,
      // whether to go out to a local beach or park;
      // or recommend a movie theatre; or recommend staying home
    });
  },

  'AMAZON.NoIntent': function () {
    this.emit('AMAZON.StopIntent');
  },
  'AMAZON.HelpIntent': function () {
    this.emit(':ask', this.t('HELP'));
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP'));
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP'));
  }

};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function getRestaurantsByMeal(mealtype) {

    var list = [];
    for (var i = 0; i < data.restaurants.length; i++) {

        if(data.restaurants[i].meals.search(mealtype) >  -1) {
            list.push(data.restaurants[i]);
        }
    }
    return list;
}

function getRestaurantByName(restaurantName) {

    var restaurant = {};
    for (var i = 0; i < data.restaurants.length; i++) {

        if(data.restaurants[i].name == restaurantName) {
            restaurant = data.restaurants[i];
        }
    }
    return restaurant;
}

function getAttractionsByDistance(maxDistance) {

    var list = [];

    for (var i = 0; i < data.attractions.length; i++) {

        if(parseInt(data.attractions[i].distance) <= maxDistance) {
            list.push(data.attractions[i]);
        }
    }
    return list;
}

function getWeather(callback) {
    var https = require('https');


    var req = https.request(myAPI, res => {
        res.setEncoding('utf8');
        var returnData = "";

        res.on('data', chunk => {
            returnData = returnData + chunk;
        });
        res.on('end', () => {
            var channelObj = JSON.parse(returnData).query.results.channel;

            var localTime = channelObj.lastBuildDate.toString();
            localTime = localTime.substring(17, 25).trim();

            var currentTemp = channelObj.item.condition.temp;

            var currentCondition = channelObj.item.condition.text;

            callback(localTime, currentTemp, currentCondition);

        });

    });
    req.end();
}
function randomArrayElement(array) {
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}