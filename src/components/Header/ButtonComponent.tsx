type Props = {
  data: {
    src: string;
    alt: string;
    selected?: boolean;
    srcSelected?: string;
  };
};

export default function ButtonHeaderComponent({ data }: Props) {
  return (
    <div
      className={`size-12 border-gray-200 rounded-sm border flex justify-center items-center ${
        data.selected ? "bg-blue-600" : "hover:bg-gray-100"
      }`}
    >
      <img
        src={data.selected ? data.srcSelected : data.src}
        alt={data.alt}
        width={24}
        height={24}
        className="size-6"
      />
    </div>
  );
}
