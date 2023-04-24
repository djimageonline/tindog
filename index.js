// Remember to import the data and Dog class!
import dogs from "./data.js";
import Dog from "./Dog.js";

// have to render a new dog profile on start
// dog profile has to grab the html needed from the Dog Characteristcs for the Dog class

let dogProfile = new Dog();

function render() {
  document.getElementById("image-dog-container").innerHTML = dogProfile.getDogHtml();
}
render();
