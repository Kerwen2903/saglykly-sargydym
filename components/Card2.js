import { faLocation } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const Card2 = ({ item }) => {
  const [state,setState] = useState()
  useEffect(()=>{
    setState(randomNumberGenerator(item.price-25,item.price+25))
  },[])
  
  const randomNumberGenerator = (min,max)=>{
    return Math.floor(Math.random()* (max-min+1)+ min)
  }

  return (
    <div>
      <div className="shadow-lg block rounded-xl mt-10 bg-white">
        <div className="w-full h-28">
          <img src={item.src} className="object-cover w-full h-full rounded-t-xl" />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
          <p className="flex gap-1">
            <svg height="24" width="24" className="fill-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"/></svg>
            {item.location}
          </p>
          <p className="flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="fill-green-600" viewBox="0 0 16 16"> <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/> </svg>
            {item.phone}
          </p>
          <p className="flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-green-600" width="24" height="24" viewBox="0 0 640 512"><path d="M96 96C96 60.65 124.7 32 160 32H576C611.3 32 640 60.65 640 96V320C640 355.3 611.3 384 576 384H160C124.7 384 96 355.3 96 320V96zM160 320H224C224 284.7 195.3 256 160 256V320zM160 96V160C195.3 160 224 131.3 224 96H160zM576 256C540.7 256 512 284.7 512 320H576V256zM512 96C512 131.3 540.7 160 576 160V96H512zM368 128C323.8 128 288 163.8 288 208C288 252.2 323.8 288 368 288C412.2 288 448 252.2 448 208C448 163.8 412.2 128 368 128zM48 360C48 399.8 80.24 432 120 432H520C533.3 432 544 442.7 544 456C544 469.3 533.3 480 520 480H120C53.73 480 0 426.3 0 360V120C0 106.7 10.75 96 24 96C37.25 96 48 106.7 48 120V360z"/></svg>
            <span>{state} TMT</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
