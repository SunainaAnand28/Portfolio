import React from 'react';
import './skills.css';

import UI from '../../assets/ui-design.png';
import webdev from '../../assets/web-dev.png';
import Mern from '../../assets/mern.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>
            I am a dedicated Computer Applications student and a passionate MERN Stack developer intern. With a strong foundation in computer science, I am always eager to learn and expand my skill set. My expertise includes working with the MERN Stack (MongoDB, Express.js, React, Node.js), as well as web development technologies such as HTML, CSS, and JavaScript. I believe in continuous growth and teamwork, and I am excited to contribute to impactful projects as I start my career.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UI} alt='UI/UX' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Designing intuitive, user-centered interfaces with a focus on enhancing user experience and achieving business goals.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={webdev} alt='Web-Dev' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Web Developer</h2>
                    <p>Developing responsive, high-performance websites using modern web technologies that provide seamless user experiences.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Mern} alt='MERN-Stack' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>MERN Stack Developer</h2>
                    <p>Building dynamic web applications using the MERN Stack, from database management to server-side logic and front-end design.</p>
                </div>
            </div>
        </div>

        {/* Education Section */}
        <section id='education'>
            <span className='eduTitle'>Education</span>
            <div className='eduItem'>
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p><strong>Shri Lal Bahadur Shastri Degree College</strong></p>
                <p>2022 - Present</p>
            </div>
        </section>

        {/* Experience Section */}
        <section id='experience'>
            <span className='expTitle'>Experience</span>
            <div className='expItem'>
                <h3>Full Stack Developer Intern</h3>
                <p><strong>SinQlarity</strong></p>
                <p>May 2024 - Present</p>
                <p>Developing and maintaining web applications using the MERN stack. Collaborating with team members to deliver scalable solutions and enhance user interfaces.</p>
            </div>
        </section>
    </section>
  )
}

export default Skills;
