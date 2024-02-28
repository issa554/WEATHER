import Image from "next/image";
import Link from "next/link";
import { FC } from "react"

function kelvinToCelsius(kelvin: number): number {
  return Math.floor(kelvin - 273.15);
}
async function getData({name} : {name : string}) {
  const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=5c0df1570193de98d2da5b872e6dbec3`,{ next: { revalidate: 900 } })
 
  return res.json()
}
interface cityPageDeProps{
  params:{
    name:string
  }
}
const page : FC<cityPageDeProps> =async  ({params}) => {

  const data = await getData({name : params.name})
  return (
    <div>
        {data.base ? <div className=" w-1/2 bg-slate-50 mx-auto my-20 rounded drop-shadow-lg" >
          <h1 className="text-2xl uppercase p-2 text-black font-bold border-gray-200  mx-2 border-b-2">
            {data.name}
          </h1>
          <div className="border-b-2 border-gray-300 m-2 flex justify-between">
            <div className="mt-9">

            <span className="text-4xl font-bold">
              {kelvinToCelsius(data.main.temp)}
            </span>
            <span className="px-2 ">
                            ℃
            </span>
            <br />
            {data.weather[0].description}
            </div>
            <div className="bg-blue-300 rounded-full m-2">
              <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon" width={120} height={120}/>
             
            </div>

          </div>
          <div className="border-b-2 border-gray-400 m-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 ">
          <div className="text-black font-bold  bg-slate-50 mx-auto my-3 md:my-20  rounded-2xl drop-shadow-lg text-center p-4" >
          pressure:<br />{data.main.pressure}
          </div>
          <div className="text-black font-bold  bg-slate-50 mx-auto my-3 md:my-20  rounded-2xl drop-shadow-lg text-center p-4" >
          humidity:<br />{data.main.humidity}
          </div>
          <div className="text-black font-bold  bg-slate-50 mx-auto my-3 md:my-20  rounded-2xl drop-shadow-lg text-center p-4" >
          sea level:<br />{data.main.sea_level}
          </div>


          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 ">
          <div className="text-black font-bold  bg-slate-50 mx-auto my-3 md:my-20 rounded-2xl drop-shadow-lg text-center p-4" >
          feels like:<br />{kelvinToCelsius(data.main.feels_like)}
          </div>
          <div className="text-black font-bold  bg-slate-50 mx-auto my-3 md:my-20  rounded-2xl drop-shadow-lg text-center p-4" >
          min temp:<br />{kelvinToCelsius(data.main.temp_min)}
          </div>
          <div className="text-black font-bold  bg-slate-50 mx-auto my-3 md:my-20  rounded-2xl drop-shadow-lg text-center p-4" >
          max temp:<br />{kelvinToCelsius(data.main.temp_max)}
          </div>



          </div>
          <div className="flex items-center justify-center py-3">
          <Link href="/" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Back
          </Link>

        </div>


        </div> : <div className="flex flex-col w-1/2 bg-slate-50 mx-auto my-20 rounded drop-shadow-lg h-[300px] md:h-[400px]  items-center justify-center " >
          <div>

          <h1 className="font-bold text-black text-2xl px-3 text-center">
            You Enter inValid city name
          </h1>
          </div>

          <div className="flex items-center justify-center py-3">
          <Link href="/" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Back
          </Link>

        </div>
          </div>}

    </div>
  )
}

export default page