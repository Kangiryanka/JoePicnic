import React, {useState} from "react";
import Header from "./Header.jsx"
import CreateItem from "./CreateItem.jsx"
import YesBox from "./YesBox.jsx"
import NoBox from "./NoBox.jsx"
import RuleNumber from "./RuleNumber.jsx"
import RuleDescription from "./RuleDescription.jsx"
import {expressions, descriptions} from "../regex.js"






function App() {

  const [allowedItems, setAllowedItems]= useState([]);
  const [forbiddenItems, setForbiddenItems]= useState([]);
  const [ruleNumber, setRuleNumber]= useState(Math.floor(expressions.length)-1);
  const [ruleDescription, setRuleDescription]= useState("");
  const [grow,setGrow]= useState(false)
  const [swift, setSwift] = useState(false)
  
  

//Item component only has one property called "name"
function addItem(newItem) {

  const itemName= newItem.name
  if (itemName.length===0) {
    alert("You can't leave this field blank!")
    return;
  } 
  
  
  if (/[`!@#$%^&*()_+\-[\]{};':"\\|,.<>?~]|\d/.test(itemName)) {
    alert("You have a special character or number in your input")
    return;
  }
  if (expressions[ruleNumber].test(itemName)) {
  
     setAllowedItems(prevItems => {return  [...prevItems, newItem]})
  }

  else { 
   
    setForbiddenItems( prevItems => {return [...prevItems, newItem]})
  }
}

function changeRule() {
  setSwift(true)
  setGrow(false)
  setRuleNumber(Math.floor(Math.random()*expressions.length))
  setRuleDescription("")
  setAllowedItems([])
  setForbiddenItems([])
  }

function showRule() {
    setSwift(false)
    setGrow(true)
    setRuleDescription(descriptions[ruleNumber])
}


function emptyItems() {
  
  
  setForbiddenItems([]);
}



  
  return (
    <div id="mainContainer">
      <Header/>
      
      <RuleNumber ruleNumber={ruleNumber} onClick={changeRule} onShow={showRule} animateSwift={swift}  />
        
      
      <div class="itemBox">
      <YesBox allowedItems={allowedItems}/>
      <RuleDescription  animateGrow={grow} ruleDescription={ruleDescription}/>
      <NoBox forbiddenItems= {forbiddenItems}/>
      </div>
      <CreateItem onAdd={addItem} onEmpty={emptyItems}/> 
      
      
    
      
    </div>
  );
}

export default App;