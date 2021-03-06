const video = document.querySelector("video");

function videoPlayPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

video.addEventListener("click", videoPlayPause);

function initMap() {
  let element = document.querySelector(".map");
  let options = {
    zoom: 10,
    center: { lat: 40.1772, lng: 44.50349 },
  };

  let myMap = new google.maps.Map(element, options);

  let marker = new google.maps.Marker({
    position: { lat: 40.1772, lng: 44.50349 },
    map: myMap,
    icon: "./images/placeholder.png",
  });

  let InfoWindow = new google.maps.InfoWindow({
    content:
      '<p style="color:red">Osterio Mario <span style="display: block; color:#333; text-align:center; font-size:13px;">Restaurant</span></p>',
  });

  InfoWindow.open(myMap, marker);

  marker.addListener("click", () => {
    InfoWindow.open(myMap, marker);
  });
}

const copy = document.querySelector(".copy");

const date = new Date().getFullYear();
// copy.forEach((d) => {
//   d.innerHTML = `Copyright &copy; ${date} all right reserved`;
// });
copy.innerHTML = `Copyright &copy; ${date} all right reserved`;


const arrow = document.querySelector('.arrow');

window.addEventListener('scroll', ()=>{
  if(window.pageYOffset > 3000){
    arrow.classList.add('active');
  }else{
    arrow.classList.remove('active')
  }
})

