import Footer from "./components/Footer";
import FormContact from "./components/FormContact";
import ImageCarousel from "./components/ImageCaraousel";
import Navbar from "./components/Navbar";
import Values from "./components/Values";

const images = [
  { url: "/slides/1.jpg", alt: "WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM" },
  { url: "/slides/2.jpg", alt: "THIS IS PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY" },
];
function App() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full">
        <ImageCarousel slides={images} />
      </div>
      <Values />
      <FormContact />
      <Footer />
    </div>
  );
}

export default App;
