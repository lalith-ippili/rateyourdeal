import React, { useState } from 'react'
import './CallToActions.css'

import Model from './Model'

const CallToActions = () => {
    const [Model1, setModel] = useState(false)
    const HandleClick = () => {
        setModel(!Model1)
    }

    return (
        <>
            <section className='Call-to-action'>
                <h2 className='Call-to-action-head'>Avaliable Products</h2>
                <button onClick={HandleClick} className='Call-to-action-button'>Know More</button>
            </section>
            {
                Model1 && <Model HandleClick={HandleClick} />
            }
        </>
    )
}

export default CallToActions
