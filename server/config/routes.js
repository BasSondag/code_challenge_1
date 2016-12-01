var apiscontroller = require('./../controllers/apis.js');

module.exports = function(app){

	

	//root
	app.get('/', function(req, res, next ){
		console.log("index rest server api");
		apiscontroller.index(req, res, next)
	});

	app.post('/hello', function(req, res,next){
		console.log("index post rest server api");
		apiscontroller.create(req, res, next)
	});

	app.get('*',function (req, res, next) {
		console.log('unknown')
        apiscontroller.unknown(req, res, next);
    });
}