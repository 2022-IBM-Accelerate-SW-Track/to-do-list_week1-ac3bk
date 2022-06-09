import React, { Component } from 'react';
import profilePicture from '../assets/IMG-0965.jpg';
import "./About.css";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
           <div class="split left">
             <div className="centered">
               <img 
                 className="profile_image"
                 src={profilePicture}
                 alt="profile picture"
                 ></img>
             </div>
           </div>
           <div className="split right">
             <div className="centered">
               <div className="name_title">Woodshy Jeanbaptiste</div>
               <div className="brief_description">
               My name is woodshy, i am a CET major at cuny City College of Technology. i am 19 years old. i like to play basketball, listen to music and explore outdoors. 
              i want to learn software engineering so that i can play around with it and eventualy create something fun and exciting.
               </div>
             </div>
           </div>
         </div> 
      </div>
    )
  }
}