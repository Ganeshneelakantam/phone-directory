import React from "react";

const Header = function(props) {
    const headerStyle = {textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase'};
    return (
        <div style={headerStyle} className="header">
          {props.heading}
        </div>
    );
}

export default Header;
