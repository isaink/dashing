import React from "react";
import { SkillsByService } from "../components/HomePage/SkillsByService";
import { ComboBox } from "../components/HomePage/ComboBox";
import { connect } from "react-redux";
import { fetchSkillsByService } from "../Redux_Actions/skillsByServiceAction";

class SkillsByServiceContainer extends React.Component {
  componentDidMount() {
    this.props.fetchSkillsByService();
  }
  render() {
    return (
      <>
        <ComboBox skillsByService={this.props.skillsByService} />
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    skillsByService: state.skillsByService[1]
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchSkillsByService: () => dispatch(fetchSkillsByService(1))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsByServiceContainer);
