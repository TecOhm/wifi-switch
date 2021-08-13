import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Switch } from '@material-ui/core';
import 'firebase/firestore';
import 'firebase/auth';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },


    isOn:{
      display:"flex",
      alighItems:"center",
      color:'green',
      paddingLeft:"10px",
  
    },
    isOff:{
      display:"flex",
      alighItems:"center",
      color:'red',
      paddingLeft:"10px",
    },

  
    switchHolder:{
      display:'flex',
      alignItems:"center",
      justifyContent:'space-between',
      paddingLeft:'20px',
    },
    switchGrid:{
      alignItems:'center',

    }
  
  
  }));

const SwitchBox = ({id,value,on,off}) => {

    const classes= useStyles();

 
    
    console.log(id);
    console.log(value);

  
  
    
     
    return (
        <div className={classes.switch}>
        
        <div className={classes.switchHolder}>
          <Grid container spacing={3} className={classes.switchGrid}>
            <Grid item xs={4}>
              {value.switchName}
              </Grid>
            <Grid item xs={4}>
              {value.switchState === true ? <div className={classes.isOn}>ON</div>:<div className={classes.isOff}>OFF</div>}
              </Grid>
            <Grid item xs={4}>
              <Switch
            checked={value.switchState}
            onChange={value.switchState === true ? off : on}
            name="checkedA"
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </Grid>

          </Grid>
           
          
          
        </div>
    </div>
    )
}

export default SwitchBox
