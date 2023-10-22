import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export async function getServerSideProps(context) {
  const { req, query } = context;

  try {
    const agyry = require("../../components/exercise.json");
    const data = agyry.filter(
      (item) =>
        item.jyns === query.jyns &&
        item.agyr === query.agyry &&
        item.yas === query.Yasy
    );
    // const data = agyry.filter(item=> item.agyr === )

    return { props: { data } };
  } catch (error) {
    return { props: { data: null } };
  }
}

const Exercise = ({ data }) => {
  const [link, setLink] = useState();

  const router = useRouter();

  console.log(link);
  return (
    <div className=" w-full flex justify-center">
      <div className="mt-24 shadow-lg p-6 rounded-md w-[500px] gap-4 flex flex-col">
        <div>
          {router.query.Yasy}
          <label> {router.query.jyns} </label> masgala ucin
          <label> {router.query.agyry}</label>-da bolup biljek simptomlar
        </div>
        <div className="grid grid-cols-3">
          {data.map((agyry) => (
            <div key={agyry.id}>
              <input
                name="simptom"
                value={agyry.title}
                id={agyry.id}
                onChange={(e) => setLink(e.target.value)}
                type="radio"
              />
              <label htmlFor={agyry.id}> {agyry.title}</label>
            </div>
          ))}
        </div>
        <Link
          href={`/drugs?simptom=${link}`}
          className="rounded-md bg-blue-100 border-[1px] border-blue-600 text-blue-700 py-1 px-4 hover:bg-blue-600 hover:text-white text-center transition-all"
        >
          go ---
        </Link>
      </div>
    </div>
  );
};

export default Exercise;
