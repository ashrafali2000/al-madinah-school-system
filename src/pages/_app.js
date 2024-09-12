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
    // <div className="relative pt-10 pb-5 mt-20">
    //   <div
    //     style={{
    //       position: "absolute",
    //       top: 0,
    //       left: 0,
    //       width: "100%",
    //       height: "100%",
    //       backgroundImage: "url(./main-bg.jpeg)",
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //       filter: "blur(4px)", // Applies blur effect to the background image
    //       zIndex: -2, // Keeps the background behind the content
    //     }}
    //   ></div>
    //   <div className="relative isolate px-4 overflow-hidden">
    //     {pathName !== "/admin" ? <Navbar /> : null}
    //     {loading && <Loader />}
    //     <Component {...pageProps} />
    //     {pathName !== "/admin" ? <Footer /> : null}
    //   </div>
    // </div>
    <div className="relative   overflow-hidden">
      {/* Blurred Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0, // Ensure full coverage of the background
          width: "100%",
          height: "100%",
          backgroundImage: "url(./main-bg.jpeg)",
          // backgroundSize: "cover", // Makes the background cover the entire div
          // backgroundPosition: "center", // Centers the background image
          filter: "blur(8px)", // Applies blur effect to the background image
          zIndex: -2, // Keeps the background behind the content
        }}
      />

      {/* Content */}
      <div className="relative isolate px-4 overflow-hidden">
        {pathName !== "/admin" ? <Navbar /> : null}
        {loading && <Loader />}
        <Component {...pageProps} />
        {pathName !== "/admin" ? <Footer /> : null}
      </div>
    </div>
  );
}
