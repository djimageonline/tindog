import dogs from "./data.js";
import Dog from "./Dog.js";

const likedBtn = document.getElementById("heart-btn");
const dislikedBtn = document.getElementById("cross-btn");
likedBtn.addEventListener("click", heartBtnClick);
dislikedBtn.addEventListener("click", crossBtnClick);
let indexOfDog = 0;

let dogProfileArray = new Dog(dogs[indexOfDog]);
let isWaiting = false;

function heartBtnClick() {
  dogProfileArray.hasBeenLiked = true;
  dogProfileArray.hasBeenSwiped = false;
  likedBtn.classList.add("liked");
  dislikedBtn.classList.remove("dis-liked");
  render();
  getNewDogProfile();
}

function crossBtnClick() {
  dogProfileArray.hasBeenLiked = false;
  dogProfileArray.hasBeenSwiped = true;
  dislikedBtn.classList.add("dis-liked");
  likedBtn.classList.remove("liked");
  render();
  getNewDogProfile();
}

function getNewDogProfile() {
  setTimeout(function () {
    console.log(indexOfDog);
    if (indexOfDog < dogs.length) {
      indexOfDog += 1;
    }
    console.log(indexOfDog);
    dogProfileArray = new Dog(dogs[indexOfDog]);
    render();
  }, 3000);
}

function render() {
  document.getElementById("image-dog-container").innerHTML = dogProfileArray.getDogHtml();
}
render();
