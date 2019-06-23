import React from "react";
import "./style.css";

// function ArtCard(props) {
//   return (
//     <div className="card" onClick={() => props.imageClick(props.id)}>
//       <div className="img-container">
//         <img alt={props.name || ''} src={props.image || ''} />
//       </div>
 
//     </div>
//   );
// }

// export default ArtCard;

const ArtCard = props => (
  <div className="card" onClick={() => props.imageClick(props.id)}>
    <div className="img-container">
      <img alt={props.name || ''} src={props.image || ''}  />
    </div>
  </div>
);

export default ArtCard;