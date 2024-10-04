export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <h1>Contact Us</h1>
            <p>If you have any questions or inquiries, feel free to reach out to us using the form below.</p>
            <form className='contactForm' method="POST" action="/send-message">
                <div className='formGroup'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className='formGroup'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className='formGroup'>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
        </div>
    );
}
