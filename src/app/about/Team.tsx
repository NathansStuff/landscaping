import TeamMember from '@/components/TeamMember';

type Props = {};

function Team({}: Props) {
  return (
    <div className=''>
      <h3 className='text-3xl font-bold text-center m-4'>Meet the Team</h3>
      <div className='flex-center sm:space-x-4 flex-wrap'>
        <TeamMember src='/images/profile/aboutme.jpg' name='Justin Smith' />
        <TeamMember src='/images/profile/aboutme.jpg' name='Justin Smith' />
        <TeamMember src='/images/profile/aboutme.jpg' name='Justin Smith' />
      </div>
    </div>
  );
}

export default Team;
