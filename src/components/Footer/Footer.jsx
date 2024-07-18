import './footer.scss';
import { Typography, Box } from '@mui/material';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: [
        '400', '500', '600', '700', '800', '900'
    ]
})

const Footer = () => {
    return (
        <footer>
            <section className='footer-section logo-section'>
                <div className="footer-logo">
                    <Link href='/' className='logo-text' >
                        <Box
                            component='img'
                            width='6rem'
                            height='6rem'
                            sx={{ display: 'flex', mr: 0.5, boxShadow: 'none' }}
                            src='/images/logo.png'
                        />
                    </Link>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            // fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        className={cinzel.className}
                    >
                        <Link href='/' className='logo-text' >
                            <h4>Kardia</h4>
                            <h5>Classical School</h5>
                        </Link>

                    </Typography>
                </div>

            </section>
            <section className='footer-section address-section'>

                <div className="address-block">
                    <h5>Mailing Address</h5>
                    <address>
                        <p>1429 Avenue D<br /> #239<br />Snohomish, WA 98290</p>
                    </address>
                </div>
                <div className="address-block">
                    <address>
                        <h5>Physical Address</h5>
                        <p style={{ marginBottom: '0' }}>Hope Foursquare Church</p>
                        <p>5002 Bickford Ave<br />Snohomish, WA 98290</p>
                    </address>
                </div>
                <div className="address-block">
                    <h5>Hours</h5>
                    <p style={{ marginBottom: 0 }}>Monday–Friday: </p>
                    <p>9:00AM–4:00PM<br />Saturday-Sunday: Closed</p>
                </div>
            </section>

            <section className='footer-section orgs-section'>
                <h6 className='member-title'>Proud member of :</h6>
                <div className="logo-div">
                    <a href='https://classicalchristian.org/' target='_blank'>
                        <img src='/images/footer/accs.png' className='footer-logo' alt='ACCS Logo' />
                    </a>
                    <a href='https://adflegal.org/' target='_blank'>
                        <img src='/images/footer/adf_logo.png' className='footer-logo' alt='ADF Logo' />
                    </a>
                    <a href='https://classicaldifference.org/' target='_blank'>
                        <img src='/images/footer/classical-difference.png' className='footer-logo' alt='Classical Difference Logo' />
                    </a>
                </div>

            </section>
            <section className='footer-section socials-section'>
                <a className='mx-2' href='https://www.instagram.com/kardiaclassical/' target='_blank'>
                    <img src='/images/footer/instagram.svg' alt="Instagram Logo" className='footer-social' />
                </a>
                <a className='mx-2' href='https://www.facebook.com/Kardia-Classical-School-104872501299533/?modal=admin_todo_tour' target='_blank'>
                    <img src='/images/footer/facebook.svg' alt="Instagram Logo" className='footer-social' />
                </a>
                <a className='mx-2' href='https://www.yelp.com/biz/kardia-classical-school-snohomish' target='_blank'>
                    <img src='/images/footer/yelp.png' alt="Instagram Logo" className='footer-social yelp' />
                </a>
            </section>
            <section className='footer-section'>
                <small><span>&copy; 2023 Kardia Classical School | </span><span>Designed and built by <Link href='http://krishvattum.com' target="_blank" style={{ color: '#1A1461', fontWeight: 'bold' }} > <em>Kris Hvattum</em></Link></span></small>
            </section>
        </footer>
    )
}

export default Footer