import { ITestimony } from '@/types/ITestimony';
import Rating from './Rating/Rating';

type Props = {
  testimony: ITestimony;
};

function Testimony({ testimony }: Props) {
  return (
    <div className='flex-center flex-col text-left space-y-4 max-w-xs'>
      <Rating count={5} value={testimony.stars} />
      {/* Testimony */}
      <p className='text-sm'>{testimony.testimony}</p>
      {/* Name */}
      <p className='text-primary font-semibold text-lg'>- {testimony.name}</p>
      {/* Job Link */}
    </div>
  );
}

export default Testimony;
