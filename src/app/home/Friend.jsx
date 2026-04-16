import Image from "next/image";
import Link from "next/link";
import { LengthOfTotal } from "../layout";

const Friend = ({ friend }) => {
  const { name, picture, days_since_contact, tags, status } = friend;

  return (
    <Link href={`/home/${friend.id}`} className="bg-white rounded-3xl shadow-sm p-8 w-72 text-center border border-gray-50 flex flex-col items-center">
      <div className="relative w-28 h-28 mb-4">
        <Image
          src={picture}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold text-slate-800">
        {name}
      </h2>

      <p className="text-base text-slate-400 mt-1">
        {days_since_contact}d ago
      </p>

      <div className="mt-3">
        <span className="px-4 py-1 text-xs font-bold bg-green-100 text-green-600 rounded-full uppercase">
          {tags[0]}
        </span>
      </div>

      <div className="mt-5 w-full">
        <div className="mt-5 w-full">
  {status === "active" && (
    <button className="w-full py-2.5 text-sm font-bold text-white bg-green-500 rounded-full">
      Connected
    </button>
  )}

  {status === "overdue" && (
    <button className="w-full py-2.5 text-sm font-bold text-white bg-red-500 rounded-full">
      Overdue
    </button>
  )}

  {status === "almost-due" && (
    <button className="w-full py-2.5 text-sm font-bold text-white bg-orange-400 rounded-full">
      Almost Due
    </button>
  )}
</div>
      </div>
    </Link>
  );
};

export default Friend;