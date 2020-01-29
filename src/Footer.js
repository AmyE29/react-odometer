import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            copywrite: '© 2020 Amy Evans 401d13',
          };
    }

    render() {
        return (
            <>
           <h2>That's my Odometer</h2>
           <p>{this.state.copywrite}</p>
           </>
        )
    }
}

export default Footer;