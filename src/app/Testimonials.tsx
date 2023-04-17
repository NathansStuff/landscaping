import { getTestimonials } from '@/apiCalls/getTestimonials';
import Testimony from '@/components/Testimony';

type Props = {};

async function Testimonials({}: Props) {
  const testimonials = await getTestimonials();

  return (
    <>
      <h4 className='text-3xl font-bold text-center'>Testimonials</h4>
      <div className='flex-center flex-col sm:flex-row flex-wrap px-10 space-y-10 md:flex-row md:space-y-0 md:space-x-10'>
        {testimonials.map((testimony, index) => (
          <Testimony testimony={testimony} key={index} />
        ))}
      </div>
    </>
  );
}

export default Testimonials;
