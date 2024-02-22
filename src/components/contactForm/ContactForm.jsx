"use client"
import './contactForm.scss';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '@mui/material/Button';

function ContactForm() {
    // const [captcha, getCaptchaProps] = useCaptcha();

    // Need to add the key for development.
    // const formspreeApiKey = process.env.FORMSPREE_API_KEY;

    const [state, handleSubmit] = useForm(`${FORMSPREE_API_KEY}`);
    const [potFilled, setPotFilled] = useState('false')

    const submitForm = async (event) => {
        event.preventDefault();
        const honeypotField = document.getElementById('subject');
        if (honeypotField.value) {
            console.log("Honeypot field filled. Likely a bot submission.");
            setPotFilled(true);
            console.log(FORMSPREE_API_KEY)
            return;
        }
        handleSubmit(event);
    }

    if (state.succeeded || potFilled == true) {
        return <p>Thanks for contacting Kardia! We will reply as soon as possible.</p>;
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                name="name"
                required
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <label htmlFor="email" className='mt-2'>
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message" className='mt-2'>
                Message
            </label>
            <textarea
                id="message"
                name="message"
                required
                className='message-input'
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            {/* HONEY POT */}
            <div style={{ position: 'absolute', left: '-9999px' }}>
                <label htmlFor="subject">Make sure you fill this in.</label>
                <input
                    id="subject"
                    type="text"
                    name="subject"
                />
            </div>


            <Button type="submit" disabled={state.submitting} variant='contained' className='mt-3'>Submit</Button>

        </form>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;

