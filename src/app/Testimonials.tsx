import Testimony from '@/components/Testimony';

type Props = {};

function Testimonials({}: Props) {
  return (
    <>
      <h4 className='text-3xl font-bold text-center'>Testimonials</h4>
      <div className='flex-center flex-col sm:flex-row flex-wrap px-10 space-y-10 md:flex-row md:space-y-0 md:space-x-10'>
        <Testimony />
        <Testimony />
        <Testimony />
      </div>
    </>
  );
}

export default Testimonials;
