window.onload = function() {
  var stopButton = document.querySelector('#stopButton');
  var slowButton = document.querySelector('#slowButton');
  var goButton = document.querySelector('#goButton');

  var stopLight = document.querySelector('#stopLight');
  var slowLight = document.querySelector('#slowLight');
  var goLight = document.querySelector('#goLight');

  stopButton.addEventListener('click', trafficLight.illuminateRed);
  slowButton.addEventListener('click', trafficLight.illuminateYellow);
  goButton.addEventListener('click', trafficLight.clearLights);
}


var trafficLight = {
  illuminateRed: function(event) {
    trafficLight.clearLights();
    stopLight.style.background = 'red';
  },
  illuminateYellow: function(event) {
    trafficLight.clearLights();
    slowLight.style.background = 'yellow';
  },

  clearLights: function() {
    stopLight.style.background = 'green';

  }
}
