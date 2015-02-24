var request = require("request").defaults({
    json: true,
    useQuerystring: true
});

searchEndpoint = "http://places.getvenn.io/v1/search";
key = undefined;

exports.init = function(keyString, callback) {
  key = keyString;
}

exports.search = function(data, callback) {
  if(!key) return callback({"error": "Must initialize Venn Places with vennPlaces.init(API_KEY)"});
  // attach api key to request
  data.key = key;
  request.get({
      url: searchEndpoint,
      qs: data
  }, function(err, response, body) {
  	if (err) return callback(err); 
    return callback(null, body);
  });
}

module.exports = exports;