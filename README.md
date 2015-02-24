# Venn Places

Get normalized place data from Foursquare, Yelp, Facebook, Google, and Factual.

### Install

```
npm i venn-places --save
```

### Example
```
vennPlaces = require("venn-places");
vennPlaces.init(API_KEY);

data = {
	category: "food",
	address: "1411 Vine St. Cincinnati, OH 45202",
	limit: 10
}

vennPlaces.search(data, function(err, results)) {
	console.log(results);	
};
```

### Functions
.search
Parameter     |   Required        |     Type                    |    Example
------------- | -------------     |---------------------------- | -------------
keyword       | this or category  |   string                    |    food
category      | this or keyword   |       string                |   outback
address       | this or location  |     string                  |   1411 Vine St Cincinnati, OH 45202
location      | this or address   | string (comma separated)    |   44.2333423,-84.3453452
limit         | no (default 10)   |     int                     |     20


