import Link from "next/link";
import { useRouter } from "next/router";
const Card = ({ item }) => {
  const router = useRouter();
  
  return (
    <div
      
      className="shadow flex rounded bg-white overflow-hidden bg-gray-200"
    >
      <div className="w-2/5 h-full ">
        <img src={item.src} className="object-cover w-full h-full" />
      </div>
      <div className="p-3 w-3/5 flex flex-col">
        <div className="font-bold text-xl text-gray-800">{item.drug}</div>
        <div className="text-sm font-medium mb-2">{item.body}</div>
        <Link href={`drugs/drugsOpen?id=${item.id}&disease=${router.query.disease}`} className="text-center mt-auto w-full border-2 border-green-600 p-1 text-base font-semibold text-green-600 rounded cursor-pointer hover:bg-green-600 hover:text-white transition-all">Maglumaty</Link>
      </div>
    </div>
  );
};

export default Card;
