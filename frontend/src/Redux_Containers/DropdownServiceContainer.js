import React form 'react'
import { connect } from 'react-redux'

class DropdownServiceContainer extends React.Component {

state = {
  selectedService: '',
}
componentDidMount() {
  this.props.getAllServices()
}

handleServiceChange = (selectedService) => {
  this.setState({ selectedService})
}
render() {
  return (
    <>
    <DropdownService
    data={this.props.services}
    defaultValue="Select A Service"
    textField="name"
    groupBy={service => service.service_name}
    name="selectedService"
    onChange={this.handleServiceChange}
    />


    </>
  )
}
}
const mapStateToProps = (state, ownProps) => {
  return {
    services: state.services.services,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllServices: () => dispatch(getAllServices())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownServiceContainer);
