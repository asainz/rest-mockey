module.exports = function(app){
    var home = require('../app/controllers/home');
    var api = require('../app/controllers/api');

    app.get('/', home.index);

    /*
    localhost:3000/api/get-colors
     */
    
    app.get(/^\/api(.*)$/, api.index);
};
