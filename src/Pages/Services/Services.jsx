import React from 'react'
import "./Services.css"
import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
}
from "react-icons/rx"
import {GiFountainPen} from "react-icons/gi"
import { SiHiveBlockchain } from "react-icons/si";

export const Services = () => {
    const serviceData = [
        {
            icon: <RxCrop className='Service-icon'/>,
            title: 'Branding',
            description: 'Be unique through our hands on branding'
        },
        {
            icon: <RxPencil2 className='Service-icon'/>,
            title: 'Design',
            description: 'Transform your ideas into great designs'
        },
        {
            icon: <RxDesktop className='Service-icon'/>,
            title: 'Development',
            description: 'Why not do it digital thorugh our expertise?'
        },
        {
            icon: <GiFountainPen className='Service-icon'/>,
            title: 'Scriptwriting',
            description: 'Convert your ideas into a captivating piece of art'
        },
        {
            icon: <RxReader className='Service-icon'/>,
            title: 'Finance',
            description: 'Make accounting and finance easy'
        },
        {
            icon: <SiHiveBlockchain className='Service-icon'/>,
            title: 'Blockchain',
            description: 'Dive into WEB3 through Blockchain technology'
        }
    ]
  return (
    <div>
        <div className="services">
<div className="services-content">
<h2>My Services<span>.</span></h2>
<small>Offering services 
    is the best way of connecting 
    with the desires of a client. 
    In, with the density of great 
    offerings, We focus in making
     our clients satisfied. Book
      your space now.</small>
</div>
<div className="services-offered">
    {serviceData.map((serviceData, index) => {
        return <div className="s-o-div">
            <div className="s-o-div-c">
            {serviceData.icon}
            <h2>{serviceData.title}</h2>
            <small>{serviceData.description}</small>
            </div>
        </div>
    })}
    <div>

    </div>
</div>
        </div>
    </div>
  )
}
