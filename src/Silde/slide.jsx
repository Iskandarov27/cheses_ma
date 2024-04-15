import React from 'react';
import imj from "/imges/silde.png"





const slide = () => {
    return (
       
        <div className=' container p-5 px-20 m-auto relative'>
            <div className=' relative'>
            <div className=' bg-no-repeat bg-auto w-auto h-80' style={{ backgroundImage: `url(${imj})` }}>  
                <h1 className=' text-white text-3xl absolute left-16 top-8 font-bold '>Наборы для сыроделия</h1>
                <p className=' text-base text-white absolute bottom-48 left-16' >Все что вам нужно для приготовления сыра <br /> в домашних условиях</p>
                <button class=" bg-orange-600 text-xs absolute bottom-16 t left-16 hover:bg-orange-700 text-white font-bold py-3 px-7 rounded">
                Смотреть наборы
                </button>
            </div>

           

            </div>

            
            
        </div>

        
       
    )
}

export default slide
