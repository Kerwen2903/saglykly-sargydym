import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export async function getServerSideProps(context) {
  const { req, query } = context;
  try {
    const agyry = require("../../components/disease.json");
    const data = agyry.filter(
      (item) =>
        item.symptom_id.includes(+query.symptom_id)
    );
    // const data = agyry.filter(item=> item.agyr === )

    return { props: { data:data } };
  } catch (error) {
    return { props: { data: null } };
  }
}

const Exercise = ({ data }) => {
  const [link, setLink] = useState(null);

  const router = useRouter();

  return (
    <div className=" w-full min-h-screen flex justify-center items-center t-1/2">
      <div className="mb-12 shadow-lg p-6 rounded-md w-[500px] gap-4 flex flex-col text-center text-lg bg-white">
        <div className="font-semibold text-2xl">
          {router.query.symptom.charAt(0).toUpperCase() + router.query.symptom.slice(1)}
          <label> üçin keseller</label>
        </div>
        <div className="flex flex-col text-left text-md font-medium">
          {data?.map((agyry) => (
            <div key={agyry?.id} className="flex items-center gap-1 cursor-pointer">
              <input
                name="simptom"
                value={agyry?.disease}
                id={agyry?.id}
                onChange={(e) => setLink(e.target.value)}
                type="radio"
                className="cursor-pointer"
              />
              <span></span>
              <label className="text-xl font-medium cursor-pointer" htmlFor={agyry?.id}> {agyry?.disease}</label>
            </div>
          ))}
        </div>
        {link? <>
          <p className="text-left text-medium"><span className="font-bold">Hasiýeti:</span> {data.filter((el)=> el.disease === link)[0]?.symptom}</p>
          <p className="text-left text-base text-red-600">Eger sizdede şeýle häsiýetler ýüze çykan bolsa Indiki düwmesine basyň!</p>
          <Link
          href={`/drugs?disease=${link}&disease_id=${data.filter((el)=> el.disease === link)[0]?.id}&age=${router.query.age}&gender=${router.query.gender}&symptom_id=${router.query.symptom_id}&symptom=${router.query.symptom}`}
          className="mt-4 rounded-md bg-white border-[1px] border-green-600 text-green-600 py-2 px-3 hover:bg-green-600 hover:text-white text-center transition-all text-xl"
        >
          Indiki
        </Link>
        </>:null}
        
      </div>
    </div>
  );
};
export default Exercise;
