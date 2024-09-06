import React from "react";
function Home()
{
    return(
        <div className="w-full h-[578px] top-[80px] absolute " >
        <div className="">
          <img src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="Not found" className="h-60 absolute top-10 left-[130px]" />
          <img src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="Not found" className="h-52 absolute bottom-16 left-[560px]" />
          <h1 className="h-52 absolute top-16 font-bold text-black right-32">Download Now
          </h1>
          <button  className="w-[120px] h-[40px] border-2 border-orange-700 bg-orange-700 rounded-lg active:bg-orange-500 absolute top-40 right-72"> Download</button>
        </div>
     </div>
    )
}

export default Home