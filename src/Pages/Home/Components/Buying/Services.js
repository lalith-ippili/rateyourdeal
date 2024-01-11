import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import './Services.css'
import Hero from "../Hero";

const Services = () => {
    const iamgesarr = [
        {
            id: 1,
            img1: "https://cdn.pixabay.com/photo/2018/06/29/15/18/rice-3506194_1280.jpg"
        },
        {
            id: 2,
            img1: "https://cdn.pixabay.com/photo/2016/05/16/22/47/onions-1397037_1280.jpg"
        },
        {
            id: 3,
            img1: "https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_1280.jpg"
        },
        {
            id: 4,
            img1: "https://cdn.pixabay.com/photo/2016/09/03/20/48/bananas-1642706_1280.jpg"
        },
        {
            id: 5,
            img1: "https://cdn.pixabay.com/photo/2017/12/23/04/47/leaf-3034701_1280.jpg"
        },
        {
            id: 6,
            img1: "https://cdn.pixabay.com/photo/2018/01/29/10/26/star-apple-3115755_1280.jpg"
        },
        {
            id: 7,
            img1: "https://cdn.pixabay.com/photo/2017/09/23/18/54/cayenne-peppers-2779828_1280.jpg"
        },
        {
            id: 8,
            img1: "https://cdn.pixabay.com/photo/2018/05/29/23/18/potato-3440360_1280.jpg"
        },
        {
            id: 9,
            img1: "https://cdn.pixabay.com/photo/2019/11/24/17/08/cotton-4649804_1280.jpg"
        },
        {
            id: 10,
            img1: "https://cdn.pixabay.com/photo/2016/09/03/20/48/bananas-1642706_1280.jpg"
        },
        {
            id: 11,
            img1: "https://cdn.pixabay.com/photo/2020/01/12/18/19/pulses-4760706_1280.jpg"
        },
        {
            id: 12,
            img1: "https://cdn.pixabay.com/photo/2016/02/13/10/35/tulips-1197602_1280.jpg"
        }
    ]


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const handleclick=()=>{
       
    }
    return (
        <>
            <h1 className='Services-head'>Services</h1>
            <section className='Services-total-div'>

                <Slider {...settings}>
                    {iamgesarr.map((each) => {
                        return (
                            <div key={each.id}  onClick={() => window.location.replace("/#Home")}>
                                <img src={each.img1} className="services-images" />
                            </div>
                        )

                    })}
                </Slider>

            </section>
        </>
    )
}

export default Services
