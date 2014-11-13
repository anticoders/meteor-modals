

Package.describe({
  summary:  "Modals and dialogs: the Meteor way",
  name:     "anti:modals",
  version:  "0.4.0",
  git:      "https://github.com/anticoders/meteor-modals.git",
});

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.1.1');
  api.use(['deps', 'underscore', 'templating', 'spacebars', 'ui'], 'client');

  api.export('AntiModals', 'client');

  api.addFiles([
    'client/index.js',
    
    'client/overlay.js',
    'client/alert.html',
    'client/alert.js',
    'client/alert.css',
    'client/displayAlert.js',

  ], 'client');

});







