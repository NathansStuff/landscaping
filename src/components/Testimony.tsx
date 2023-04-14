import Rating from './Rating/Rating';

type Props = {};

function Testimony({}: Props) {
  return (
    <div className='flex-center flex-col text-left space-y-4 max-w-xs'>
      <Rating count={5} value={4} />
      {/* Testimony */}
      <p className='text-sm'>
        The price was reasonable and I decided to go with them. I am happy I did, as they were able to get a crew to my
        house within a couple of days of the initial contact. 
      </p>
      {/* Name */}
      <p className='text-primary font-semibold text-lg'>- Melinda D</p>
      {/* Job Link */}
    </div>
  );
}

export default Testimony;
