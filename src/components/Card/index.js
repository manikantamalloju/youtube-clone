import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Card(props) {
  const {cardDetails} = props
  console.log(cardDetails);
  const {thumbnailUrl,videoId,title,channelId} = cardDetails
// https://www.youtube.com/watch?v=[vedio_id]_channel=[channel_id]

  const videoPath = `https://www.youtube.com/watch?v=${videoId}_channel=${channelId}`;
  // const videoPath = "https://youtu.be/BC9s_Zof_Xk"

  return (
    // <div  >
    //   <h1>hello</h1>
    // </div>
    
     <li className="card" >
              <a  href= {videoPath} target= "_blank">
                 <img src={ thumbnailUrl} alt =  {videoId} className="card-image" />
              </a>
                
              <p >{title}</p>
       </li>


  ) 
}

export default Card;
