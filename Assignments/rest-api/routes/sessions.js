var sessions = [
    {id:0 , title:"Introduction to Ionic", speaker:"CHRISTOPHE COENRAETS", time:"9:40am", room:"Ballroom A", description: "In this session, you'll learn how to build a native-like mobile application using the Ionic Framework, AngularJS, and Cordova."},
    {id:1 , title:"AngularJS in 50 Minutes", speaker:"LISA SMITH", time:"10:10am", room:"Ballroom B", description: "In this session, you'll learn everything you need to know to start building next-gen JavaScript applications using AngularJS."},
    {id:2 , title:"Contributing to Apache Cordova", speaker:"JOHN SMITH", time:"11:10am", room:"Ballroom A", description: "In this session, John will tell you all you need to know to start contributing to Apache Cordova and become an Open Source Rock Star."},
    {id:3 , title:"Mobile Performance Techniques", speaker:"JESSICA WONG", time:"3:10Pm", room:"Ballroom B", description: "In this session, you will learn performance techniques to speed up your mobile application."},
];
var cities = [
	{id:0 ,name:"Bangalore",desc:"Silicon Valley"},
	{id:1 ,name:"Mangalore",desc:"Port city"},
	{id:2 ,name:"New Delhi",desc:"The capital"},
	{id:3 ,name:"Chennai",desc:"The other port city"},
	{id:4 ,name:"Bombay",desc:"Bollywood"}
];
var restaurants = [
	{	
		name:"Bangalore",
		rest:{
			"TacoBell":4,
			"Burger King":2,
			"Kfc":9,
			"McDonalds":1
		}
	},
	{	
		name:"Mangalore",
		rest:{
			"Burger King":2,
			"Kfc":9,
			"McDonalds":1,	
			"Dominoes": 5
		}
	},
	{	
		name:"Bombay",
		rest:{
			"SubWay": 7,
			"TacoBell":4,
			"Burger King":2,
			"Kfc":9	
		}
	},
	{	
		name:"New Delhi",
		rest:{
			"Dominoes": 5,
			"pizza hut":6,
			"SubWay": 7,
			"TacoBell":4,
			"Burger King":2,
			"Kfc":9,
			"McDonalds":1

		}
	},
	{	
		name:"Chennai",
		rest:{
			"pizza hut":10,
			"SubWay": 7,
			"taco bell":6
		}
	},
	

]


exports.findCities = function (req, res, next) {
    res.send(cities);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;

    res.send(cities[id]);
};
exports.findByCity = function (req, res, next) {
    var city = req.params.city;
    var response;
    for(var i = 0; i < cities.length; i++)
    {
    	if(cities[i].name == city)
    	{
    		response = cities[i];	
    		break;
    	}	
    }
    res.send(response);
};
exports.findRestByCity = function (req, res, next) {
    var city = req.params.city;
    var response;
    for(var i = 0; i < restaurants.length; i++)
    {
    	if(restaurants[i].name == city)
    	{
    		response = restaurants[i];	
    		break;
    	}	
    }	
    res.send(response);
};