import React from "react";
function Footer(){
    return(
        <div className="w-full h-[200px] border-2 border-gray-400 bg-white  flex absolute bottom-0 flex-row ">
        <div className="w-1/2  h-full flex justify-center items-center">
          <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png " className="h-16 " alt="" />
        </div>
        <div className="w-1/2 b h-full flex ">
          <div className="w-[500px] relative left-[120px] h-full  flex flex-row  ">
            <div className="w-1/3  flex flex-col h-full m-1 items-center">
              <div className="text-black mt-3 font-bold">Resources</div>
              <div className="text-black mt-4">Home</div>
              <div className="text-black mt-4">About</div>
              <div className="text-black mt-4">Contact</div>
            </div>
            
            <div className="w-1/3  flex flex-col h-full m-1 items-center">
              <div className="text-black mt-3 font-bold">Follow Us</div>
              <div className="text-black mt-4">Instagram</div>
              <div className="text-black mt-4">Facebook</div>
              <div className="text-black mt-4">Github</div>
            </div>
            
            <div className="w-1/3 flex flex-col h-full m-1 items-center">
              <div className="text-black mt-3 font-bold">Legal</div>
              <div className="text-black mt-4">Privacy & Policy</div>
              <div className="text-black mt-4">Terms & Conditions</div>
            </div>
            
          </div>
        </div>
  
      </div>
    )
}

export default Footer