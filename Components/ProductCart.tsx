import Image from "next/image";

const ProductCart = (props: any) => {
  const { productImage, title } = props;
  return (
    <div>
      <div className="cart  bg-gray-100 h-[190px] w-[170px] rounded flex flex-col items-center justify-center hover:shadow-xl border transition-all hover:-mt-1">
        <Image src={productImage} alt={title} width={70} />
        <p className="mt-4">{title}</p>
      </div>
    </div>
  );
};

export default ProductCart;
