import Rating from './Rating/Rating';

type Props = {};

function Testimony({}: Props) {
  return (
    <div className='flex-center flex-col text-left space-y-4 max-w-xs'>
      <Rating count={5} value={4} />
      {/* Testimony */}
      <p className='text-sm'>
        The price was reasonable and I decided to go with them. I am happy I did, as they were able to get a crew to my
        house within a couple of days of the initial contact. They were transparent about pricing and about when and how
        the work would be done. The crew contacted me to let me know they were at my house and ready to start the job.
        Got home later that day to a beautiful new lawn! No mess and the lawn looked fantastic. They even re-attached my
        downspout for me. They provided me with an after-care regimen to keep my new lawn healthy and growing. Would
        recommend this company to family and friends. Thanks Sydney Turf and Landscaping!!
      </p>
      {/* Name */}
      <p className='text-primary font-semibold text-lg'>- Melinda D</p>
      {/* Job Link */}
    </div>
  );
}

export default Testimony;
