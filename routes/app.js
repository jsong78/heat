const mongoose = require('mongoose'); // you must have this
var user = require('../models/user');
// var Pusher = require('pusher');

module.exports = function(router) {
	router.get('/', function(req,res){
		res.status(200).send({
			message:"successful",
			data: []
		});
	});
	router.get('/api/current', function(req,res){
		user.findOne({'name':"Jamie"},function(err,userdata){
			if(err || userdata===null){
				// console.log(userdata);
				// console.log(err);
            	res.status(404).send({
            		message: "user not found",
            		current: []
            	});
			}
			else{
				// console.log(userdata);
				res.status(200).send({
					message:"GET current successful for this user",
					current: userdata.appliance[0].current
				});
			}
		});
	});
	router.get('/api/current/user', function(req,res){
		var username = req.query.username;
		console.log(username);
		user.findOne({'name':username},function(err,userdata){
			if(err || userdata===null){
				// console.log(userdata);
				// console.log(err);
            	res.status(404).send({
            		message: "user not found",
            		current: []
            	});
			}
			else{
				// console.log(userdata);
				res.status(200).send({
					message:"GET current successful for this user",
					current: userdata.appliance[0].current
				});
			}
		});
	});
	router.post('/api/current', function(req,res){
		var userPost = {
			name: req.body.name,
			appliance: req.body.appliance
		};
		user.create(userPost,(err, userdata) => {
			if(err) { console.log(err); }
			else{
				res.status(201).send({
					message: "user successfully created",
					data: userdata
				});
			}
		});
	});

	router.post('/:usrname', function(req,res){
		var userPost = {
            name: req.params.usrname
        }
		user.findOne({'name':req.params.usrname},function(err,usr_exist){
            if(err || usr_exist === null){ // not exist
                user.create(userPost,function(err,usrdata){
                    if(err){
                        res.status(500).send({
                            message: 'Internal Server Error',
                            data: []
                        });
                    }
                    else {
                        res.status(201).json({
                            message: "User "+req.params.usrname+"Successfully Created",
                            data:usrdata
                        });
                    }
                });
            }
            else {
                res.status(409).json({
                    message: "Existing User Name",
                    data:[]
                })
            }
        });
	});

	// 4/15/18
	router.get('/api/current/appliance', function(req,res){
		user.findOne({'name':"Jamie"},function(err,userdata){
			if(err || userdata===null){
				// console.log(userdata);
				// console.log(err);
							res.status(404).send({
								message: "user not found",
								current: []
							});
			}
			else{
				// console.log(userdata);
				res.status(200).send({
					message:"GET current successful for this user",
					current0: userdata.appliance[0].current,
					current1: userdata.appliance[1].current
				});
			}
		});
	});



	return router;
}
