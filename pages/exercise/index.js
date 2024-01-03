import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export async function getServerSideProps(context) {
  const { req, query } = context;

  try {
    const agyry = require("../../components/exercise.json");
    const data = agyry.filter(
      (item) =>
        item.pain_id.toLowerCase() === query.ache.toLowerCase()
    );
    // const data = agyry.filter(item=> item.agyr === )

    return { props: { data:data } };
  } catch (error) {
    return { props: { data: null } };
  }
}

const Exercise = ({ data }) => {
  const [link, setLink] = useState();

  const router = useRouter();

  console.log(data,router.query.agyry);
  return (
    <div className=" w-full min-h-screen flex justify-center items-center t-1/2">
      <div className="mb-12 shadow-lg p-6 rounded-md w-[500px] gap-4 flex flex-col text-center text-lg bg-white text-gray-800">
        <div className="font-semibold text-2xl ">
          {router.query.gender.charAt(0).toUpperCase() + router.query.gender.slice(1)} masgala
          <label> {router.query.age.toLowerCase()} </label>
          <label> {router.query.ache.toLowerCase()}</label>-da bolup biljek simptomlar
        </div>
        <div className="flex flex-col text-left text-md font-medium">
          {data?.map((agyry) => (
            <div key={agyry?.id} className="flex items-center gap-1 cursor-pointer">
              <input
                name="simptom"
                value={agyry?.symptom}
                id={agyry?.id}
                onChange={(e) => setLink(e.target.value)}
                type="radio"
                className="cursor-pointer"
              />
              <span></span>
              <label className="text-xl font-medium cursor-pointer" htmlFor={agyry?.id}> {agyry?.symptom}</label>
            </div>
          ))}
        </div>
        {link? <Link
          href={`/disease?symptom=${link}&age=${router.query.age}&ache=${router.query.ache}&gender=${router.query.gender}&symptom_id=${data.filter((el)=> el.symptom === link)[0]?.id}`}
          className="mt-4 rounded-md bg-white border-[1px] border-green-600 text-green-600 py-2 px-3 hover:bg-green-600 hover:text-white text-center transition-all text-xl"
        >
          Indiki
        </Link>:null}
      </div>
    </div>
  );
};

export default Exercise;
