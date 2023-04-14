import CategoryImage from '@/components/CategoryImage';

type Props = {};

export default function BeforeAndAfter({}: Props) {
  return (
    <div className='sm:ml-4 mt-4 flex  text-xl font-semibold flex-col space-y-4 space-x-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
      <div className='flex-col flex-center space-y-2'>
        <p>Before</p>
        <CategoryImage />
      </div>
      <div className='flex-col flex-center space-y-2'>
        <p>After</p>
        <CategoryImage />
      </div>
    </div>
  );
}
