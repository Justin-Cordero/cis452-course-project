import React, { Component } from "react";

const customStyle = {
  card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    width: "30%",
    backgroundColor: "#3089b3",
    color: "#fff",
    padding: ".7rem",
    margin: ".7rem"
  },
  img: {
    borderRadius: "5px 5px 0 0",
    height: "150px",
    width: "150px"
  },
  container: {
    padding: "2px 16px"
  },
  a: {
    color: "#fff"
  }
}
 
class Hobbies extends Component {
  render() {
    return (
      <div>
        <h2>Hobbies 🙂</h2>
        <div className="flex">
          <div style={customStyle.card}>
            <a href="https://en.wikipedia.org/wiki/Martial_arts" style={customStyle.a}>
              <img 
                src="https://media.wsimag.com/attachments/87596e7982e898bc8d81f0f77ed04eb379fceaa6/store/fill/1090/613/5ba07e2cb812eb4b651a764f16493d0ac9b23f79731a180e344a77167954/The-Brazilian-Jiu-Jitsu.jpg"
                alt="Martial Arts"
                style={customStyle.img} 
              />
              <div style={customStyle.container}>
                <h3>Martial Arts</h3>
              </div>
            </a>
          </div>  
          <div style={customStyle.card}>
            <a href="https://en.wikipedia.org/wiki/Coding" style={customStyle.a}>
              <img 
                src="https://static.vecteezy.com/system/resources/previews/002/099/443/non_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-vector.jpg"
                alt="Code"
                style={customStyle.img} 
              />
              <div style={customStyle.container}>
                <h3>Coding</h3>
              </div>
            </a>
          </div>  
          <div style={customStyle.card}>
            <a href="https://en.wikipedia.org/wiki/Reading" style={customStyle.a}>
              <img 
                src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED"
                alt="Books"
                style={customStyle.img} 
              />
              <div style={customStyle.container}>
                <h3>Reading</h3>
              </div>
            </a>
          </div>  
          <div style={customStyle.card}>
            <a href="https://en.wikipedia.org/wiki/Running" style={customStyle.a}>
              <img 
                src="https://silentbeacon.com/wp-content/uploads/2019/05/Panic-Button-for-Runners-1280x640.jpg"
                alt="Runner"
                style={customStyle.img} 
              />
              <div style={customStyle.container}>
                <h3>Running</h3>
              </div>
            </a>  
          </div>
        </div>
      </div>
    );
  }
}
 
export default Hobbies;