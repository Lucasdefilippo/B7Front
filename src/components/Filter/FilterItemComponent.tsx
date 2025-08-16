import { UseQueryString } from "../../hooks/use-querystring";

type Props = {
  info: { id: string; label: string; groupId: string };
};

export default function FilterItemComponent({ info }: Props) {
  const queryString = UseQueryString();

  const toggleFilter = (groupId: string, id: string) => {
    const queryGroup = queryString.get(groupId);
    let currentFilter = queryGroup ? queryGroup.split("|") : [];

    if (currentFilter.includes(id)) {
      currentFilter = currentFilter.filter((i) => i != id);
    } else {
      currentFilter.push(id);
    }

    queryString.set(groupId, currentFilter.join("|"));
  };

  const hasFilter = (groupId: string, id: string) => {
    const currentFilter = queryString.get(groupId)?.split("|");
    return currentFilter && currentFilter.includes(id) ? true : false;
  };

  return (
    <div className="flex gap-6 items-center mt-4">
      <input
        type="checkbox"
        name=""
        id={info.id.toString()}
        className="size-6"
        onChange={() => toggleFilter(info.groupId, info.id)}
        checked={hasFilter(info.groupId, info.id)}
      />
      <label htmlFor={info.id.toString()} className="text-gray-500 text-lg">
        {info.label}
      </label>
    </div>
  );
}
