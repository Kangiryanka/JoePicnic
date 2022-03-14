import React from "react";
import Item from "./Item.jsx"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';


function YesBox(props) {


  return (
    <div className="allowedItems"> 
        <h2> <CheckOutlinedIcon/> Allowed Items</h2>
       
        <ul className="allowedList">
            {props.allowedItems.map( (allowedItem,index) => (
             

                <Item key={index} text={allowedItem.name}/>

           
            ))}
       
        </ul>
          
      
      
    </div>
  );
}

export default YesBox;
