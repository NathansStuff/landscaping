import BusinessCard from './BusinessCard';
import Services from './Services';

export default async function Home() {
  return (
    <div className='w-full'>
      <BusinessCard />
      <Services />
    </div>
  );
}
