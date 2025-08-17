import type { productComplete } from "../../types/Product";

type Props = {
  info: productComplete;
};

export default function ProductDetails({ info }: Props) {
  const addToCart = async () => {
    // TODO COLOCAR PARA O CARRINHO DE COMPRAS
  };

  return (
    <div className="w-full">
      <div className="text-xs text-gray-400 mb-2">COD: {info.id}</div>
      <div className="font-bold text-3xl mb-6">{info.label}</div>
      <div className="text-gray-400">
        De <s>R${info.price.toFixed(2)}</s> por:
      </div>
      <div className="font-bold text-4xl text-blue-600 mb-2">
        R$ {info.pricePix.toFixed(2)}
      </div>
      <div className="text-sm text-gray-400 mb-6">No PIX</div>
      <div className="flex gap-4 w-full">
        <button
          onClick={addToCart}
          className="max-w-xs min-w-48 bg-blue-600 md:py-4 px-4 md:px-8 rounded-sm border-0 text-white hover:opacity-90 cursor-pointer"
        >
          Adicionar à sacola
        </button>
        <div className="flex justify-center item-center border-gray-400 border-1 rounded-sm cursor-pointer">
          <img
            src={
              info.liked
                ? "/assets/ui/heart-3-fill.png"
                : "/assets/ui/heart-3-line.png"
            }
            alt=""
            height={24}
            width={24}
            className="size-6 m-4 "
          />
        </div>
        <div className="flex justify-center item-center border-gray-400 border-1 rounded-sm cursor-pointer">
          <img
            src="/assets/ui/share-line.png"
            alt=""
            height={24}
            width={24}
            className="size-6 m-4"
          />
        </div>
      </div>
    </div>
  );
}
