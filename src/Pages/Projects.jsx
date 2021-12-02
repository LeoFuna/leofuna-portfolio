import React from 'react';
import Header from '../Components/Header';
import ProjectContainer from '../Components/ProjectContainer';
import { projects } from '../helpers/projectsPopulate';

function Projects() {
  return (
    <>
      <Header />
      <div style={{ height: '10vh' }} />
      { projects.map((project, index) => <ProjectContainer key={ index } preview={ project.imagePath } title={ project.title } description={ project.description } />) }
    </>
  );
}

export default Projects;