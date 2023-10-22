import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useState } from "react";

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
    { id: 1, title: "uly yasly" },
    { id: 2, title: "kici yasly" },
  ];
  const jyns = [
    { id: 1, title: "gyz" },
    { id: 2, title: "oglan" },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="shadow-lg p-4 w-[500px] flex flex-col justify-center gap-3 rounded-md">
        <div className="text-center ">Saglykly Sargydym</div>
        <div>
          Ozunuze gawat gelyan zatlary saylap almagynyzy sizden hayys edyan
        </div>
        <div className="grid grid-cols-3 gap-2">
          <select
            className="border-[1px] border-blue-400 rounded-sm text-blue-700 bg-blue-100 p-1 "
            onChange={(e) => setYasRe(e.target.value)}
          >
            <option disabled selected value="">
              Yasy
            </option>
            {yaslar.map((yas, index) => (
              <option key={yas.id}>{yas.title}</option>
            ))}
          </select>
          <select
            className="border-[1px] border-blue-400 rounded-sm text-blue-700 bg-blue-100 p-1 "
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
            className="border-[1px] border-blue-400 rounded-sm text-blue-700 bg-blue-100 p-1 "
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
            className="mt-4 rounded-md bg-blue-100 border-[1px] border-blue-600 text-blue-700 py-1 px-3 hover:bg-blue-600 hover:text-white text-center transition-all"
            href={`/exercise?agyry=${agyryRe}&jyns=${jynsRe}&Yasy=${yasRe}`}
          >
            Gozle --
          </Link>
        )}
      </div>
    </div>
  );
};

export default Index;
