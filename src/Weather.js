import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Wimges from './component/Wimges'



function Weather() {
    let [city,setcity]=useState("")
    let [weather,setweather]=useState("")
    let [Temperature,setTemperature]=useState("")
    let [description,setdescription]=useState("")
    let [reports,setreports]=useState("")
    let [success,setsuccess]=useState("")
    let [failed,setfailed]=useState("")
    let [hide,sethide]=useState("I can give you a Weather Report about your city !")
    // /////////////////////////////////////////////////
    ///warnings//
   let [img,setimg]=useState("")
   let [addplace,setaddplace]=useState("")
    var [type,settype]=useState([,
      "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
    "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte",
    "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington",
    "Boston", "El Paso", "Nashville", "Detroit", "Oklahoma City",
    "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore",
    "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento",
    "Mesa", "Kansas City", "Atlanta", "Long Beach", "Omaha",
    "Raleigh", "Colorado Springs", "Miami", "Virginia Beach", "Oakland",
    "Minneapolis", "Tulsa", "Arlington", "New Orleans", "Wichita",
    "Cleveland", "Tampa", "Bakersfield", "Aurora", "Anaheim",
    "Santa Ana", "Corpus Christi", "Riverside", "Lexington", "St. Louis",
    "Stockton", "Pittsburgh", "Saint Paul", "Cincinnati", "Anchorage",
    "Henderson", "Greensboro", "Plano", "Newark", "Lincoln",
    "Orlando", "Irvine", "Toledo", "Jersey City", "Chula Vista",
    "Durham", "Fort Wayne", "St. Petersburg", "Laredo", "Buffalo",
    "Madison", "Lubbock", "Chandler", "Scottsdale", "Reno",
    "Glendale", "Gilbert", "Winston-Salem", "North Las Vegas", "Norfolk",
    "Chesapeake", "Garland", "Irving", "Hialeah", "Fremont",
    "Boise", "Richmond", "Baton Rouge", "Spokane", "Des Moines",
      "United States", "Canada", "Mexico", "Brazil", "Argentina",
      "United Kingdom", "France", "Germany", "Italy", "Spain",
      "Russia", "China", "India", "Japan", "South Korea",
      "Australia", "New Zealand", "South Africa", "Egypt", "Nigeria",
      "Kenya", "Saudi Arabia", "Turkey", "Iran", "Israel",
      "Indonesia", "Thailand", "Vietnam", "Philippines", "Malaysia",
      "Singapore", "Bangladesh", "Pakistan", "Afghanistan", "Iraq",
      "Syria", "Jordan", "Lebanon", "United Arab Emirates", "Qatar",
      "Kuwait", "Bahrain", "Oman", "Yemen", "Sri Lanka",
      "Nepal", "Bhutan", "Maldives", "Mauritius", "Seychelles",
      "Madagascar", "Mozambique", "Zimbabwe", "Zambia", "Angola",
      "Tanzania", "Uganda", "Ghana", "Ivory Coast", "Senegal",
      "Morocco", "Algeria", "Tunisia", "Libya", "Sudan",
      "Ethiopia", "Somalia", "Democratic Republic of the Congo", "Cameroon", "Gabon",
      "Botswana", "Namibia", "Lesotho", "Swaziland", "Malawi",
      "Rwanda", "Burundi", "South Sudan", "Central African Republic", "Chad",
      "Niger", "Mali", "Burkina Faso", "Benin", "Togo",
      "Gambia", "Sierra Leone", "Liberia", "Guinea", "Guinea-Bissau",
      "Equatorial Guinea", "Cape Verde", "Comoros", "Djibouti", "Eritrea",
      "Mauritania", "Western Sahara", "Sao Tome and Principe", "Tonga", "Fiji",
      "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad",
      "Chennai", "Kolkata", "Surat", "Pune", "Jaipur",
      "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
      "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara",
      "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad",
      "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi",
      "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai",
      "Allahabad", "Howrah", "Ranchi", "Gwalior", "Jabalpur",
      "Coimbatore", "Vijayawada", "Jodhpur", "Madurai", "Raipur",
      "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubballi-Dharwad",
      "Bareilly", "Mysore", "Tiruchirappalli", "Gurgaon", "Aligarh",
      "Jalandhar", "Bhubaneswar", "Salem", "Mira-Bhayandar", "Thiruvananthapuram",
      "Bhiwandi", "Saharanpur", "Guntur", "Amravati", "Bikaner",
      "Noida", "Jamshedpur", "Bhilai", "Cuttack", "Firozabad",
      "Kochi", "Nellore", "Bhavnagar", "Dehradun", "Durgapur",
      "Asansol", "Rourkela", "Nanded", "Kolhapur", "Ajmer",
      "Akola", "Gulbarga", "Jamnagar", "Ujjain", "Loni",
      "Siliguri", "Jhansi", "Ulhasnagar", "Nellore", "Jammu",
      "Sangli-Miraj & Kupwad", "Mangalore", "Erode", "Belgaum", "Ambattur",
      "Tirunelveli", "Malegaon", "Gaya", "Jalgaon", "Udaipur","Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal",  "Ariyalur",
    "Chengalpattu",
    "Chennai", "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thiruvallur",
    "Thiruvarur",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupattur",
    "Tiruppur",
    "Tiruvannamalai",
    "Vellore",
    "Viluppuram",
    "Virudhunagar"

    ])
    console.log({type})
 
    let [warntext,setwarntext]=useState("")
    let [empty,setempy]=useState("")
    let [correct,setcorrect]=useState("")

    function handleChange(eve){
        setcity(eve.target.value)
        sethide("I can give you a Weather Report about your city !")

        setweather("")
        setTemperature("")
        setdescription("")
        setempy("")
        setwarntext("")
        setreports("")
        setcorrect("")
        setsuccess("")
        setimg("")
        
    }
    /////////////////////////////////////// add place
    function handleAddplace(){
       settype([...type,city])
      
     
    }

    function handleEnter(){
        var weatherData=axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8157e79500b1cc5b15068531256ea187 `)
        weatherData.then(function(success){
          console.log(success.data)
          console.log(success.data.main.temp)
        console.log(success.data.weather[0].main)
        console.log(success.data.weather[0].description)
        setweather(success.data.weather[0].main)
      
       
        setTemperature(success.data.main.temp)
        setdescription(success.data.weather[0].description)
        setreports(true)

        
       
        
}).catch(function(error){
  // setreports(false)
  // if(reports===false){
  //   setfailed("Your Weather Report Failed ")
  // }
  console.log("Loding Failed ")
}) 

if(city){
  
var cityfound=false
type.forEach(function(data){
  if(data===city){
    setcorrect(`${city}`)
    console.log(`entered correct - ${city}`)
    setsuccess("Your Weather Report Success :)")
    setaddplace(false)
    sethide("")
     cityfound=true
  }

 
})
if(cityfound===false){
 
  setsuccess("Your Weather Report Failed :(")
  setwarntext("please enter correct city name or Add place")
  console.log(`Not correct - ${city}`)
  setaddplace(true)
}
setimg(true)
}

if(city){
  setempy("")

}
else{
  setempy("Please enter the City Name or State Name")
}

setcity("")
console.log(`weatherReort-${weather}`)

    }
  return (
    <div className="bg-slate-200 p-10 ">

      <div className="my-6 md:my-0">
        <div className=" p-5 border gap-2  rounded-md  bg-amber-200 md:flex flex-row">
          <div>
          <h1 className="grid">Weather Report:</h1><h1><p className="text-blue-700 font-bold grid">{correct}</p></h1>
       
       <p>{hide}</p>
       <h1 className="text-red-800">{empty}</h1>
       <input type="text" value={city} onChange={handleChange} className="p-2 mt-2 border rounded-md" placeholder='Enter your city name'></input><br/>
       <button onClick={handleEnter} className="p-2   border rounded-md bg-indigo-500 mt-3 text-white md:p-2">Get Report</button>
        <div className="mt-2">
           <p className="font-bold"><b> Weather: </b>{weather}</p>
           <p className="font-bold"><b>Temperature: </b>{Temperature}</p>
           <p className="font-bold"><b>Description: </b>{description}</p>
         
          

           {weather?<h1 className="text-blue-800">{success}</h1>:
           <div>
            <h1 className="text-pink-800">{failed}</h1>
          
            
            </div>}
           <h1 className="text-red-600">{warntext}</h1>
           {
            addplace?<button onClick={handleAddplace} className="bg-green-400 p-1 border rounded-md">Add place</button>:""
           }
           
        </div>


          </div>
        
          <div className="h-10% w-50%" >
          <Wimges img={img} description={description}></Wimges>
         

         </div>
      
      
      
        </div>
        

      </div>
       
      
    </div>
  )
}

export default Weather


        {/* <div className=" p-5 border rounded-md bg-lime-300">
        <h1 className="grid">Weather Report:</h1><h1><p className="text-blue-700 grid">{correct}</p></h1>
       
        <p>{hide}</p>
        <h1 className="text-red-800">{empty}</h1>
        <input type="text" value={city} onChange={handleChange} className="p-2 mt-2 border rounded-md" placeholder='Enter your city name'></input><br/>
        <button onClick={handleEnter} className="p-3 border rounded-md bg-black mt-3 text-white">Get Report</button>
         <div className="mt-2">
            <p className="font-bold"><b> Weather: </b>{weather}</p>
            <p className="font-bold"><b>Temperature: </b>{Temperature}</p>
            <p className="font-bold"><b>Description: </b>{description}</p>
          
           

            {weather?<h1 className="text-blue-800">{success}</h1>:<h1 className="text-pink-800">{failed}</h1>}
            <h1 className="text-red-600">{warntext}</h1>
            
            
         </div>

        
      
      
      
        </div>
        <div>
          <Wimges img={img} description={description}></Wimges>
         

         </div> */}