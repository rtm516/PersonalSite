import PropTypes from 'prop-types'

function SocialButton ({ className, children, link }) {
  return (
    <>
      <a className={`rounded-full text-white bg-gray-600 hover:bg-gray-700 p-3 size-16 text-4xl leading-9 text-center ${className || ''}`} href={link}>
        {children}
      </a>
    </>
  )
}

SocialButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  link: PropTypes.string
}

export default SocialButton
