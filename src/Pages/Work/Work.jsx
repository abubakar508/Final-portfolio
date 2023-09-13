import React from 'react'
import "./Work.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsPhone, BsPersonWorkspace} from "react-icons/bs"
import {LuCalendarClock} from "react-icons/lu"

export const Work = () => {
  return (
    <div>
        <div className="work-header">
        <div className="work">
            <div className="work-side">
                <div className="work-side-img">
                    <img src={require("../../Assets/me.png")} alt="" />
                </div>
                <div className="work-title">Web Developer</div>
            </div>
            <div className="work-info">
                <div className="info-det">
                    <div className="work-icon">
                        <HiOutlineMail/>
                    </div>
                    <div className="work-det">
                        <small>Email</small>
                        <address>abubakarismail508@gmail.com</address>
                    </div>

                </div>
                <div className="info-det">
                    <div className="work-icon">
                        <BsPhone/>
                    </div>
                    <div className="work-det">
                        <small>Phone</small>
                        <address>+254720831147</address>
                    </div>

                </div>
                <div className="info-det">
                    <div className="work-icon">
                        <BsPersonWorkspace/>
                    </div>
                    <div className="work-det">
                        <small>Current Post</small>
                        <address>Lead WEB DEV at Crafted Sole</address>
                    </div>

                </div>
                <div className="info-det">
                    <div className="work-icon">
                        <LuCalendarClock/>
                    </div>
                    <div className="work-det">
                        <small>Location</small>
                        <address>Nairobi, Kenya</address>
                    </div>

                </div>
            </div>
            <div className="work-content">
            </div>
        </div>
        <div className="work-middle">
            <h2>Work</h2>
            <small>Lorem ipsum dolor sit
                 amet, consectetur adipisicing elit. 
                 Vitae repellendus corrupti optio adipisci
                  sapiente nostrum, aut expedita atque delectus
                   voluptas ut nemo maxime ab ducimus voluptate
                    corporis harum nihil perspiciatis.</small>
        </div>
        <div className="computer">
        <div class="computer-item"><img src={require("../../Assets/Work1.png")} alt="" />
        </div>
        <div class="computer-item">
        <img src={require("../../Assets/Work2.jpg")} alt="" />
        </div>
        <div class="computer-item">
        <img src={require("../../Assets/work3.jpg")} alt="" />
        </div>
        <div class="computer-item">
        <img src={require("../../Assets/work4.jpg")} alt="" />
        </div>
        <div class="computer-item">
        <img src={require("../../Assets/work5.jpg")} alt="" />
        </div>
        <div class="computer-item">
        <img src={require("../../Assets/work6.jpg")} alt="" />
        </div>
        </div>
    </div>
    </div>
  )
}
