import ServiceImage from '@/components/ServiceImage';

function Services() {
  return (
    <div className='flex-center flex-wrap sm:space-x-4 space-y-4 p-4'>
      <div className='sm:ml-4 mt-4'>
        <ServiceImage />
      </div>
      <ServiceImage />
      <ServiceImage />
      <ServiceImage />
    </div>
  );
}

export default Services;
