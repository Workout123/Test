var express = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    sessions        = require('./routes/sessions'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride());      // simulate DELETE and PUT

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/cities', sessions.findCities);
app.get('/cities/:id', sessions.findById);
app.get('/cities/city/:city', sessions.findByCity);
app.get('/cities/rest/:city', sessions.findRestByCity);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
