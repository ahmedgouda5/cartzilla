import ProductsNav from "@/components/ProductsNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-24 mb- min-h-screen">
      <ProductsNav />
      <div>{children}</div>
    </div>
  );
};

export default layout;
