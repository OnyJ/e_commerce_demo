import { useSelector } from "react-redux";
import Counter from "@/components/articles/Counter";
import Welcome from "@/components/Welcome";

export default function Home() {
  const shopItem = useSelector(
    (state) => state.shopItem
  );

  console.log(shopItem);
  
  return (
    <main>
      <Welcome name="François" />
      <Counter />
      {/* <ArticlesList /> */}
    </main>
  );
}
