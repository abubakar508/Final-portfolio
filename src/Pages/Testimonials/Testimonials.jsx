import React from 'react'
import "./Testimonials.css"
import {GiMoebiusStar} from "react-icons/gi"
import image1 from '../../Assets/me.png'
import image2 from "../../Assets/QB.png"
import image3 from "../../Assets/SR.png"
import image4 from '../../Assets/hb.png'
import image5 from '../../Assets/DC.png'
import image6 from '../../Assets/GPS.png'
import image7 from '../../Assets/UIC.png'
import image8 from '../../Assets/me.png'
import image9 from '../../Assets/hala.jpg'

export const Testimonials = () => {

    const testimony = [
        {
            image: image1,
            title: "Senior Developer at Crafted Sole",
            name: "Elkowero Elsangra",
            rating: 'Best',
            location: 'Badlands avenue, Oloyangalani',
            text: 'lorem ipsum dolor sit amet consectuer adispsicing elit'

        },
        {
            image: image2,
            title: 'The Qalb Bossom: Sales & Research Team',
            name: 'The Qalb Bossom',
            rating: 'Best',
            location: 'Umma University, Kajiado',
            text: 'The team displayed a high level of professionalism and delivered a meticulously crafted design for our project. We look forward to maintaining our collaboration with them in the future.'
        },
        {
            image: image3,
            title: 'Water Company',
            name: 'Survival refillers',
            rating: 'Good',
            location: 'Isinya Town, Kajiado',
            text: 'Exhibiting a remarkable level of professionalism, the team demonstrated keen attentiveness to the specific requirements of my project. Their commitment to understanding and addressing my needs was truly impressive. Based on my experience, I have no hesitation in offering my strong recommendation for their services. Their ability to cater to project demands with such professionalism sets them apart. In my view, they are a top choice for anyone seeking dedicated and attentive teamwork.'

        },
        {
            image: image4,
            title: 'A creative Company',
            name: 'H&B Creatives',
            rating: 'Best',
            location: 'Nairobi, Moi Avenue',
            text: 'Working with Abisma was a game-changer for our marketing campaigns. Their creative brilliance and attention to detail brought our brand to life in ways we had not imagined. The ads they designed not only captured our message perfectly but also resonated with our target audience, resulting in a significant increase in engagement and conversions.'
        },
        {
            image: image5,
            title: 'Paint & Arts Company',
            name: 'Daub customs',
            rating: 'Good',
            location: 'Eldoret, Kimumu, 4th Avenue',
            text: 'The team was very professional and attentive to my project requirements. I highly recommend them.'

        },
        {
            image: image6,
            title: 'Payment & blockchain app',
            name: 'Go Pay sales team',
            rating: 'Best',
            location: 'Nairobi, Westlands',
            text: 'We got a breathtaking UI that has been built by this team. The Solution to greater UI/UX designs is hidden by the team.'

        },
        {
            image: image7,
            title: 'Innovation HUB',
            name: 'Umma innovation club',
            rating: 'Best*',
            location: 'Umma Univeristy, Kajiado',
            text: 'Proffesionalism is evident here. Skip to the main part, Abisma is the best.'

        },
        {
            image: image8,
            title: 'Lead Frontend dev at crafted sole',
            name: 'Abu-Bakr ismail',
            rating: 'Good',
            location: 'Umma university, Kajiado',
            text: 'I have the very best of interests in his designs and web layouts. I would assign him web related work oftenly.'

        },
        {
            image: image9,
            title: 'Owner',
            name: 'Abisma',
            rating: 'Best',
            location: 'Umma university, Kajiado',
            text: 'I believe my ever knowledge yearning mind poses for greatness in the realm of creativity and web design.'

        }
    ]
  return (
    <div>
        <div className="test-hold">
        <div className="test-title">
            <h2>What <span> Satisfied </span> Clients Say<span>!</span></h2>
        </div>
        <div className="testimonial-content">
            {testimony.map((testimony, index) => {
                return<div className="content-1">
                    <div className="content-begin">
                <small>{testimony.title}</small>
                <h2>{testimony.name}</h2>
                </div>
                <div className="testimony-image">
                    <img src={testimony.image} alt="" />
                </div>
                <section>
                <span><GiMoebiusStar/>{testimony.rating}</span>
                <address>{testimony.location}</address>
                </section>
                <div className="content-small">
                <small>{testimony.text}</small>
                </div>
            </div>
            })}
           
        </div>
    </div>
    </div>
  )
}
