import React from 'react'
import './Future.css'
import { SiRuby, SiLaravel, SiBootstrap, SiMaterialdesign, SiAdobe, SiAdobelightroomclassic, SiAdobephotoshop, SiPython, SiJupyter } from 'react-icons/si'



export const Future = () => {
    const buttonHover = [
        {
            button: 'What projects have you done, so far?',
            wrapperTitle: 'Projects',
            wrapperProject: 'As far as I am concerned there have been many projects that I have indulged my expertise in. There is a page that talks about my projects. (...continue with the exploration)',
        },
        {
            button: 'What other framework or styling UI would you advise other DEVS to embrace in the modern web application projects?',
            wrapperTitle: 'A piece of advice to the keyboard clackers!',
            wrapperProject: 'I started way back in elemetary school as I stated in my portfolio. The first styling API that had me going nuts is the semantic UI,and the normal css. In this error of the second wave of Javascript frameworks (React, Angular & Vue), the styling UI and APIS that turn out compatible with them (second wave Javascript frameworks, with the first wave being; Backbone, AngularJS & Knockout) are, Bootstrap UI, Materialize, and the widely used Tailwind CSS which is quite better that the others, in my POV. '
        },
        {
            button: 'What frameworks do you understand the most and find it easier to use?',
            wrapperTitle: ' What turns out to be easier is my knowledge of all.',
            wrapperProject: 'There are many frameworks in the web development world that compete in their usage. This is dependable on the Github star ratings of the framework repos. With me, is the knowledge of the basic HTML5 (which is widely used in the frameworks) and the basic CSS. Advancing that, in the hood of CSS, is Tailwind CSS that I find it comfortable and much practical. The javascipt frameworks, have an `aspect-square` piece of my heart. I adore all, but mosly NextJS.'
        },
        {
            button: 'What is there with threeJS and Framer motion?',
            wrapperTitle: 'Who does not love seeing the 3D effects?',
            wrapperProject: 'With THREEJS and Framer motion, I have been having quite a diffcult time in learning the two. Not that I cannot code something appealing to the eye in the two frameworks. I have not secured satisfactory time for the two. Only with high hopes will I complete its learning process. *kidding.'
        },
        {
            button: 'Is Blockchain even a thing?',
            wrapperTitle: 'Maybe you have not taste the deep waters of blockchain development!',
            wrapperProject: 'I love Blockchain. Not for the reason of code, which also is a reason; but mainly for the reason of is contemporary state. It`s offering a competitive nature to other finance institutions that are trying to cope up with their assets storage. I believe the blockchain holds the future, not the other way round.'
        },
        {
            button: ' What is the inspiration?',
            wrapperTitle: ' The reason why God created me?',
            wrapperProject: 'In this era or rather century, many things have turned online. From businesses to service offering. I get the inspiration from that. '
        },
        {
            button: 'What is there for acounting and finance in the blockchain and web development world?',
            wrapperTitle: 'Maybe you get financial advice through smoke signals!',
            wrapperProject: 'intergrating with blockchain and web development, I foster and project my ambitions in, for once, creating a blockchain dApp (decentralized App) that offers digital assets storage, transaction in KESR (A wallet coin that I will do create with a team of blockchain developers). In general, createa a payment app but linked with both blockchain and the normal currency transfers.'
        },
    ]
  return (
    <div>
        <div className="future">
            <div className="future-t">
        <div className="future-title">
            <h2>Future <span>Aspirations</span> and <span> Ambitions </span> birth the present <span>.</span></h2>
            <small>With future aspirations and ambitions we endeavour to produce the best out of our zeal and zest, unleashing the ever unrelenting oomph, and never to rest in the journey to success. Viva!</small>
        </div>
        <div className="future-learn">
            <h2>Future <span> expertise </span> to be instilled</h2>
            <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi provident at minima dolorum eaque suscipit architecto molestias cum nam, cumque, atque doloribus, odio amet dolorem quis. Debitis nihil quaerat consectetur.</small>
            <address>September, 12th, 2023</address>
            <progress></progress>

        </div>
        <div className="future-items">
            <div><SiRuby className='f-i-icons'/></div>
            <div><SiLaravel className='f-i-icons'/></div>
            <div><SiBootstrap className='f-i-icons'/></div>
            <div><SiMaterialdesign className='f-i-icons'/></div>
            <div><SiAdobe className='f-i-icons'/></div>
            <div><SiAdobelightroomclassic className='f-i-icons'/></div>
            <div><SiAdobephotoshop className='f-i-icons'/></div>
            <div><SiPython className='f-i-icons'/></div>
            <div><SiJupyter className='f-i-icons'/></div>
        </div>
        </div>
        <div className="future-ask">
        {buttonHover.map((buttonHover, index) => {
            return <div className="future-1">
                <div className="future-questions">
            <button>{buttonHover.button}</button>
            <div className="question-wrapper">
                <div className="expandable-wrapper">
                    <h5>{buttonHover.wrapperTitle}</h5>
                    <small>{buttonHover.wrapperProject}</small>
                </div>
            </div>
        </div>
        </div> 
        })}
    </div>
    </div>
    </div>
  )
}
