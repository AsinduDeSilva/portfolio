import React, { useState } from 'react'
import { Alert, Button, Snackbar } from '@mui/material';
import Heading from './Heading';
import MyBackdrop from './MyBackdrop';
import Textfield from './Textfield';


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");  
  const [backdropOpen, setBackdropOpen] = useState(false);  
  const [snackbar, setSnackbar] = useState({open: false, message: '', serverity: 'success'});  

  const sendMail = () => {
    setBackdropOpen(true);

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: 'POST',
        body: JSON.stringify({
            service_id: "service_ms2e3c3",
            template_id: "template_4c19ob6",
            user_id: "BJK_IL8jWhdOdL3Xi",
            template_params: {
                name: name,
                email: email,
                message: message
            }
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res => {
        setBackdropOpen(false);
        if(res.ok){
            setSnackbar({open: true, message: 'Message sent successfully', serverity:'success'});
            setName("");
            setEmail("");
            setMessage("");
            return;
        }
        setSnackbar({open: true, message: 'Some error has occured. Please try again', serverity:'warning'});
    })
    .catch(e => {
        setBackdropOpen(false); 
        setSnackbar({open: true, message: 'Some error has occured. Please try again', serverity:'warning'});
    })
    
  }
  return (
    <div id='Contact' className='bg-[#1D1F23] min-h-[40rem] pb-14'>
        <Heading name={"Contact Me"}/>
        <div className='min-h-[32rem] mt-10 mx-4 md:mx-24 lg:mx-32 xl:mx-48 bg-[#2C2E30] rounded-2xl'>
            <Textfield title={'Name'} placeholder={'Enter your name'} value={name} setValue={setName}/>
            <Textfield title={'Email'} placeholder={'Enter your email'} value={email} setValue={setEmail}/>

            <div className={`mx-4 md:mx-24 lg:mx-32 pt-7`}>
                <label htmlFor="name" className="block font-semibold leading-6 text-white">
                    Message
                </label>
                <div className="mt-3 rounded-md bg-[#212326]">
                    <textarea
                    rows={6}
                        type="text"
                        name="name"
                        className="resize-none bg-[#212326] block w-full rounded-md border-0 focus:outline-none py-2 pl-7 pr-20 text-white placeholder:text-gray-300 placeholder:text-opacity-30 focus:ring-2 focus:ring-inset focus:ring-[#6649bec5] sm:text-sm sm:leading-6"
                        placeholder={"Type your message"}
                        value={message}
                        onChange={e=> setMessage(e.target.value)}
                    />    
                </div>
            </div>

            <div className='pb-5 mx-4 md:mx-24 lg:mx-32 pt-7 flex justify-end'>
                <Button sx={{width: '120px'}} variant='contained' color='secondary' onClick={sendMail}>Submit</Button>
            </div>
            
            
        </div>
        <MyBackdrop open={backdropOpen}/>
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center'}} open={snackbar.open} autoHideDuration={4000} onClose={e => setSnackbar({open: false})}>
            <Alert severity={snackbar.serverity} sx={{ width: '100%' }}>
                {snackbar.message}
            </Alert>
        </Snackbar>
    </div>
  )
}

export default Contact;
