var Service = require('../models/service.js').module();

exports.index = function(req, res){
  res.render('home', {
    services: Service.get()
  });
};