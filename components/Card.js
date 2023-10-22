import Link from "next/link";

const Card = ({ item }) => {
  return (
    <Link
      href={`drugs/drugsOpen?id=${item.id}`}
      className="border-2 border-gray-500 block rounded-xl"
    >
      <img src={item.src} className="object-cover h-40 rounded-t-xl" />
      <div className="p-3">
        <div className="font-bold text-xl">{item.drugTitle}</div>
        <div>{item.body}</div>
      </div>
    </Link>
  );
};

export default Card;
