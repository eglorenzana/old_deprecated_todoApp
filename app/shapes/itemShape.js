import PropTypes from 'prop-types';

export default const TodoShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  completed: PropTypes.bool,
});
