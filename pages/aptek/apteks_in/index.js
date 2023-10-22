import Card2 from "../../../components/Card2";

export async function getServerSideProps(context) {
  const { query } = context;
  const data = require("../../../components/apteks.json");
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
      <div className="gap-10 flex flex-col w-9/12 m-auto">
        <img src={data1[0].src} className=" w-full object-cover rounded-lg" />
        <div>
          <div className="text-2xl mb-3 mt-10 font-bold">
            {data1[0].drugTitle}
          </div>
          <div className="text-md ">{data1[0].body}</div>
        </div>
        <a
          className="rounded-md bg-blue-500 w-min px-10 py-2 text-white"
          href={data1[0].google_direction}
        >
          Map
        </a>
      </div>
    </div>
  );
};

export default index;
