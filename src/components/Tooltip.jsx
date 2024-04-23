import PropTypes from 'prop-types'

function Tooltip ({ className, message, children }) {
  return (
    <>
      <div className={`group ${className}`}>
        {children}
        <span className='invisible group-hover:visible bg-black text-white px-2 rounded absolute w-max translate-center-4 top-[125%] tooltip'>{message}</span>
      </div>
    </>
  )
}

Tooltip.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.node
}

export default Tooltip
