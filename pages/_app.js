import "../styles/globals.css";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }) {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });
  return (
    <>
      <AnimatedCursor
        color="247, 108, 108"
        trailingSpeed={10}
        clickables={[
          "a",
          ".icon",
          "Link",
          "li",
          ".projectsLink",
          ".personalImage",
          ".group",
        ]}
        innerSize={20}
        innerScale={0.1}
        outerSize={10}
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
