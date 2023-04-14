import BusinessCard from './BusinessCard';
import Services from './Services';
import Testimonials from './Testimonials';

export default async function Home() {
  return (
    <div className='w-full'>
      <BusinessCard />
      <Services />
      <Testimonials />
    </div>
  );
}
