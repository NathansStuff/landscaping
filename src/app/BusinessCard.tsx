import Image from 'next/image';

function BusinessCard() {
  return (
    <div className='uppercase w-full text-center flex-center flex-col text-2xl bg-gray-300 pt-6 '>
      <Image src='/logo.svg' alt='Paul Sissions' width={200} height={150} className='-pb-2' />
      <div>
        <div className='text-6xl md:text-7xl flex-center flex-col font-psl'>
          <p>
            Paul Sissi<span className='text-primary'>Ǒ</span>ns
          </p>
        </div>
        <p className='text-base pb-4 font-psl'>- Landscaping -</p>
      </div>
      <div className='text-base md:text-2xl'>
        <p className=''>
          <span className='hidden md:inline-block font-psl'>Paul Sissions</span>{' '}
          <span className='text-primary font-psl'>0425 244 234</span>
        </p>
        <p className='pb-4 '>
          <span className='text-primary font-psl'>pauls</span>
          <span className='font-psl'>landscaping</span>
          <span className='text-primary font-psl'>66</span>
          <span className='font-bold'>@</span>
          <span className='font-psl'>hotmail.com</span>
        </p>
      </div>
      <div className='bg-primary text-light w-full py-2 font-psl'>
        <p>
          Philisophical conversations <br />
          At no extra charge
        </p>
      </div>
    </div>
  );
}

export default BusinessCard;
