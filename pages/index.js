import BlobAnimations from "@/components/BlobAnimations";
import NavigationBar from "@/components/NavigationBar";
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
        <div className="h-screen overflow-x-hidden scrollbar-hide">
          <header>
            <NavigationBar />
          </header>
          <div>
            <BlobAnimations />
          </div>

          <main></main>

          <footer></footer>
        </div>
      )}
    </>
  );
}
