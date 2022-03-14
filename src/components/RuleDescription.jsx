import React from "react";



function RuleDescription(props) {

  

    return (
      
        <div className= "descriptionBox">
        
        {/* Use of ternary operator to set a class  */}
        <h2 className={props.animateGrow ? 'theDescription' : ''}> {props.ruleDescription} </h2>
        
       
        </div>
    );
}


export default RuleDescription;