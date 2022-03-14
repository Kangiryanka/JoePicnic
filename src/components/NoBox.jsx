import React from "react";
import Item from "./Item.jsx"
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';


function NoBox(props) {
    
    
  return (
    <div className="forbiddenItems">
        
        <h2><DoNotTouchIcon/> Forbidden Items </h2> 
        <ul className= "forbiddenList" >
            {props.forbiddenItems.map( (forbiddenItem,index) => (
                <Item key={index} text={forbiddenItem.name}/>
            ))}
        </ul>
      
            
      
    </div>
  );
}

export default NoBox;
