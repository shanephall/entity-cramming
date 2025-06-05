function playTrailer() {
  const modal = document.getElementById('trailerModal');
  modal.style.display = 'flex';
  setTimeout(() => {
    const staticOverlay = modal.querySelector('.static-overlay');
    if (staticOverlay) staticOverlay.style.display = 'none';
  }, 500);
}

function closeTrailer() {
  const modal = document.getElementById('trailerModal');
  const video = modal.querySelector('video');
  video.pause();
  video.currentTime = 0;
  modal.style.display = 'none';
  modal.querySelector('.static-overlay').style.display = 'block';
}
