
window.onload = function() {
  var userAgent = navigator.userAgent.toLowerCase();
  var htmlElement = document.getElementsByTagName('html')[0];
  
  if (/mobile|android|iphone|ipad|webos|blackberry|iemobile|opera mini/i.test(userAgent)) {
    htmlElement.classList.add('mobile-style');
  } else {
    htmlElement.classList.add('desktop-style');
  }
};


   