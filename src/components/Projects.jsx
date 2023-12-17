import React from 'react'
import Heading from './Heading'
import { Button, Grid } from '@mui/material'
import { projects } from '../constants'

const Projects = () => {
  return (
    <div className='min-h-[28rem] bg-[#1D1F23] pb-16 text-white px-5 sm:px-24 md:px-28 lg:px-44'>
        <Heading name={"Projects"} />
        <Grid container columnSpacing={2} rowGap={6} className='mt-10 md:mt-16'>
            {projects.map(project => (
                <Grid key={project.id} item xs={12} md={6} lg={4}>
                    <div className='flex flex-col h-[250px] bg-[#141515] rounded-2xl relative overflow-hidden shadow-md shadow-black border-[3px] border-[#383B40] project'>
                        <img className='h-[250px] rounded-lg hover:scale-105 duration-75' src={project.image} alt={project.title}/>

                        <div className='bg-[#101213] opacity-95 h-full w-full project-layer'>
                            <h2 className='text-lg font-semibold h-[40%] flex text-center justify-center items-center'>{project.title}</h2>
                            <div className='flex flex-col items-center justify-center gap-6 h-[60%] -mt-5'>
                                {project.links.map(link => (
                                    <Button key={link.id} sx={{minWidth: '120px'}} variant='contained' color='secondary' href={link.url} target='_blank'>{link.name}</Button>
                                ))}  
                            </div>
                        </div>
                    </div>
                    
                </Grid>
            ))}

        </Grid>
    </div>
  )
}

export default Projects