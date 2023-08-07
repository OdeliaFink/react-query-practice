import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:3001/users/${email}`);
};

const fetchSkillBySkillId = (skillsId) => {
  return axios.get(`http://localhost:3001/skills/${skillsId}`);
};

export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(['user', email], () =>
    fetchUserByEmail(email)
  );
  const skillsId = user?.data.skillsId;

  useQuery(['skills', skillsId], () => fetchSkillBySkillId(skillsId), {
    enabled: !!skillsId,
  });
  console.log('user', user);
  return <div>Dependent Queries</div>;
};
