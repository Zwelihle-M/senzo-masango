import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <header></header>

          <main></main>

          <footer></footer>
        </div>
      )}
    </>
  );
}
