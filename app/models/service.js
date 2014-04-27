exports.module = function(){
    var data = require('../data/data.json');

    var getResponses = function(params){
        var responses;
        data.services.forEach(function(service){
            if(service.path === params.path){
                responses = service.responses[ params.method ];
            }
        });

        return responses;
    };

    var getActiveScenario = function(params){
        var activeScenario;
        var errors = [];
        var responses = getResponses({
            path: params.path,
            method: params.method
        });

        if( !responses ){
            errors.push({
                name: 'Invalid scervice'
            });
            return errors;
        }

        responses.forEach(function(response){
            if( response.active ){
                activeScenario = JSON.parse(response.body);
            }
        });

        if( activeScenario ){
            return activeScenario;
        }

        errors.push({
            name: 'No active scenario'
        });
        return errors;
    };

    return {
        getActiveScenario: getActiveScenario
    };
};