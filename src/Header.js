import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: 'Welcome!',
          };
    }

    render() {
        return (
            <>
            <h1>{this.state.greeting}</h1>
            <h2>Here's my Odometer:</h2>
           
           </>
        )
    }
}

export default Header;
