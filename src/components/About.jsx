import React, { useEffect, useState } from 'react'
import Heading from './Heading';
import { Tab, Tabs, Tooltip } from '@mui/material'
import { skillIcons } from '../constants';


const About = () => {

  const [activeTab, setActiveTab] = useState(0); 
  const [skills, setSkills] = useState(skillIcons.frameworks);

  useEffect(() => {
    switch (activeTab){
        case 0 : setSkills(skillIcons.frameworks); break;
        case 1 : setSkills(skillIcons.languages); break;
        case 2 : setSkills(skillIcons.databases); break;
        case 3 : setSkills(skillIcons.tools);
    }
  }, [activeTab]);

  return (
    <div id='About' className='bg-[#252729] px-5 sm:px-24  md:px-28  lg:px-44 min-h-[50vh] pb-10'>
        <Heading name="About Me"/>
        <div className='flex justify-center'>
            <p className='text-white text-md font-normal xl:w-[70%] mt-8 text-center'>
                I'm a Computer Science undergraduate at the University of Kelaniya, specializing in full-stack development.
                Proficient in React.js for dynamic front-end design and Spring Boot with Java for robust back-end solutions, 
                I thrive on transforming concepts into functional, user-friendly applications. 
            </p>
        </div> 

        <Heading name='Skills'/>

        <div className='mt-5 flex justify-center'>
            <Tabs 
                value={activeTab} 
                onChange={(e, newTab) => setActiveTab(newTab)} 
                variant="scrollable"
                scrollButtons="auto"
                className='bg-[#1D1F23] rounded-lg text-[#fff] px-1.5'
                textColor='inherit'
                indicatorColor='secondary'
            >
                <Tab label="Frameworks" />
                <Tab label="Languages" />
                <Tab label="Databases" />
                <Tab label="Tools" />
            </Tabs>
        </div>

        <div className='mt-10 mb-5 flex justify-center gap-x-12 gap-y-8 flex-wrap'>

            {skills.map((icon) => (
                <Tooltip enterTouchDelay={0} key={icon.id} title={icon.name} className='w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem] hover:scale-105 transition' arrow>
                    <img src={icon.icon} alt={icon.name} />
                </Tooltip>
            ))}

        </div>
    </div>
  )
}

export default About;
