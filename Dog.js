// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    return `
      <div class="dog-card">
        <img class="dog-images" src=${avatar}>
        <h2 class="title">${name}, ${age}</h2>
        <p class="bio">${bio}</p>
        ${hasBeenLiked ? this.setDogLiked() : hasBeenSwiped ? this.setDogDisliked() : ""}
      </div>
    `;
  }

  setDogLiked() {
    return `
    <div class="badge-like liked"><img src="images/badge-like.png"></img>
    `;
  }

  setDogDisliked() {
    return `
    <div class="badge-disliked dis-liked"><img src="images/badge-nope.png"></img>
    `;
  }
}

export default Dog;
