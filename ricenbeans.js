// Clock
let showCurrentTime = function() {
    // Marks AM or PM
    const noon = 12;
    let meridian = "AM";
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    if (hours >= 12) {
      meridian = "PM";
    }
    // Makes the clock not military time
    if (hours > noon) {
      hours = hours - 12;
    }
    // Formats the clock to always have 2 digits in mintes and seconds
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    let clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
  
    document.getElementById("clock").innerHTML = clockTime;
  };
  showCurrentTime();
  setInterval(showCurrentTime, 1000);
  
  let servingTimeLight = function() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
  
    if (hours >= 16 && hours < 21) {
      document.getElementById("dinner").classList.remove('dinner0');
      document.getElementById("dinner").classList.add('dinner1');
    } else if (hours >= 12 && hours < 16) {
      document.getElementById("lunch").classList.remove('lunch0');
      document.getElementById("lunch").classList.add('lunch1');
    } else if (hours >= 21 || hours < 12) {
      document.getElementById("closed").classList.remove('closed0');
      document.getElementById("closed").classList.add('closed1');
    }
  };
  servingTimeLight();
  
  // Food Truck location on Google Maps
  function initMap() {
    const truckLoc = {
      lat: 33.8646,
      lng: -83.4106
    };
    const map = new google.maps.Map(document.getElementById("mapLocation"), {
      zoom: 15,
      center: truckLoc,
    });
    const marker = new google.maps.Marker({
      position: truckLoc,
      map: map,
    });
  }
  
  let restaurantLocations = [locOne, locTwo, locThree]
  
  