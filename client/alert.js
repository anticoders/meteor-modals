Template.crater_alert.helpers({

  titleOrCloser: function() {
    return this.title || this.closer;
  },

  okOrCancel: function() {
    return this.ok || this.cancel;
  },

});

Template.crater_alert.events({
  'click .crater-alert-button-cancel, click .crater-alert-closer': function(e, t) {
    Crater.dismissOverlay(e.target, null, null);
  },

  'click .crater-alert-button-action': function(e, t) {
    if(t.data.prompt) {
      Crater.dismissOverlay(e.target, null, {
        value: t.$('.crater-alert-prompt').val(),
      });
    } else {
      Crater.dismissOverlay(e.target, null, true);
    }
  },
});


