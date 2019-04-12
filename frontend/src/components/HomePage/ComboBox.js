import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import Combobox from 'react-widgets/lib/Combobox'



export const ComboBox = props => {
  const renderSkills = () => {
    if (props.skillsByService) {
      return props.skillsByService.map(serviceSkills => {
        return <>{serviceSkills.name}</>;
      });
    } else {
      return <div>Loading...</div>;
    }
  };
  return (
    <>
      <h1> SkillsByService </h1>

      {renderSkills()}
    </>
  );
};





// class ComboBox extends Component {
//   constructor() {
//     super()
//     this.state = {
//     }
//   }
//
//   componentDidMount() {
//   }
//
//   render() {
//     return (
//       <>
//         <h1> Hello </h1>
//       </>
//     );
//   }
//
// }

export default ComboBox;
