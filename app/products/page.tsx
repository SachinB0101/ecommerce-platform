import ProductsContainer from "@/components/products/ProductsContainer";

const ProductsPage = ({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) => {
  //searchParams: A special props we have access to in a server component
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return <ProductsContainer layout={layout} search={search} />;
};
export default ProductsPage;
