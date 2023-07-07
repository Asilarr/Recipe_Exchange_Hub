import { useRef, useState } from "react";
import "../../Styles/Home.css";
import React  from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Home: React.FC=() =>{
    
    const navigate=useNavigate();
    const imgRef=useRef<HTMLImageElement|null>(null);
    const handleFocusClick=()=>{
      
      if(imgRef.current){
        
        console.log(imgRef.current);
        
      }
    }
    const handleImageClick=()=>{
      
      navigate("/profile");
    }
      
  
  return (
    <div id="master">
      <h1>WELCOME! LETS GET COOKIN'!</h1>
      <div id="who">
        <br />
        <br />
        <p id="this">
          <br />
          This is my first attempt at making a website so please be gentle with
          the criticism
        </p>
        <input id="obi-wan" type="search" placeholder="Search for recipes" />
        <button id="search">
          <img id="sea" src="search.png" alt="search" />
        </button>
      </div>
      <div id="fin" >
        <img id="prof" src="profo.jpg" alt="profile" onClick={handleImageClick}/>
        <img id="rec" src="rec.jpg" alt="your recipes" />
        <img id="out" src="logout.jpg" alt="log out" />
      </div>
      <div id="stu1">
        <div id="com">
          <p>Recipe1</p>
        </div>
        <div id="com">
          <p>Recipe2</p>
        </div>
        <div id="com">
          <p>Recipe3</p>
        </div>
        <div id="com">
          <p>Recipe4</p>
        </div>
        <div id="com">
          <p>Recipe5</p>
        </div>
      </div>
      <div id="stu2">
        <h2>People you might want to follow</h2>
        <img id="cool" src="huh.jfif" alt="followers"  />
        <img id="calm" src="profile1.jpg" alt="followers" />
        <img id="peace" src="prof.jpg" alt="followers" />
        <button id="follow">Share with friends and family</button>
        
      </div>
    </div>
  );
}

export default Home;
