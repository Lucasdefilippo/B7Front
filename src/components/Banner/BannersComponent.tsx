import { Link } from "react-router";
import type { Banner } from "../../types/Banner";
import { useEffect, useState } from "react";

type Props = {
  list: Banner[];
};

let bannerTimer: NodeJS.Timeout;

export default function BannersComopnent({ list }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1 >= list.length ? 0 : prev + 1));
  };

  useEffect(() => {
    bannerTimer = setInterval(nextImage, 5000);

    return () => {
      clearInterval(bannerTimer);
    };
  }, [list.length]);

  const HandleBannerClick = (index: number) => {
    setCurrentImage(index);

    clearInterval(bannerTimer);
    bannerTimer = setInterval(nextImage, 5000);
  };

  return (
    <div>
      <div className="relative aspect-[3/1]">
        {list.map((banner, index) => (
          <Link
            to={banner.link}
            key={index}
            className="absolute inset-0 transition-all"
            style={{ opacity: currentImage === index ? 1 : 0 }}
          >
            <img
              src={banner.img}
              alt=""
              width={1400}
              height={400}
              className="rounded-sm"
            />
          </Link>
        ))}
      </div>
      <div className="flex mt-2 md:mt-4 justify-center gap-2 md:gap-4">
        {list.map((banner, index) => (
          <div
            key={index}
            className="size-2 md:size-4 flex bg-blue-600 rounded-full cursor-pointer"
            style={{ opacity: currentImage === index ? 1 : 0.3 }}
            onClick={() => HandleBannerClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
