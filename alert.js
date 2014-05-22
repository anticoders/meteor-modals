Template.crater_alert.helpers({
  
  titleOrCloser: function() {
    return this.title || this.closer,
  },

  okOrCancel: function() {
    return this.ok || this.cancel,
  },

});

var displayAlert = function(data, options, callback) {
  var param = {};
  if(typeof options === 'string') {
    data.message = options;
    param.data = data;
  } else {
    _.extend(data, options);
    param.data = data;
    _.extend(param, options);
  }

  return Crater.overlay('crater_alert', param, callback);
};

Crater.alert = function(options, callback) {
  return displayAlert({
    title: false,
    closer: false,

    message: '',
    prompt: false,
    value: '',

    cancel: false,
    ok: 'OK',
  }, options, callback);
};

Crater.confirm = function(options, callback) {
  return displayAlert({
    title: false,
    closer: false,
    
    message: '',
    prompt: false,
    value: '',

    cancel: 'CANCEL',
    ok: 'OK',
  }, options, callback);
};

Crater.prompt = function(options, callback) {
  return displayAlert({
    title: false,
    closer: false,
    
    message: '',
    prompt: true,
    value: '',

    cancel: 'CANCEL',
    ok: 'OK',
  }, options, callback);
};


