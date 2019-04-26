// import React from "react";
// import { ComboBox } from "../components/Homepage/ComboBox";
// import { connect } from "react-redux";
// import { getSkillsByServiceId } from "../Redux_Actions/dropdownAction";
//
// class SkillContainer extends React.Component {
//   componentDidMount() {
//     this.props.getSkillsByServiceId();
//   }
//
//   render() {
//     return (
//       <>
//         <ComboBox skill={this.props.providerSkill} />
//       </>
//     )
//   }
// };
//
// const mapStateToProps = (state, ownProps) => {
//   debugger
//   return {
//     providerSkill: state.providerSkill.providers
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return{
//     getSkillsByServiceId: () => dispatch(getSkillsByServiceId())
//   };
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SkillContainer);
