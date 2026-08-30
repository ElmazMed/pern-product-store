import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";

function homePage() {
  const { products, loading, error, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);

  return <></>;
}

export default homePage;
