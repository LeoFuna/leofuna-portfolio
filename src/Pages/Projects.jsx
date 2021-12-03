import React from 'react';
import Header from '../Components/Header';
import ProjectContainer from '../Components/ProjectContainer';
import { projects } from '../helpers/projectsPopulate';

function Projects() {
  return (
    <>
      <Header />
      <div style={{ height: '10vh' }} />
      { projects.map((project, index) => {
        if (index % 2 === 0) {
          return <ProjectContainer 
              key={ index } 
              isDark='' 
              preview={ project.imagePath } 
              appLink={ project.appLink } 
              title={ project.title } 
              description={ project.description }
               />
        }
        return <ProjectContainer 
        key={ index } 
        isDark='isDark'
        preview={ project.imagePath } 
        appLink={ project.appLink } 
        title={ project.title } 
        description={ project.description }
         />
      }) }
    </>
  );
}

export default Projects;