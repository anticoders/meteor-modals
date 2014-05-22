

Package.describe({
  summary: "Handy UI Library for Meteor"
});

Package.on_use(function (api, where) {

  api.use(['deps', 'underscore', 'templating', 'spacebars', 'ui'], 'client');

  api.export('Crater', 'client');

  api.add_files([
    'index.js',
    
    'overlay.js',
    'alert.html',
    'alert.js',
    'alert.css',
    'displayAlert.js',

  ], 'client');


});







