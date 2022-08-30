import React from 'react'

const Hero = (props) => {
  return (
    <div className="hero">
        <div className='row-flex'>
            <img src={props.imageUrl} alt="" className='place-img'/>
            <div className='col-flex'>
                <div className='row-flex'>
                    <img src='' alt=''/>
                    <p className='country'>{props.location}</p>
                    <p className='location'>{props.googleMapsUrl}</p>
                </div>
                <h1 className='place'>{props.title}</h1>
                <p className='date'>{`${props.startDate} - ${props.endDate}`}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Hero