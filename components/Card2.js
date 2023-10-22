import Link from "next/link";

const Card2 = ({ item }) => {
  return (
    <Link href={`/aptek/apteks_in?id=${item.id}`}>
      <div className="border-2 border-gray-500 block rounded-xl mt-10 ">
        <img src={item.src} className="object-cover h-40 rounded-t-xl" />
        <div className="p-3">
          <div className="font-bold text-xl">{item.title}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card2;
