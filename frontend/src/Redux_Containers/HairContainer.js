import React from "react";
import { Hair } from "../components/HomePage/Hair";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../Redux_Actions/providerAction";

// class HairContainer extends React.Component {
//   componentDidMount() {
//     this.props.fetchProvidersByService();
//   }
//   render() {
//     return (
//       <>
//         {/* <Hair hairProviders={this.props.hairProviders} /> */}
//       </>
//     );
//   }
// }
// const mapStateToProps = (state, ownProps) => {
//   return {
//     hairProviders: state.providersByService[1]
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProvidersByService: () => dispatch(fetchProvidersByService(1))
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HairContainer);
