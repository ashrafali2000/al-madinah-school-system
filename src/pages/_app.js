import "../styles/globals.css";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbars/Navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/loader/loader";

export default function App({ Component, pageProps }) {
  const pathName = usePathname();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  console.log("pathName-------->", pathName);
  return (
    <div
      className="    "
      style={{
        backgroundImage: "url(./main-bg.jpeg)",
      }}
    >
      {/* <SmallNavbar /> */}
      {pathName !== "/admin" ? <Navbar /> : null}
      {loading && <Loader />}
      <Component {...pageProps} />
      {pathName !== "/admin" ? <Footer /> : null}
    </div>
  );
}
