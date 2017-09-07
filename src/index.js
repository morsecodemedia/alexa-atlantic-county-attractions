
// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function

var languageStrings = {
    'en': {
        'translation': {
            'WELCOME' : "Welcome to Atlantic County Attractions!",
            'HELP'    : "Say about, to hear more about Atlantic County, or say coffee, breakfast, lunch, or dinner, to hear local restaurant suggestions, or say recommend an attraction, or say, go outside. ",
            'ABOUT'   : "All of what is known today as Atlantic County was once called Egg Harbor Township, the eastern half of the original County of Gloucester. Named as an official district as early as 1693, it was bounded on the north by the Little Egg Harbor River (now known as the Mullica River), and on the south by the Great Egg Harbor River and its southern branch the Tuckahoe River. Its eastern boundary was the Atlantic Ocean, but the western boundary in the South Jersey interior was not fixed until 1761. The county was formally created from portions of Gloucester County as of February 7, 1837, and consisted of the townships of Egg Harbor, Galloway, Hamilton and Weymouth.",
            'STOP'    : "Okay, see you next time!"
        }
    }
};
var data = {
    "city"        : "Mays Landing",
    "state"       : "NJ",
    "postcode"    : "08330",
    "restaurants" : [
        {
			"name"			: "Wawa Store Number 749",
			"address"		: "300 North Route 50",
			"phone"			: "609-625-8211",
            "meals"			: "coffee, breakfast, lunch, dinner",
            "description"	: "This Wawa does not have a gas station."
		},
		{
			"name"			: "Wawa Store Number 925",
			"address"		: "5201 Harding Highway",
			"phone"			: "609-909-0418",
			"meals"			: "coffee, breakfast, lunch, dinner",
			"description"	: "This Wawa does have a gas station. The current price for a gallon or regular is $2.33."
		},
		{
			"name"			: "Wawa Store Number 941",
			"address"		: "4262 Black Horse Pike",
			"phone"			: "609-484-2424",
			"meals"			: "coffee, breakfast, lunch, dinner",
			"description"	: "This Wawa does have a gas station. The current price for a gallon or regular is $2.33."
		}

    ],
    "attractions":[
        {
            "name": "Mays Landing Country Club",
            "description": "Located at 1855 Cates Road, the Mays Landing Country Club is known as the Best Birdie for the Buck. This affordable 18-holes of golf is a 6,624 yard course, par 71 and player friendly. They offer a driving range as well as putting and chipping areas. The Grill Room is open daily to the public, offering a full bar and great daily specials. Stop in and try one of delicious crab cakes! Planning a special event? The Mays Landing Country Club offers both on-site and off-site catering. The beautiful banquet room looks over the scenic golf course, and seats up to 200 guests.",
            "distance": "0"
		},
		{
            "name": "Balic Winery",
            "description": "Balić Winery makes more than 27 award winning fine hand crafted wines with the European accent. With this kind of selection of premium and ultra-premium wines under one roof, why go anywhere else? Descendants of early settlers of Mays Landing planted Balić Winery, a vineyard since the early 1900's.  Savo Balić, a former vine-grower from the Adriatic Sea, migrated to the United States. In 1966 he fulfilled his lifelong desire to bring European accent to the American winemaking scene by acquiring the 57-acre vineyard.",
            "distance": "0"
        },
		{
            "name": "Split Elm Equestrian",
            "description": "Split Elm 1 (the kid's barn) has a 19 stall barn and five 2-3 acre fields. One field is the main riding arena and the other three are used for turnout. The kid's barn also features a 50 x 150 indoor arena complete with rubber footing, surround sound, cameras accessible from home and ceiling fans. Split Elm 2 (the adult's barn) has a 23 stall barn and six paddocks. The adult's barn features trails, a 7/8 mile sand race track, another riding ring and a small pond. The idea for the Split Elm name came from the presence of a magnificent elm tree located at Split Elm 1. Split Elm l also features a large lounge for boarders. The Lounge is available to be rented out for parties, and is the used for summer camp, Shore Riders Pony Club and 4h activities! Split Elm is a preserved horse farm and is registered as such with the state of NJ.",
            "distance": "0"
        },
		{
            "name": "Jersey Shore Children's Museum",
            "description": "JSCM is a non-profit, hands-on discovery center dedicated to stimulating curiosity and awareness in the areas of science, technology, history, and culture. Programs and exhibits encourage children (of all ages) to explore the world around them by providing an environment that stimulates creativity, imagination, and learning through interactive play.",
            "distance": "0"
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

            // TODO
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