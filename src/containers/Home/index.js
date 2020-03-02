import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from './Home';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
