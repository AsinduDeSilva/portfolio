import React from 'react'
import { Button, Grid } from '@mui/material';
import { dp2 } from '../assets';
import { socialMedia } from '../constants';

export default function Hero() {
  return (
    <div className='flex min-h-[43rem] md:min-h-[650px] bg-[#1D1F23] xl:px-24 lg:px-0 pb-10 md:pb-0'>
    <Grid container>
        <Grid item order={{xs:1, md:0}} xs={12} md={6} sx={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
            <div className='text-white flex flex-col justify-center px-5'>
                <div className='md:ml-5 lg:ml-14 lg:-mt-8'>
                    <span className='sm:text-lg font-semibold text-[#DADADA]'>Hi I'm Asindu De Silva</span>
                    <h1 className='text-4xl xs:text-5xl sm:text-6xl font-[800] my-2 mt-3 sm:mt-5'>I'm a <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#6649be] to-[#a45dac]'>Full Stack</span></h1>
                    <h1 className='text-4xl xs:text-5xl sm:text-6xl font-[800] mb-5'>Web Developer</h1>
                    <p className='text-[#8c8e92] text-dm sm:text-sm'>
                        Welcome to my portfolio! I'm skilled in creating responsive front-end <br className='hidden sm:block'/>
                        interfaces and robust back-end solutions.
                    </p>
                    <div className='space-x-3 my-5 flex'>
                        {socialMedia.map(socialMedia => (
                            <a key={socialMedia.name} href={socialMedia.url} target='_blank'>
                                <img className='h-6 w-6' src={socialMedia.icon} alt={socialMedia.name} />
                            </a>    
                        ))}
                    </div>
                    <Button sx={{width: '120px'}} variant='contained' color='secondary' onClick={e => document.getElementById("Contact").scrollIntoView()} >Hire Me</Button>

                </div>  
            </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
            <div className='flex items-center justify-center md:mr-8 lg:mr-14 xl:mr-0 sm:mt-10 sm:mb-20 md:mt-0 md:mb-0 py-10'>
                <div className='bg-[#383B40] rounded-[50%] h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] lg:h-[550px] lg:w-[550px] flex items-end justify-center overflow-hidden shadow- lgshadow-[#322264] border-[2px] border-[#6649be]'>
                    <img className='h-[280px] sm:h-[400px] lg:h-[500px]' src={dp2} alt="Asindu De Silva" />
                </div>
            </div>
        </Grid>
    </Grid>  
    </div>  
    
        
  )
}
