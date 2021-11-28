import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2 className="center">Hi There! 👋</h2>
        <img
          src="https://github.com/Justin-Cordero/Justin-Cordero.github.io/blob/main/images/purple_headshot.png?raw=true"
          alt="Justin"
          height="250"
          width="250"
        />
        <br />
        <p>My name is Justin Cordero. I am a Software Engineer at <a href="www.shoprunner.com">ShopRunner / FedEx Dataworks</a></p>
        <p>I am also a student at ECPI University where I am pursuing my bachelor's degree in Computer and Information Science.</p>
        <p>This is my assignment: Course Project: Single Page Application with Navigation</p>
        <br /><br /><br />
        <p>You can learn more about me and my work on my <a href="https://justincordero.tech">personal website</a></p>
      </div>
    );
  }
}
 
export default Home;