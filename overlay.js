

/*
  # options

  data
  divClass
  overlayClass

*/



Crater.overlay = function(template, options, callback) {
  options = options || {};

  
  var div = document.createElement('div');
  var $div = $(div);
  $div.addClass('crater-overlay');


  if(options.overlayClass) {
    if(typeof options.overlayClass === 'string') {
      $div.addClass(options.overlayClass);
    }
  }
  if(options.overlayStyle) {
    $div.css(options.overlayStyle);
  }

  $div.hide();
  UI.insert(UI.renderWithData(Template[template], options.data), div);
  
  if(!options.modal) {
    $div.click(function(e) {
      if(e.target === div)
        Crater.dismissOverlay(div);
    });
  }

  div.__craterCallback = callback;
  $('body').append(div);

  if(options.animateIn) {
    options.animateIn(div);
  } else {
    $div.fadeIn(300);  
  }

  if(options.animateOut) div.__craterAnimateOut = options.animateOut;
  return div;
};



Crater.dismissOverlay = function(element, error, data) {
  /* Get overlay */
  var overlay = $(element).closest('.crater-overlay');

  if(!overlay || !overlay.get() || !overlay.get()[0]) return;

  var overlayDiv = overlay.get()[0];


  /* Callback */
  if(overlayDiv.__craterCallback) {
    overlayDiv.__craterCallback(error, data);
  }

  /* Dismiss */
  if(overlayDiv.__craterAnimateOut) {
    overlayDiv.__craterAnimateOut(overlayDiv, function() {
      overlay.remove();
    });
  } else {
    overlay.fadeOut(300, function(){
      overlay.remove();
    });  
  }
  
};




