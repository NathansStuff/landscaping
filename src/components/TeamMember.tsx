import Image from 'next/image';

type Props = {
  src: string;
  name: string;
  className?: string;
  height?: number;
  width?: number;
};

function TeamMember({ src, name, className, height = 200, width = 200 }: Props) {
  return (
    <div className={`flex-center flex-col md:!items-start w-full md:max-w-[200px] mb-10 ${className}`}>
      <Image src={src} alt='team member' className='rounded-2xl ' priority width={width} height={height} />
      <p className='text-center text-lg font-semibold w-full pt-4'>{name}</p>
    </div>
  );
}

export default TeamMember;
