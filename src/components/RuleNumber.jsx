import React  from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';




function RuleNumber(props) {

    

    //Add a custom color to the React Button
    const theme = createTheme({
        palette: {
          primary: {
        
            main: '#c4915b'
          },
          secondary: {
       
            main: '#11cb5f',
          },
    
          
        },
      });

    return (
        
        <div className="actionBox">
        
        <h1 className={props.animateSwift ? 'theRuleNumber' : ''}> Rule number {props.ruleNumber +1}  </h1>  
       
     
         
        <ThemeProvider theme={theme}>
        <div class="buttonBox">
        <Button color="primary" variant="outlined" size="small" inputProps={{style: {fontSize: 30, fontFamily: 'Permanent Marker'}}} onClick={props.onShow}>Show rule</Button>
        <Button color="primary" variant="outlined" size="small" inputProps={{style: {fontSize: 30, fontFamily: 'Permanent Marker'}}} onClick={props.onClick}>New rule</Button>
        </div>
        </ThemeProvider>
        
        
        </div>
    );
}


export default RuleNumber;