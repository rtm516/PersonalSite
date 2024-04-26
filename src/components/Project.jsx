import PropTypes from 'prop-types'
import GitHubLogo from '../assets/github-mark.svg?react'
import Tooltip from './Tooltip'

function Project ({ project }) {
  return (
    <>
      <div className='px-8 pb-12 flex justify-center'>
        <div className='bg-white rounded overflow-hidden max-w-4xl shadow-lg flex flex-col md:flex-row'>
          <div className='flex items-center h-full relative'>
            <div className='p-6'>
              <h3 className='text-3xl'>{project.title}<small className='text-base text-gray-400'> {new Date(project.date).toLocaleDateString()}{project.active && ' - Present'}</small></h3>
              <p>
                {project.description}
              </p>
            </div>
            {project.github && (
              <Tooltip className='absolute top-2 right-2 size-8' message='View source on GitHub'><a href={project.github}><GitHubLogo /></a></Tooltip>
            )}
          </div>
          {project.img && (
            <div className='h-full md:w-[40%] md:shrink-0 flex justify-center items-center overflow-hidden'>
              <img className='shrink-0 min-w-full min-h-full object-cover' src={'/img/projects/' + project.img} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

Project.propTypes = {
  project: PropTypes.object
}

export default Project
