import "../styles/globals.css";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbars/Navbar";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const pathName = usePathname();
  console.log("pathName-------->", pathName);
  return (
    <>
      {/* <SmallNavbar /> */}
      {pathName !== "/admin/dashboard" ? <Navbar /> : null}
      <Component {...pageProps} />
      {pathName !== "/admin/dashboard" ? <Footer /> : null}
    </>
  );
}
