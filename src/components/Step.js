import React from 'react'

const Step = ({title, heading, description, img}) => {
    return (
        <div className="hello">
          <div>
            <p className="pb-5 text-center text-orange-400 text-2xl font-semibold">{title}</p>
            <p className="p-5 text-center leading-relaxed text-blue-800 text-4xl font-semibold">{heading}</p>
            <p className="p-5 pb-0 pl-10 pr-10 text-center leading-10 text-gray-400 text-2xl">{description}</p>
          </div>
          <div>
            <img className="-mt-24 -mb-20" src={img} alt=""/>
          </div>
        </div>
    )
}

export default Step
