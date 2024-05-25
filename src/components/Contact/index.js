// import React from 'react'
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { Snackbar } from '@mui/material';

// import {
//   Container,
//   Wrapper,
//   Title,
//   Desc,
//   ContactForm,
//   ContactTitle,
//   ContactInput,
//   ContactInputMessage,
//   ContactButton, 

// } from './ContactStyles';

// const Contact = () => {

//   const [open, setOpen] = React.useState(false);
//   const form = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.sendForm('service_sreeikc', 'template_xqedg9e', form.current, 'lwuZJVxGYwJpGxjZC')
//       .then((result) => {
//         console.log(result)
//         setOpen(true);
//         form.current.reset();
//       }, (error) => {
//         console.log(error.text);
//       });
//   }



//   return (
//     <Container>
//       <Wrapper>
//         <Title>Contact</Title>
//         <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
//         <ContactForm ref={form} onSubmit={handleSubmit}>
//           <ContactTitle>Email Me 🚀</ContactTitle>
//           <ContactInput placeholder="Your Email" name="from_email" />
//           <ContactInput placeholder="Your Name" name="from_name" />
//           <ContactInput placeholder="Subject" name="subject" />
//           <ContactInputMessage placeholder="Message" rows="4" name="message" />
//           <ContactButton type="submit" value="Send" />
//         </ContactForm>
//         <Snackbar
//           open={open}
//           autoHideDuration={6000}
//           onClose={() => setOpen(false)}
//           message="Email sent successfully!"
//           severity="success"
//         />
//       </Wrapper>
//     </Container>
//   )
// }

// export default Contact


import React, { Component } from 'react'
// import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton } from './ContactStyles';

class Contact extends Component {
  state = {
    open: false,
  };

   handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the event target to ensure it's the form element
    console.log(e.target);

    emailjs.sendForm('service_hm1ndw5', 'template_x30dcfh', e.target, 'lwuZJVxGYwJpGxjZC')
      .then((result) => {
        console.log('Email successfully sent!', result);
        this.setState({ open: true });
        e.target.reset();
      }, (error) => {
        console.error('Error in sending email:', error);
      });
  }


  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;

    return (
      <Container>
        <Wrapper>
          <Title>Contact</Title>
          <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
          <ContactForm ref={this.form} onSubmit={this.handleSubmit}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput placeholder="Your Email" name="from_email" />
            <ContactInput placeholder="Your Name" name="from_name" />
            <ContactInput placeholder="Subject" name="subject" />
            <ContactInputMessage placeholder="Message" rows="4" name="message" />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={this.handleClose}
            message="Email sent successfully!"
            severity="success"
          />
        </Wrapper>
      </Container>
    );
  }
}

export default Contact;
