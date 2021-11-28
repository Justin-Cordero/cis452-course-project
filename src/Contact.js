import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Let's Chat ✉️</h2>
        <p>Email me at: <a href="mailto:juscor1477@students.ecpi.edu">juscor1477@students.ecpi.edu</a>
        </p>
        <img
          src="https://media.istockphoto.com/photos/open-mailbox-with-letters-on-rural-backgound-picture-id1285800846?b=1&k=20&m=1285800846&s=170667a&w=0&h=XTNubX7I91KkXbAc4KCVa89AzEOhlbaCgt-MIIOzGhs="
          style={{margin: "1rem"}}
        />
      </div>
    );
  }
}
 
export default Contact;