import { Link } from "react-router";
import type { product } from "../types/Product";
import { useState } from "react";

type Props = {
  data: product;
};

export const ProductComponent = ({ data }: Props) => {
  const [currentLiked, setCurrentLiked] = useState(data.liked);

  let link = `/product/${data.id}`;

  const toggleLiked = () => {
    return setCurrentLiked(!currentLiked);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-6 flex flex-col justify-between">
      <div className="flex justify-end " onClick={toggleLiked}>
        <div className="size-12 border border-gray-200 rounded-sm flex justify-center items-center cursor-pointer">
          {!currentLiked && (
            <img
              src="/assets/ui/heart-3-line.png"
              alt="Heart"
              height={24}
              width={24}
              className=""
            />
          )}
          {currentLiked && (
            <img
              src="/assets/ui/heart-3-fill.png"
              alt="Heart"
              height={24}
              width={24}
              className=""
            />
          )}
        </div>
      </div>
      <Link to={link}>
        <img
          src={data.img}
          alt={data.label}
          className="max-w-full max-h-48 mx-auto"
          height={200}
          width={200}
        />
      </Link>
      <div>
        <Link to={link}>
          <div className="mt-9 text-lg font-bold">{data.label}</div>
          <div className="text-blue-600 text-2xl font-bold mt-3">
            {" "}
            R$ {data.price.toFixed(2)}
          </div>
          <div className="mt-5 text-gray-400">Pagamento via PIX</div>
        </Link>
      </div>
    </div>
  );
};
