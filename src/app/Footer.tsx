import ContactForm from '@/app/ContactForm';
import FooterCopyright from './FooterCopyright';

function Footer() {
  return (
    <>
      <ContactForm />
      {/* @ts-expect-error Server Component */}
      <FooterCopyright />
    </>
  );
}

export default Footer;
