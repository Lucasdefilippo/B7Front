import { useState } from "react";

type Props = {
  description: string;
};

export default function ProductDescription({ description }: Props) {
  const [opened, setOpened] = useState(true);

  const toggleClickDescrition = () => {
    setOpened(!opened);
  };
  return (
    <div className="bg-white w-full border border-gray-400 rounded-xl mt-20 p-7">
      <div className="flex justify-between items-center">
        <div className="md:text-2xl">Descrição do Produto</div>
        <div
          className="p-4 border border-gray-200 rounded-sm flex justify-center items-center cursor-pointer md:hover:bg-gray-100"
          onClick={() => toggleClickDescrition()}
        >
          <img
            src="/assets/ui/arrow-left-s-line.png"
            alt=""
            height={24}
            width={24}
            className={`transition-all  ${!opened ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      <div
        className={`transition-all ${
          opened ? "max-h-96 border-t border-gray-200 pt-12 mt-12" : "h-0"
        }`}
      >
        {opened && description}
      </div>
    </div>
  );
}
