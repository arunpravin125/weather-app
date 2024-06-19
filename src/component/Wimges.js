import React from "react";
import one from "../Img/clouds.jpg"
import two from "../Img/clearsky.jpg";
import three from "../Img/few clouds.jpg";
import seven from "../Img/overcast clouds.jpg";
import four from "../Img/scatteredclouds.jpg";
import five from "../Img/broken clouds.jpg";
import six from "../Img/mist.jpg";

import { useState } from "react";
function Wimges(props) {
  let [sky, setsky] = useState("");
  let [clear, setclear] = useState("");
  let img=props.img
  let weatherdata = [
    "clouds",
    "clear sky",
    "few clouds",
    "scattered clouds",
    "broken clouds",
    "mist",
    "overcast clouds"
  ];
  let imgindex=[one,two,three,four,five,six,seven]
  // var weatherImg=([one,two,three,four])
  let description = props.description;
  let compareindex=description

  var findIndex=""

  weatherdata.forEach(function (data) {
    if(data===compareindex){
      findIndex=data
      console.log(`check data and description ${data} same as ${compareindex}`)
    
    

    }
    

     

  
  });
  let valueAccess=weatherdata.indexOf(findIndex)
  console.log(`:) weather data index no :${valueAccess}`)

  // let imgindex=[one,two,three,four]
  let storeImg=imgindex[valueAccess]



  return (
    <img className="h-10% w-50%" src={storeImg} alt={findIndex}></img>
    // <div>
    //     <div>
    //     <img src={storeImg} alt="good thimgs"></img>
    //     </div>
    //     {/* <div>
    //     <img src={one} alt="good thimgs"></img>
    //     </div> */}
    // </div>
  );
}

export default Wimges;
