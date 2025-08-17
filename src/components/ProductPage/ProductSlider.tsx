import { useEffect, useState } from "react";

type Props = {
  images: string[];
};

let Timer: NodeJS.Timeout;

export default function ProductSlider({ images }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
    clearInterval(Timer);
    Timer = setInterval(nextImage, 5000);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1 >= images.length ? 0 : prev + 1));
  };

  useEffect(() => {
    Timer = setInterval(nextImage, 10000);

    return () => {
      clearInterval(Timer);
    };
  }, [images.length]);

  return (
    <div className="max-w-sm mx-auto md:m-0">
      <div className="border border-gray-300 bg-white p-14">
        <img
          src={images[currentImage]}
          alt="Imagem Principal"
          width={380}
          height={380}
          className="max-w-full"
        />
      </div>
      <div className="grid grid-cols-4 gap-6 mt-8">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`p-4 bg-white cursor-ponter border-2 ${
              index == currentImage ? "border-blue-500" : "border-gray-200"
            }`}
          >
            <img src={image} alt="" height={120} width={120} className="" />
          </div>
        ))}
      </div>
    </div>
  );
}
