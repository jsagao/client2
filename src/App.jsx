import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
// import Test from "./components/Test";
import BookNowTransition from "./components/BookNowTransition";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <BookNowTransition />
      <Services />
      {/* <Test /> */}
      <Contactus />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
