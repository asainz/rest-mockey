exports.index = function(req, res){
    var method = req.method;
    var path = req.params[0];
    var query = req.query;

    var data = require('../data/profile.json');

    res.json(data);
};