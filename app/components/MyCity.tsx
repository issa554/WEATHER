import Link from "next/link"
import City from "./City"

const city=[
   {
     name:"Jerusalem",
   },
   {
     name:"Gaza",
   },
   {
     name:"Ramallah",
   },
   {
     name:"Meca",
   },
 ]
const MyCity = () => {
  return (
    <div className="w-1/3">
                {city.map((city) => (
            <div className="w-full my-2" key={city.name}>
              <Link href={"/"+city.name}>
              <City city={city} />
              </Link>
            </div>
          ))}
    </div>
  )
}

export default MyCity