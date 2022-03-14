import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';





function CreateItem(props) {

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#c4915b'
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },

      
    },
  });
    
    const [item, setItem]= useState({
        name: ""
    });
    

    function handleChange(e) {
      
    
        //Destructuring objects requires curly braces
        //e.target gives the whole line <input .... />
        const {name,value}= e.target;
        console.log(name);
        
        setItem(prevItem=> {
        //Only modify the content of the field we've selected
            return {
            ...prevItem,
            [name]:value

        };
    });
}

function submitItem(event) {
    event.preventDefault()
    // This function should check the rule to see where to add it 
     props.onAdd(item); 
    //Reset the input when submitting
    setItem({
      name: ""
    });
  }
  

function empty(event) {

  props.onEmpty();
}

//Prevents from refreshing on the enter key

  return (
    <div className="formBox">
     
      <form onSubmit= {submitItem}>
      <h2 className="bounceLetters"> I want to bring</h2>
        <TextField onChange={handleChange} name="name" value={item.name} variant="standard" inputProps={{style: {fontSize: 30, fontFamily: 'Permanent Marker'}, maxLength: 18}} />
        <ThemeProvider theme={theme}>
        <IconButton aria-label="add" color="primary" onClick={submitItem}>
        <AddIcon/>
        </IconButton>
        <IconButton aria-label="delete" color="primary" onClick={empty}>
        <DeleteIcon/>
        </IconButton>
        </ThemeProvider>
      </form>
    </div>
  );
}

export default CreateItem;
