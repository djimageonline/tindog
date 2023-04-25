import dogs from "./data.js";
import Dog from "./Dog.js";

const likedBtn = document.getElementById("heart-btn");
const dislikedBtn = document.getElementById("cross-btn");
likedBtn.addEventListener("click", heartBtnClick);
dislikedBtn.addEventListener("click", crossBtnClick);
let indexOfDog = 0;

let dogProfileArray = new Dog(dogs[indexOfDog]);
let isWaiting = false;
let likedIsWaiting = false;
let dislikedIsWaiting = false;

function heartBtnClick() {
  if (!likedIsWaiting) {
    dogProfileArray.hasBeenLiked = true;
    dogProfileArray.hasBeenSwiped = false;
    likedBtn.classList.add("liked");
    dislikedBtn.classList.remove("dis-liked");
    likedIsWaiting = true;
    dislikedIsWaiting = true;
    isWaiting = true;
    render();
    getNewDogProfile();
  }
}

function crossBtnClick() {
  if (!dislikedIsWaiting) {
    dogProfileArray.hasBeenLiked = false;
    dogProfileArray.hasBeenSwiped = true;
    dislikedBtn.classList.add("dis-liked");
    likedBtn.classList.remove("liked");
    likedIsWaiting = true;
    dislikedIsWaiting = true;
    isWaiting = true;
    render();
    getNewDogProfile();
  }
}

function getNewDogProfile() {
  if (isWaiting) {
    setTimeout(function () {
      if (indexOfDog < dogs.length - 1) {
        indexOfDog += 1;
      } else {
        likedIsWaiting = true;
        dislikedIsWaiting = true;
        return (document.getElementById("image-dog-container").innerHTML = "Thank you!");
      }
      dogProfileArray = new Dog(dogs[indexOfDog]);
      isWaiting = false;
      dislikedIsWaiting = false;
      likedIsWaiting = false;
      likedBtn.disabled = false;
      dislikedBtn.disabled = false;
      render();
    }, 2000);
  }
}

function render() {
  document.getElementById("image-dog-container").innerHTML = dogProfileArray.getDogHtml();
}
render();
