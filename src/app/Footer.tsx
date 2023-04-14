import ContactForm from '@/app/ContactForm';
import FooterCopyright from './FooterCopyright';
import Testimonials from './Testimonials';

function Footer() {
  return (
    <>
      <Testimonials />
      <ContactForm />
      {/* @ts-expect-error Server Component */}
      <FooterCopyright />
    </>
  );
}

export default Footer;
