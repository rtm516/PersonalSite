import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

function SocialButton ({ className, icon, link }) {
  return (
    <>
      <a className={`rounded-full text-white bg-gray-600 hover:bg-gray-700 size-16 text-4xl relative align-middle ${className || ''}`} href={link}>
        <FontAwesomeIcon icon={icon} fixedWidth className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' />
      </a>
    </>
  )
}

SocialButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object,
  link: PropTypes.string
}

export default SocialButton
