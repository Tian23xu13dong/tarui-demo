import PropTypes from 'prop-types';

const SvgIcon = (props) => {
  const {name, className = "", overHidden = true} = props

  return (
    <svg className={"icon " + className} aria-hidden={overHidden}>
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}

SvgIcon.propTypes = {
  name: PropTypes.string,
  overHidden: PropTypes.bool,
  className: PropTypes.string
}

export default SvgIcon
