import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useState } from "react";
// import { Select } from '@mantine/core';

export async function getServerSideProps(context) {
  const { req, query } = context;
  let title;
  const data1 = require("../components/pain.json");

  try {
    const agyry = data1;

    const data = agyry.filter((item) => item.simptoms === query.simptom);
    // const data = agyry.filter(item=> item.agyr === )

    return { props: { data } };
  } catch (error) {
    return { props: { data: null } };
  }
}

const Index = ({ data }) => {
  const [agyryRe, setAgyryRe] = useState();
  const [yasRe, setYasRe] = useState();
  const [jynsRe, setJynsRe] = useState();

  const yaslar = [
    { id: 1, title: "Çagalar üçin" },
    { id: 2, title: "Ýetginjekler üçin" },
    { id: 3, title: "Uly adamlar üçin" },
  ];
  const jyns = [
    { id: 1, title: "Gyz" },
    { id: 2, title: "Oglan" },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center items-center t-1/2">
      <div className="shadow-xl p-4 w-[500px] flex flex-col justify-center gap-3 rounded-md mb-12 bg-white text-gray-800">
        <div className="flex justify-center"><img className="w-24 h-24" src="/ibuprofen.jpg" alt="" /></div>
        <div className="text-center text-3xl font-semibold">Saglyk Sargydym</div>
        <div className="text-center text-lg">
          Ozunuze gabat gelyan zatlary saylap almagynyzy sizden hayys edyan
        </div>
        <div className="grid grid-cols-3 gap-2">
        {/* <Select
          label="Your favorite library"
          placeholder="Pick value"
          data={yaslar.map((el)=>el.title)}
        /> */}
          <select
            className="border-[1px]  rounded-[15%] text-blue-700 bg-blue-100 p-1 "
            onChange={(e) => setYasRe(e.target.value)}
          >
            <option disabled selected value="">
              Yasy
            </option>
            {yaslar.map((yas, index) => (
              <option key={yas.id} >{yas.title}</option>
            ))}
          </select>
          <select
            className="border-[1px]  rounded-[15%] text-blue-700 bg-blue-100 p-1 "
            onChange={(e) => setAgyryRe(e.target.value)}
          >
            <option disabled selected value="">
              Agyry
            </option>

            {data.map((agyry, index) => (
              <option key={agyry.id}>{agyry.title}</option>
            ))}
          </select>

          <select
            className="border-[1px]  rounded-[15%] text-blue-700 bg-blue-100 p-1 "
            onChange={(e) => setJynsRe(e.target.value)}
          >
            <option disabled selected value="">
              Jyns
            </option>
            {jyns.map((jyns) => (
              <option key={jyns.id}>{jyns.title}</option>
            ))}
          </select>
        </div>
        {agyryRe && jynsRe && yasRe && (
          <Link
            className="mt-4 rounded-md bg-white border-[1px] border-blue-600 text-blue-600 py-2 px-3 hover:bg-blue-600 hover:text-white text-center transition-all text-xl"
            href={`/exercise?ache=${agyryRe}&gender=${jynsRe}&age=${yasRe}`}
          >
            Gozle
          </Link>
        )}
      </div>
    </div>
  );
};

export default Index;
