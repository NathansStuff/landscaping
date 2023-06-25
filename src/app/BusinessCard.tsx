import Image from 'next/image';

function BusinessCard() {
  return (
    <div className='uppercase w-full text-center flex-center flex-col text-2xl bg-gray-300 pt-6'>
      <Image src='/logo.svg' alt='Paul Sissions' width={200} height={150} className='-pb-2' />
      <div>
        <div className='text-7xl flex-center flex-col font-psl'>
          <p>Paul</p>
          <div className='flex-center'>
            <p>Sissi</p>
            <div className='w-14 h-14 rounded-full bg-primary ' />
            <p>ns</p>
          </div>
        </div>
        <p className='text-base'>- Landscaping -</p>
      </div>
      <div className='text-base md:text-2xl'>
        <p className=''>
          <span className='hidden md:inline-block'>Paul Sissions</span> <span className='text-primary'>0425 244 234</span>
        </p>
        <p className=''>
          <span className='text-primary'>pauls</span>landscaping<span className='text-primary'>66</span>@hotmail.com
        </p>
      </div>
      <div className='bg-primary text-light w-full py-2'>
        <p>
          Philisophical conversations <br />
          At no extra charge
        </p>
      </div>
    </div>
  );
}

export default BusinessCard;
