import React from "react";
import one from "../Img/clouds.jpg"
import two from "../Img/clearsky.jpg";
import three from "../Img/few clouds.jpg";
import seven from "../Img/overcast clouds.jpg";
import four from "../Img/scatteredclouds.jpg";
import five from "../Img/broken clouds.jpg";
import six from "../Img/mist.jpg";
import eight from "../Img/moderate rain.jpg";
import nine from "../Img/thunderstorm.jpg";
import ten from "../Img/light rain.jpg"
import eleven from "../Img/light intensity drizzle.jpg"


import { useState } from "react";
function Wimges(props) {
  let [sky, setsky] = useState("");
  // let [nodata, setnodata] = useState();
  let img=props.img
  let weatherdata = [
    "clouds",
    "clear sky",
    "few clouds",
    "scattered clouds",
    "broken clouds",
    "mist",
    "overcast clouds",
    "moderate rain",
    "thunderstorm","light rain","light intensity drizzle"
  ];
  let imgindex=[one,two,three,four,five,six,seven,eight,nine,ten,eleven]
  // var weatherImg=([one,two,three,four])
  let description = props.description;
  let compareindex=description

  // if(compareindex){
  //   setnodata()

  // }
  // else{
  //   setnodata(true)
  // }

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
    <div>
     
<img className="h-10% w-50%" src={storeImg} alt={findIndex}></img>
    </div>
    // <img className="h-10% w-50%" src={storeImg} alt={findIndex}></img>
   
  );
}

export default Wimges;
