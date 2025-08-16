import { useState } from "react";
import FilterItemComponent from "./FilterItemComponent";

type Props = {
  id: string;
  name: string;
};

export default function FilterComponent({ id, name }: Props) {
  const [opened, setOpened] = useState(true);

  return (
    <div className="mb-8">
      <div className="pb-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex-1 text-xl ">{name}</div>
        <div
          className="size-8 flex justify-center items-center cursor-pointer"
          onClick={() => setOpened(!opened)}
        >
          <img
            src="/assets/ui/arrow-left-s-line.png"
            alt="Arrow filter menu"
            height={24}
            width={24}
            className={`${opened ? "" : "rotate-180"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-y-hidden ${
          opened ? "max-h-96" : "max-h-0"
        } transition-all`}
      >
        <FilterItemComponent info={{ id: "1", label: "Item 1", groupId: id }} />
        <FilterItemComponent info={{ id: "2", label: "Item 2", groupId: id }} />
        <FilterItemComponent info={{ id: "3", label: "Item 3", groupId: id }} />
      </div>
    </div>
  );
}
