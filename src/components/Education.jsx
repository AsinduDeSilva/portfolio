import React from 'react'
import Heading from './Heading'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {education} from '../constants';


const Education = () => {
  return (
    <div id='Education' className='bg-[#2b2d30] px-5 sm:px-24  md:px-28  lg:px-44 min-h-[50vh] pb-10 text-white overflow-hidden'>
        <Heading name={"Education"}/>

        <Timeline className='mt-10 -translate-x-7 xs:-translate-x-5 sm:-translate-x-3'>

            {education.map(education => (
                <TimelineItem key={education.id}>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                    >
                        <div className='flex justify-end py-6'>    
                            <div className='bg-[#6649be] w-[7rem] xs:w-[10rem] xs:h-[2rem] sm:h-[3rem] py-2 sm:py-0 text-[11px] xs:text-[13px] flex items-center justify-center rounded'>
                                {education.period}
                            </div>
                        </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                        <TimelineDot>
                            <img src={education.icon} alt="" />
                        </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{px: 2, py:3 }}>
                        <div className='bg-[#1D1F23] w-[10rem] xs:w-[120%] xs:h-[150%] sm:w-[18rem] sm:h-[7rem] py-2 xs:py-0 rounded-lg border-[#17181c] border-[2px] flex flex-col justify-center'>    
                            <h3 className='ml-2 font-medium text-[#DADADA] text-sm xs:text-md'>{education.name}</h3>
                            <p className='text-[10px] xs:text-[12px] ml-2 mt-2'>{education.school}</p>
                        </div>
                        

                    </TimelineContent>
                </TimelineItem>   
            ))}    

        </Timeline>
    </div>
  )
}

export default Education