import React from 'react';
import web from "../src/logo.svg";
import {NavLink} from "react-router-dom";
import Common from "./Common";


const Home=()=>{
  return (
    <div>
     <Common 
     name="Grow your business with" 
     imgsrc={web} 
     visit="/service" 
     btname="Get started"
     />
    </div>
  );
};

export default Home;