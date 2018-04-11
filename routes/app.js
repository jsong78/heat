

module.exports = function(router) {
	router.get('/', function(req,res){
		res.status(200).send({
			message:"successful",
			data: []
		});
	});
	return router;
}