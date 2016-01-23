'use strict';

module.exports = function (app) {
    
    app.route('/')
      .get(function (req, res) {
         res.sendFile(process.cwd() + '/public/index.html');
      });
    app.route('/:query')
      .get(function (req, res) {
        var time = req.params.query;
        console.log(time, req.query);
        res.send(time);
      });
};

//need to create some space for anything / + whatever