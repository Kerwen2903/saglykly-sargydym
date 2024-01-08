import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export async function getServerSideProps(context) {
  const { req, query } = context;

  try {
    const agyry = require("../../components/exercise.json");
    const data = agyry.filter(
      (item) => item.pain_id.toLowerCase() === query.ache.toLowerCase()
    );
    // const data = agyry.filter(item=> item.agyr === )

    return { props: { data: data } };
  } catch (error) {
    return { props: { data: null } };
  }
}

const Exercise = ({ data }) => {
  const [link, setLink] = useState();
  const [currentId, setCurrentId] = useState();

  const router = useRouter();

  console.log(data, router.query.agyry);
  return (
    <div className=" w-full min-h-screen flex justify-center items-center t-1/2">
      <div className="mb-12 shadow-lg p-6 rounded-md w-[500px] gap-4 flex flex-col text-center text-lg bg-white text-gray-800">
        <div className="font-semibold text-2xl ">
          {router.query.gender.charAt(0).toUpperCase() +
            router.query.gender.slice(1)}{" "}
          masgala
          <label> {router.query.age.toLowerCase()} </label>
          <label> {router.query.ache.toLowerCase()}</label>-da bolup biljek
          simptomlar
        </div>
        <div className="grid grid-cols-2 gap-5 text-left text-md font-medium">
          {data?.map((agyry) => (
            <label
              onClick={() => setCurrentId(agyry.id)}
              htmlFor={agyry?.id}
              key={agyry?.id}
              className={
                !(currentId === agyry.id)
                  ? "p-2 flex items-center gap-1 cursor-pointer"
                  : "p-2 rounded-md flex items-center gap-1 cursor-pointer border border-blue-700"
              }
            >
              <input
                name="simptom"
                value={agyry?.symptom}
                id={agyry?.id}
                onChange={(e) => setLink(e.target.value)}
                type="radio"
                className="cursor-pointer   "
              />
              {/* <span></span> */}
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 rounded-full w-16 h-16">
                  <img src="" alt="" />
                </div>
                <label
                  className={"text-xl text-center font-medium cursor-pointer"}
                  onClick={() => setCurrentId(agyry.id)}
                  htmlFor={agyry?.id}
                >
                  {" "}
                  {agyry?.symptom}
                </label>
              </div>
            </label>
          ))}
        </div>
        {link ? (
          <Link
            href={`/disease?symptom=${link}&age=${router.query.age}&ache=${
              router.query.ache
            }&gender=${router.query.gender}&symptom_id=${
              data.filter((el) => el.symptom === link)[0]?.id
            }`}
            className="mt-4 rounded-md bg-white border-[1px] border-blue-600 text-blue-600 py-2 px-3 hover:bg-blue-600 hover:text-white text-center transition-all text-xl"
          >
            Indiki
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Exercise;
