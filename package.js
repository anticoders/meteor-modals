

Package.describe({
  summary:  "Modals and dialogs: the Meteor way",
  name:     "anti:modals",
  version:  "0.1.0",
  git:      "https://github.com/anticoders/meteor-modals.git",
});

Package.on_use(function (api, where) {
  api.versionsFrom('0.9.0');
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







