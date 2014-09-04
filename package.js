

Package.describe({
  summary:  "Modals and dialogs: the Meteor way",
  name:     "anti:modals",
  version:  "0.2.1",
  git:      "https://github.com/anticoders/meteor-modals.git",
});

Package.on_use(function (api, where) {
  api.versionsFrom('0.9.0');
  api.use(['deps', 'underscore', 'templating', 'spacebars', 'ui'], 'client');

  api.export('AntiModals', 'client');

  api.add_files([
    'client/index.js',
    
    'client/overlay.js',
    'client/alert.html',
    'client/alert.js',
    'client/alert.css',
    'client/displayAlert.js',

  ], 'client');


});







