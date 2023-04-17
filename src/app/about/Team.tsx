import { getTeamMembers } from '@/apiCalls/getTeamMembers';
import TeamMember from '@/components/TeamMember';

type Props = {};

async function Team({}: Props) {
  const teamMembers = await getTeamMembers();
  return (
    <div className=''>
      <h3 className='text-3xl font-bold text-center m-4'>Meet the Team</h3>
      <div className='flex-center sm:space-x-4 flex-wrap'>
        {teamMembers.map((member, index) => (
          <TeamMember src={member.heroImage} name={member.name} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Team;
