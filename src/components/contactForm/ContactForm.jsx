"use client"
import './contactForm.scss';
import { useForm, ValidationError } from '@formspree/react';
import Button from '@mui/material/Button';

function ContactForm() {
    // const [captcha, getCaptchaProps] = useCaptcha();
    const [state, handleSubmit] = useForm("xnqylggz");
    if (state.succeeded) {
        return <p>Thanks for contacting Kardia! We will reply as soon as possible.</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
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

            <Button type="submit" disabled={state.submitting} variant='contained' className='mt-3'>Submit</Button>

        </form>
    );
}
// function App() {
//     return (
//         <ContactForm />
//     );
// }
export default ContactForm;
