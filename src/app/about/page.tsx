import { getAboutPage } from '@/apiCalls/getAboutPage';
import AnimatedText from '@/components/AnimatedText';
import Testimonials from '../Testimonials';
import Biography from './Biography';
import Team from './Team';

export const metadata = {
  title: 'About',
  description: 'About me',
  keywords: 'about, me, about me',
};

async function AboutPage() {
  const aboutPage = await getAboutPage();
  return (
    <>
      <div className='flex-center w-full flex-col pt-16'>
        <AnimatedText text={aboutPage.header} className='md:mb-16 ' />
        <Biography aboutPage={aboutPage} />
        <Team />
      </div>
      <Testimonials />
    </>
  );
}

export default AboutPage;
