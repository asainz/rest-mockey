module.exports = function(app){
    var home = require('../app/controllers/home');

    app.get('/', home.index);

    /*
    localhost:3000/api/get-colors
     */
    
    app.get(/^\/api(.*)$/, function(req, res){
        var method = req.method;
        var path = req.params[0];
        var query = req.query;

        var data = require('../app/data/profile.json');

        res.json(data);
    });
};
