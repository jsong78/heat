

module.exports = function(router) {
	router.get('/', function(req,res){
		res.json('HELLO WORLD!');
	});
	return router;
}