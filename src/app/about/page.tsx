import { getAboutPage } from '@/apiCalls/getAboutPage';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import Biography from './Biography';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

export const metadata = {
  title: 'About',
  description: 'About me',
  keywords: 'about, me, about me',
};

async function AboutPage() {
  const aboutPage = await getAboutPage();
  return (
    <div>
      <TransitionEffect />
      <div className='flex-center w-full flex-col pt-16'>
        <AnimatedText text={aboutPage.header} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        <Biography aboutPage={aboutPage} />
        <Skills skills={aboutPage.skills} />
        <Experience experiences={aboutPage.experiences} />
        <Education educations={aboutPage.educations} />
      </div>
    </div>
  );
}

export default AboutPage;
