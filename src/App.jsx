import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Donate from "./sections/Donate";
import Signup from "./sections/Signup";
import Team from "./sections/Team";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Donate />
      <Signup />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
