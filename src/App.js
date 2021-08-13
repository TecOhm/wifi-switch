import React from 'react'

import db from './firebase';
import {useState , useEffect} from "react";
import { useStateValue } from "./StateProvider";
import { makeStyles } from '@material-ui/core/styles';

import firebase from 'firebase';
import Login from './Login';
import Home from './Home';

import './App.css';









const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  body:{
    padding:"20px 20px",
    display:'flex',
    flexDirection:'column',
    flexGrow:1,
    alignItems:"center",

  },


}));



function App() {
  
  const classes = useStyles();

  const [{ user,hideGroup}, dispatch] = useStateValue();

  return (
    <div className={classes.root}>       
      {!user ? (<Login/>) : <Home/> }
    </div>
  );
}

export default App
