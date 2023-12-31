import { useEffect, useState } from 'react'
import "./Slider.scss"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { AiOutlineArrowRight } from "react-icons/ai"
import { sliderData } from './Slider-data'




const Slider = () => {
    const [currentSlide, setcurrentSlide] = useState(0);
    const sliderLength = sliderData.length;

    const autoScroll = true
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setcurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1)
    };
    const prevSlide = () => {
        setcurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1)

    };

    useEffect(() => {
        if (autoScroll) {
            const auto = () => {
                slideInterval = setInterval(nextSlide, intervalTime)
            };
            auto();
        }
        return (() => {
            clearInterval(slideInterval)
        })
    }, [currentSlide, slideInterval, autoScroll])

    return (
        <div className='slider'>
            <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
            <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />

            {sliderData.map((slide, index) => {
                const { image, heading, desc } = slide
                return (
                    <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
                        {index === currentSlide && (
                            <>
                                <img src={image} alt="slide" />
                                <div className='content'>
                                    <h2>{heading}</h2>
                                    <p>{desc}</p>
                                    <hr />
                                    <a href='/login' className='--btn --btn-primary'>Shop Now</a>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Slider