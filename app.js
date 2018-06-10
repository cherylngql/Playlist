const playlist = new Playlist();

const hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
const walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43"); 
const kingyohanabi = new Song("Kingyo Hanabi", "Otsuka Ai", "4:22");
const unravel = new Song("Unravel", "TK", "4:10");
const manOfSteel = new Movie("Man of Steel", "2013", "2:22:00");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(kingyohanabi);
playlist.add(unravel);
playlist.add(manOfSteel);

const playlistElement = document.getElementById('playlist');

playlist.renderInElement(playlistElement);

const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const stopButton = document.getElementById('stop');

playButton.onclick = function () {
  playlist.play();
  playlist.renderInElement(playlistElement);
}

nextButton.onclick = function () {
  playlist.next();
  playlist.renderInElement(playlistElement);
}

stopButton.onclick = function () {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}