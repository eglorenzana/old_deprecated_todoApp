import PropTypes from 'prop-types';

export default const TodoShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  notes: PropTypes.string,
  completed: PropTypes.bool,
})
