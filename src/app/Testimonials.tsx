import Testimony from '@/components/Testimony';

type Props = {};

function Testimonials({}: Props) {
  return (
    <div className='flex-center flex-col sm:flex-row flex-wrap'>
      <Testimony />
    </div>
  );
}

export default Testimonials;
