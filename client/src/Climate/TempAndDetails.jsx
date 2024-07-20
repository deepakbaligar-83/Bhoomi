import {FaThermometerEmpty}  from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";

import {FiWind} from "react-icons/fi";
import {GiSunrise,GiSunset} from "react-icons/gi";
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from "react-icons/md"

const TempAndDetails = ({weather :{details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,},
units, }) => {
    const verticalDetails=[
     {
        id:1,
        Icon: FaThermometerEmpty,
        title:"Reel Feel",
        value:`${feels_like.toFixed()}°`,
     },
     {
        id:2,
        Icon: BiSolidDropletHalf,
        title:"Humidity",
        value:`${feels_like.toFixed()}%`,
     },
     {
        id:3,
        Icon: FiWind,
        title:"Wind",
        value:`${speed.toFixed()} ${units === 'metric' ? 'km/h' : 'm/s'}`,
     }
    ];

      const horizontalDetails =[
        {
           id:1,
           Icon: GiSunrise,
           title:"Sunrise",
           value: sunrise,
        },
        {
           id:2,
           Icon: GiSunset,
           title:"Sunset",
           value:sunset,
        },
        {
           id:3,
           Icon: MdKeyboardArrowUp,
           title:"High",
           value:`${temp_max.toFixed()}°`,
        },
        {
            id:4,
            Icon: MdKeyboardArrowDown,
            title:"Low",
            value:`${temp_min.toFixed()}°`,
        },
       ];


  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>{details}</p>
        </div>
        
        <div className="flex flex-row items-center justify-between py-3">
            <img src="http://openweathermap.org/img/wn/01d@2x.png"
             alt="weather icon"
             className="w-20"
            />
            <p className="text-white text-5xl">{`${temp.toFixed()}°`}</p>
            <div className="flex flex-col space-y-3 items-start">

                 {
                    verticalDetails.map(({id,Icon,title,value}) => (
                        <div key={id} className="text-white flex font-light text-sm items-center justify-center">
                        <Icon size={18} className="text-white mr-1"/>
                     {`${title}:`}  <span className="text-white font-medium ml-1">{value}</span>
                    </div>
                    

                    ))
                 }
                
            </div>
        </div>

         <div className="flex flex-row items-center justify-center space-x-10
          text-sm py-3">
             {
                horizontalDetails.map(({id,Icon,title,value}) => (
                    <div key={id} className="text-white flex font-light text-sm items-center justify-center">
                    <Icon size={30} />
                    <p className="text-white font-light ml-1">
                 {`${title}:`}  <span className="text-white font-medium ml-1">{value}</span>
                 </p>
                </div>
                ))
              }
         </div>
    </div>
  )
}

export default TempAndDetails;