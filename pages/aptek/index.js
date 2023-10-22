import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
export async function getServerSideProps(context) {
  const { query } = context;
  let title;
  title = query.simptom;
  try {
    const agyry = require("../../components/apteks.json");
    const data = agyry.filter((item) => item.simptoms === query.simptom);
    // const data = agyry.filter(item=> item.agyr === )

    return { props: { data, title } };
  } catch (error) {
    return { props: { data: null } };
  }
}

const Exercise = ({ data, title }) => {
  console.log(data);
  return (
    <div className=" w-full flex items-center flex-col">
      <div className="text-2xl mb-16 mt-10">{title} ucin dermanlar</div>
      <div className="grid grid-cols-5 w-10/12 gap-5">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Exercise;
