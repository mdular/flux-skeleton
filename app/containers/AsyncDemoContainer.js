import { connect } from 'react-redux';
import { setLoading, loadData } from '../actions/AsyncDemoActions';
import AsyncDemo from '../views/AsyncDemo.jsx';

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        appData: state.data
    };
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         loadData: (ref) => {
//             dispatch(loadData(ref));
//         }
//     };
// }

const AsyncDemoContainer = connect(
    mapStateToProps,
    // mapDispatchToProps
    {loadData}
)(AsyncDemo);

export default AsyncDemoContainer;
