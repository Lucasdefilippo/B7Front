export type product = {
  id: number;
  img: string;
  label: string;
  price: number;
  liked: boolean;
};

export type productComplete = {
  id: number;
  label: string;
  images: string[];
  price: number;
  pricePix: number;
  liked: boolean;
  description: string;
};
