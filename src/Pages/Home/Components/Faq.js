import React, { useState } from 'react'
import './Faq.css'
import image from '../../../Assets/downarrow.jpg'

const Faq = () => {
    const dataarr = [
        {
            id: 0,
            question: "Why People use this website ? ",
            answer: "In this website peoples are two types, 1.Seller , 2.Buyer. Seller selling her products own price, Buyer Brought products low price and quality products"
        },
        {
            id: 1,
            question: "How to use this website? ",
            answer: "Open website after seeing total webiste display all sections,In this website first section have two buttons that buttons uses our requirement..."
        },
        {
            id: 2,
            question: "How to Selling products in this website ?",
            answer: "Open Website after click sell button. Open LoginForm After login Open Details Page.After fill your datails and product details automatically posted in this website"
        },
        {
            id: 3,
            question: "How to Buy products in this website ? ",
            answer: "Open Website after click Buy button. Open LoginForm After login Open Details Page.After Display products Search our area and select products"
        },
        {
            id: 4,
            question: "You want More Information ? ",
            answer: "Click Above Know More button"
        },


    ]

    const [select, setSelect] = useState(null)

    const handleSelect = (i) => {
        if (select === i) {
            return setSelect(null)
        }

        return setSelect(i)
    }
    return (
        <>
            <h1 className='faqs-head'>FAQ'S </h1>
            <section className='Faq-total-div'>
                <div className='faqs-item'>
                    {
                        dataarr.map((each, i) => {
                            return (
                                <div className='faq-wrapper' key={i} onClick={() => handleSelect(i)}>
                                    <div className='faq-questions' >
                                        <h3>{each.question}</h3>
                                        <img src={image} className={select === i ? "reverse-image" : "faq-images"} alt='faq-images' />
                                    </div>
                                    <div className={select === i ? "answers show" : "answers"}>
                                        <h3>{each.answer}</h3>

                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Faq
