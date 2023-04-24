// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <div class="dog-card">
      <img class="dog-images" src="images/dog-teddy.jpg">
      <h2 class="title">Teddy, 30</h2>
      <p class="bio">How you doing?</p>
    
    </div>
    `;
  }
}

export default Dog;
