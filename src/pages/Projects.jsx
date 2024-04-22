import Project from '../components/Project'
import projectData from '../data/projects.json'

function Projects () {
  return (
    <>
      {projectData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </>
  )
}

export default Projects
