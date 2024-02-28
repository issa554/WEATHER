
interface cityProps{
    name:string
}

function City({city}:{city : cityProps}) {
  return (
    <div
      className="w-full  flex items-center justify-between bg-gray-50 py-3 px-20 rounded-2xl  border-green-600 border-4"
    >

      <span className="text-center font-bold uppercase ">
        {city.name}
      </span>
    </div>
  )
}

export default City