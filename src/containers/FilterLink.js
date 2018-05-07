import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = function(state, ownProps) {
  return ({
    active: ownProps.filter === state.visibilityFilter
  });
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
