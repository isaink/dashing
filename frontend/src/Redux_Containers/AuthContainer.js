import { connect } from 'react-redux';
import { newUser, logInUser } from '../Redux_Actions/authAction';
import Home from '../components/HomePage/Home';

const mapStateToProps = (state) => {
    return {
        first_name: state.userAuth.user.first_name,
        last_name: state.userAuth.user.last_name
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        newUser: (user) => dispatch( newUser(user) ),
        logInUser: (user) => dispatch( logInUser(user) ),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
