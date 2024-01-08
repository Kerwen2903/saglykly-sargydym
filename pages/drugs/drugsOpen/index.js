import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import Card2 from "../../../components/Card2";
import data from "../../";
export async function getServerSideProps(context) {
  const { req, query } = context;
  const data = require("../../../components/drugs.json");
  const data2 = require("../../../components/stores.json");
  try {
    const data1 = data?.filter((item) => item.id == query.id)[0];
    return { props: { data1,data2 } };
  } catch (error) {
    return { props: {} };
  }
}

const index = ({ data1,data2 }) => {
  return (
    <div className="">
      <div className="gap-10 flex w-9/12 m-auto mt-10">
        <div className="w-1/3 h-50">
          <img
            src={data1?.src}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="w-3/5 text-gray-800 mt-10">
          <div className="text-3xl mb-3 font-bold">
            {data1?.drug}
          </div>
          <div className="text-md ">{data1.body}</div>
          <div className="mt-2 text-lg"><span className="font-bold text-xl">Ortaça bahasy:</span>{data1.price} TMT</div>
          <div className="flex items-center gap-2 mt-5 border-2 bg-green-600 border-green-600 px-10 py-2 text-lg font-semibold cursor-pointer text-white w-max rounded hover:bg-white hover:text-green-600 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg>
            Satyn al
          </div>
        </div>
        
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-9/12 gap-5 m-auto">
        {data2.map((item, index) => {
          item.price = data1.price
          return <Card2 item={item} key={index} />
        })}
      </div>
    </div>
  );
};

export default index;
