import React from 'react';

const Header = (props) => {
  return (<h1 className={props.id}>{props.title}</h1>);
};

export default Header;
