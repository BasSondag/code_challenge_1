module.exports = (function(){
	return {
		index: function(req, res, next){
			var time = new Date();
			time =  Date.parse(time)/1000
			var stamp = '<p>'+ time + '</p> <br> <form action="/hello" method="post"><button> Push me </button> </form>'
			res.render('index', function(err, html){ 
				res.set('Content-Type', 'text/html');
				res.send(stamp); 
	  		});	
		},
		create: function(req, res, next){
			res.redirect('back', function(err, next){
				res.set('Content-Type', 'text/plain')
				res.send('universe')
			});	
		},        
		unknown: function(req,res,next){
			res.redirect('back', function(err, res){
				res.set('Content-Type', 'text/plain');
				res.send('not found');
			});
		}
	}
})()