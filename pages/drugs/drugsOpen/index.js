import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import Card2 from "../../../components/Card2";
import data from "../../";
export async function getServerSideProps(context) {
  const { req, query } = context;
  const data = require("../../../components/data.json");
  try {
    const data1 = data.filter((item) => item.id == query.id);
    return { props: { data1 } };
  } catch (error) {
    return { props: {} };
  }
}

const index = ({ data1 }) => {
  console.log(data1[0].apteks);
  return (
    <div className="mt-20">
      <div className="gap-10 flex w-9/12 m-auto">
        <img
          src={data1[0].src}
          className="h-[500px] w-[250px] object-cover rounded-lg"
        />
        <div>
          <div className="text-2xl mb-3 mt-10 font-bold">
            {data1[0].drugTitle}
          </div>
          <div className="text-md ">{data1[0].body}</div>
          <div className=" mb-16 mt-10 text-md">Price:{data1[0].price}</div>
        </div>
      </div>
      <div className="grid grid-cols-5 w-9/12 gap-5 m-auto">
        {data1[0].apteks.map((item, index) => (
          <Card2 item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default index;
