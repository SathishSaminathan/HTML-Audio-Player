// $(document).ready(function() {
var songs = ["song1.mp3", "song2.mp3", "song3.mp3"];
var posters = ["Poster1.jpg", "Poster2.jpg", "Poster3.jpg"];

var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0;

window.onload = playSong;

function playSong() {
  var songTitle = document.getElementById("songTitle");

  if(fillBar){
      console.log('av')
  }
  else{
      console.log('not')
  }

  if (songTitle) {
    console.log("available");
    songTitle.textContent = songs[currentSong];
    console.log(songs[currentSong]);
  } else console.log("not");

  song.src = songs[currentSong];
  song.play();
  // alert('hai')
}

function playOrPause() {
  if (song.paused) {
    song.play();
    $("#play img").attr("src", "Pause.png");
  } else {
    song.pause();
    $("#play img").attr("src", "Play.png");
  }
}

song.addEventListener('timeupdate',function(){
    var position =song.currentTime/song.duration;

    fillBar.style.width= position * 100+"%"
})
// });
