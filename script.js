// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
    document.querySelector('section').style.visibility = "visible";
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

//Information Page
function infoPage(){
    document.querySelector('model-viewer').style.width = "50%";
    document.querySelector('.Hotspot').style.display = "none";
}

//Back to Model Scene
function modelScene(){
  document.querySelector('model-viewer').style.width = "100%";
  document.querySelector('.Hotspot').style.display = "block";
  console.log("yes");
}

//Change Building
function changeBuilding(){
  console.log("change");
}