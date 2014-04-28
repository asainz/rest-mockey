var Service = require('../models/service.js').module();

exports.index = function(req, res){
    var method = req.method.toLowerCase();
    var path = req.params[0];
    var query = req.query;

    /*
    1. Validate request headers
    2. Get service information
    3. Get active scenario
    4. Return it (CORS enabled)
     */

    var APIResponse = Service.getActiveScenario({
        path: path,
        method: method
    });

    res.json(APIResponse);
};