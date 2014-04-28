var data = require('../data/data.json');
var RESTMockey = require('../bower_components/RESTMockey').init(data);

exports.module = function(){
    
    var get = function(serviceId){
        return RESTMockey.getAllServices();
    };

    var getResponses = function(params){
        return RESTMockey.getAllResponses(params);
    };

    var getActiveScenario = function(params){
        return RESTMockey.getServiceResponse(params);
    };

    return {
        get: get,
        getActiveScenario: getActiveScenario
    };
};