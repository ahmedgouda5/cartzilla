import ProductsNav from "@/components/ProductsNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-24 min-h-screen">
      <ProductsNav />
      <div>{children}</div>
    </div>
  );
};

export default layout;
