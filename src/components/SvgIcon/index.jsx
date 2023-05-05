import PropTypes from 'prop-types';

const SvgIcon = (props) => {
  const {
    name, className = "",
    title = "",
    overHidden = true,
    onClick, onDoubleClick
  } = props

  return (
    <svg className={"icon " + className} title={title} aria-hidden={overHidden} onClick={onClick} onDoubleClick={onDoubleClick}>
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  overHidden: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func
}

export default SvgIcon
