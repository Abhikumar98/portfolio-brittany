import { navigate } from 'gatsby';
import { useEffect } from 'react';

const ProjectsPage = () => {
  useEffect(() => {
    navigate('https://abhishekkumar.dev/#projects');
  }, []);

  return null;
};

export default ProjectsPage;
