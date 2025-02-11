import Cart from "@/components/ProductGrid";
import ProductCard from "@/components/CartManager";
export default function displayCart() {
  return <div><Cart products={[]} addToCart={() => {}} 
    />
    <ProductCard products={[{
      _id: "1", name: "Sample Product", price: 100,
      description: "",
      image_url: "",
      rating: 0
    }]} />;
  </div>
  ;
}
