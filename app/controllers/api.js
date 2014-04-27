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

    var data = require('../data/data.json');
    var services = data.services;
    var APIResponse;

    services.forEach(function(service){
        var responses;
        if( service.path === path ){
            responses = service.responses[method];
            if( !responses ){
                APIResponse = {
                    error: "No scenario has been defined for this method."
                };
            }

            responses.forEach(function(response){
                if( response.active ){
                    APIResponse = JSON.parse(response.body);
                }
            });

            if( !APIResponse ){
                APIResponse = {
                    error: "There isn't any active scenario for this service."
                };
            }
        }
    });

    res.json(APIResponse);
};