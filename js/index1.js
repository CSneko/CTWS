 function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
  document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

      function toggleOptions() {
      var options = document.getElementById('options');
      
      if (options.style.visibility === 'hidden') {
        options.style.visibility = 'visible';
      } else {
        options.style.visibility = 'hidden';
      }
    }
	


