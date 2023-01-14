import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface SlidesProps {
  url: string;
  alt: string;
}
export default function ImageCarousel({ slides }: { slides: SlidesProps[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="h-[300px] lg:h-[700px] relative">
      <div className="absolute top-[50%] right-6 text-white cursor-pointer z-10" onClick={goToNext}>
        <AiOutlineArrowRight size={30} />
      </div>

      <div className="absolute top-[50%] text-white cursor-pointer z-10 left-6" onClick={goToPrevious}>
        <AiOutlineArrowLeft size={30} />
      </div>

      <div className="bg-black/60 p-4 absolute left-3 bottom-3 lg:left-14 lg:bottom-20 text-white font-bold lg:font-extrabold text-lg lg:text-2xl lg:max-w-xl">{slides[currentIndex].alt}</div>

      <div className="w-full h-full" style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundImage: `url(${slides[currentIndex].url})` }}></div>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3">
        {slides.map((slide, index) => (
          <div key={index} className={`h-3 w-3 ${currentIndex === index ? "bg-white" : ""}  rounded-full border border-white cursor-pointer`} onClick={() => goToSlide(index)}></div>
        ))}
      </div>
    </div>
  );
}
