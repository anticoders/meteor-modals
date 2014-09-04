Template.__antiModals__alert.helpers({

  titleOrCloser: function() {
    return this.title || this.closer;
  },

  okOrCancel: function() {
    return this.ok || this.cancel;
  },

});

Template.__antiModals__alert.events({

  'click .anti-modal-button-cancel, click .anti-modal-closer': function(e, t) {
    AntiModals.dismissOverlay(e.target, null, null);
  },

  'click .anti-modal-button-action': function(e, t) {
    if(t.data.prompt) {
      AntiModals.dismissOverlay(e.target, null, {
        value: t.$('.anti-modal-prompt').val(),
      });
    } else {
      AntiModals.dismissOverlay(e.target, null, true);
    }
  },

  'keydown .anti-modal-prompt': function(e, t) {
    if(e.keyCode !== 13) return;

    AntiModals.dismissOverlay(e.target, null, {
      value: t.$('.anti-modal-prompt').val(),
    });
  },


});


