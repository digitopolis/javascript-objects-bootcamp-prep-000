var playlist = {
  'The Fall': 'Oh Brother'
};

function updatePlaylist(playlist, artist, songTitle) {
<<<<<<< HEAD
  //Object.assign({}, playlist, {artist: songTitle});
  playlist[artist] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
=======
  Object.assign({}, playlist, {artist: songTitle});
}

function removeFromPlaylist(playlist, artist) {
  
>>>>>>> 3608dbae291640cda41c9f7778cbe25c96bbc8a3
}