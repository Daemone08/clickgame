import React from "react";

const Image = props => (

  <img {...props} style={{height: "200px", margin: "20px"}} className="img-thumbnail" alt={props.id} src={props.src} />

);

export default Image;
