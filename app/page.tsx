import MyCity from "./components/MyCity";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return(
<main>

<div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase">
        Weather app
      </span>
      <h1 className=" text-3xl font-extrabold uppercase mb-5">
        <span className="text-green-600 ml-2">
        Next.js 14
        </span>
      </h1>

      <SearchBar />
      <div className="flex justify-center flex-col items-center w-[1000px] ">

       <div className=" flex flex-col gap-5 items-center justify-center mt-10 w-full">
            <MyCity />
        </div>
      </div>
    </div>
</main>
  )
}
