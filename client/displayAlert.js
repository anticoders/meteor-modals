
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

  return AntiModals.overlay('__antiModals__alert', param, callback);
};

AntiModals.alert = function(options, callback) {
  return displayAlert({
    title: false,
    closer: false,

    message: '',
    prompt: false,
    value: '',
    placeholder: '',

    cancel: false,
    ok: 'OK',
  }, options, callback);
};

AntiModals.confirm = function(options, callback) {
  return displayAlert({
    title: false,
    closer: false,
    
    message: '',
    prompt: false,
    value: '',
    placeholder: '',

    cancel: 'CANCEL',
    ok: 'OK',
  }, options, callback);
};

AntiModals.prompt = function(options, callback) {
  return displayAlert({
    title: false,
    closer: false,
    
    message: '',
    prompt: true,
    value: '',
    placeholder: '',

    cancel: 'CANCEL',
    ok: 'OK',
  }, options, callback);
};


