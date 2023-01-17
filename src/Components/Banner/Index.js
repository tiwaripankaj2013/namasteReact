import React,{useState} from 'react';

export const Banner = ({crausalData,staticPath}) =>{
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = crausalData.map((crausal)=><div className=" box-border px-4 md:w-4/12 sm:w-6/12 w-full" key={crausal.data.bannerId} >
    <img src={staticPath+crausal.data.creativeId} />
</div>)
    function nextSlide() {
        if (currentSlide === slides.length - 1) {
          setCurrentSlide(0);
        } else {
          setCurrentSlide(currentSlide + 1);
        }
      }
      function prevSlide() {
        if (currentSlide === 0) {
          setCurrentSlide(slides.length - 1);
        } else {
          setCurrentSlide(currentSlide - 1);
        }
      }
      return(crausalData.length>0)?(
          <div className="flex flex-nowrap bg-black px-6 py-2">
            <button key='prev'  onClick={prevSlide}>Prev</button>
           {slides[currentSlide]}
            <button key='next'  onClick={nextSlide}>Next</button>
        </div>
    ):''
}