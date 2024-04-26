import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

function ServiceSection ({ className, icon, title, message }) {
  return (
    <>
      <div className={`flex flex-col items-center text-center ${className || ''}`}>
        <div className='rounded-full text-white bg-gray-600 size-16 text-3xl relative align-middle'>
          <FontAwesomeIcon icon={icon} fixedWidth className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' />
        </div>
        <div>
          <h4 className='text-2xl'>{title}</h4>
          <p>
            {message}
          </p>
        </div>
      </div>
    </>
  )
}

ServiceSection.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string
}

export default ServiceSection
