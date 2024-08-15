import Rating from "./Rating";
function ProductCard({ product }) {
  return (
    <div
      // ref={lastElementRef}
      className="bg-primary-bg dark:bg-primary-dark-bg text-primary-text dark:text-primary-dark-text rounded p-4 shadow-md flex flex-col gap-4"
    >
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="border border-primary-border dark:border-primary-dark-border h-60 w-full rounded"
        />
        <div className="absolute bottom-3 left-3 bg-slate-200 dark:bg-gray-700 shadow bg-opacity-50 backdrop-blur-sm p-1 rounded text-sm font-bold">
          <Rating rating={product.rating} />
        </div>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h2 className="truncate" title={product.title}>
          {product.title}
        </h2>
        <div className="text-red-500 font-bold">
          <span>$</span>
          <span>{product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
