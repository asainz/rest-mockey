RESTMockey = function(){}

RESTMockey.prototype.init = function(data){
    var self = this;
    self.data = data;

    function getServiceBy(field, value){
        var service;
        self.data.services.forEach(function(_service){
            if( service ){ return; }
            if( _service[field] === value){
                service = _service;
            }
        });

        if(!service){
            //TODO: Handle error
        }

        return service;
    };

    function getServiceById(serviceId){
        return getServiceBy('id', serviceId);
    }

    function getAllServices(){
        return self.data.services;
    }

    function getServiceByPath(servicePath){
        return getServiceBy('path', servicePath);
    }

    function getAllResponses(params){
        var service = getServiceByPath(params.path);
        
        if( service.responses[params.method] ){
            return service.responses[params.method]
        }

        //TODO: Handle error
    }

    function getServiceResponse(params){
        var responses = getAllResponses(params);
        var response;

        responses.forEach(function(_response){
            if( response ){ return; }
            if( _response.active ){
                response = JSON.parse(_response.body);
            }
        });

        if( response ){
            return response;
        }

        //TODO: Handle error
    }

    return {
        getAllServices: getAllServices,
        getServiceByPath: getServiceByPath,
        getServiceById: getServiceById,
        getAllResponses: getAllResponses,
        getServiceResponse: getServiceResponse
    };
}

// Make public as node module
if( exports ){
    exports.init = function(data){
        var mockey = new RESTMockey;
        return mockey.init(data);
    };
}