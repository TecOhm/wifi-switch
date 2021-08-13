import React from 'react';
import db from './firebase';
import Logo from './techohm.svg'
import {useState , useEffect} from "react";
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase';
import SwitchBox from './SwitchBox';
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import CreateSwitch from "./CreateSwitch";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
        
    },
    createSwitch:{
        paddingTop:'50px',
    },


    switchBoard:{
      display:'flex',
      flexGrow:1,
      flexDirection:'column',
      alignItems:'center',
    },
    switchContainer:{
      alignItems:'center',

      padding:'30px',
    }
  
  
  }));
function Home() {
  const classes = useStyles();

    const [{user,hideGroup},dispatch] = useStateValue();

    const [switches,setSwitches] = useState([]);
    
    const handleLogout = () => {
        auth.signOut();
        dispatch({
            type: actionTypes.SET_USER,
            user: "",
        });
        
        localStorage.clear();
      };

      const handleOn = (clickedSwitch) => {
        console.log(clickedSwitch);

        let userRef = db.collection("switches").doc(clickedSwitch);
        userRef
            .set({
             switchState:true
            },{merge:true})
            .then(()=>{console.log(userRef)});


    }
    const handleOff = (clickedSwitch) => {
        console.log(clickedSwitch);

        let userRef = db.collection("switches").doc(clickedSwitch);
        userRef
            .set({
             switchState:false
            },{merge:true})
            .then(()=>{console.log(userRef)});


    }

    useEffect(()=>{
        db.collection("switches").orderBy("timestamp","desc").onSnapshot((snapshot) => 
            setSwitches(snapshot.docs.map((doc) => ({
                id:doc.id, data:doc.data()
            })
            ))
            
           
        );
        console.log(switches);
    },[]);
    console.log(switches);
    
    

    return (
        <div className="root">
           <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography align='center' variant="h6" className={classes.title}>
            TecOhm 
          </Typography>
          
          <Button onClick={handleLogout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
           <div className={classes.switchBoard}>
            <div className={classes.createSwitch}>
                <CreateSwitch/>
            </div>
            
            <div className={classes.switchContainer}>
            {switches.map((sw)=> 
                <SwitchBox 
                    key={sw.id}  
                    on={()=>handleOn(sw.id)}
                    off={()=>handleOff(sw.id)}
                    id={sw.id}                 
                    value={sw.data}
                />
            )}
            </div>
            </div>
        </div>
    );
}

export default Home;
