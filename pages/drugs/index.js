import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
export async function getServerSideProps(context) {
  const { req, query } = context;
  let title;
  title = query.disease;
  const data1 = require("../../components/drugs.json");

  try {
    const agyry = data1?.filter((el)=> el.disease_id.includes(+query.disease_id)&&el.age.includes(query.age))

    // const data = agyry.filter((item) => item.simptoms === query.simptom);
    // const data = agyry.filter(item=> item.agyr === )

    return { props: { data:agyry, title } };
  } catch (error) {
    return { props: { data: null } };
  }
}

const index = ({ data, title }) => {
  return (
    <div className=" w-full flex items-center flex-col min-h-screen">
      <div className="text-4xl mb-16 mt-10 text-gray-900 text-center">{title} üçin dermanlar</div>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-10/12 gap-5">
        {data?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default index;
