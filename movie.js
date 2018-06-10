function Movie(title,year,duration) {
  Media.call(this, title, duration)
  this.year = year;
}

Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
  let htmlString = '<li'
  if (this.isPlaying) {
    htmlString += ' class="current">';
  } else {
    htmlString += '>'
  }
  htmlString += this.title;
  htmlString += " (";
  htmlString += this.year;
  htmlString += ')<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString
};