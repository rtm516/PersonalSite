import PropTypes from 'prop-types'

function Project ({ project }) {
  return (
    <>
      <div className='px-8 pb-12 flex justify-center'>
        <div className='bg-white rounded overflow-hidden max-w-4xl shadow-lg flex flex-col md:flex-row items-center'>
          <div className='p-6'>
            <h3 className='text-3xl'>{project.title}<small className='text-base text-gray-400'> {new Date(project.date).toLocaleDateString()}{project.active && ' - Present'}</small></h3>
            <p>
              {project.description}
            </p>
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
