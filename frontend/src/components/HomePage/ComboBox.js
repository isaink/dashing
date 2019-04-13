// import React from 'react';
// import 'react-widgets/dist/css/react-widgets.css';
// import Combobox from 'react-widgets/lib/Combobox'
//
//
// class ComboBox extends React.Component {
//
//   let { Combobox } = ReactWidgets;
//   let people = listOfPeople();
//
//   let widgets = (
//     <div>
//       <Combobox
//         data={people}
//         textField='name'
//         groupBy='lastName'
//       />
//       <Combobox
//         data={people}
//         textField='name'
//         groupBy={person => person.name.length}
//       />
//     </div>
//   )
//
//   render(widgets);
//
// }


//-------------------------------------

// in terminal: npm add react-select
import React from 'react';
import Select from 'react-select';
import Dropdown from 'react-dropdown';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
//   {
//     type: 'group', name: 'group1', items: [
//       { value: 'chocolate', label: 'Chocolate' },
//       { value: 'strawberry', label: 'Strawberry' }
//     ]
//   },
//   {
//     type: 'group', name: 'group2', items: [
//       { value: 'chocolate', label: 'Chocolate' },
//       { value: 'strawberry', label: 'Strawberry' }
//     ]
//   }
// ];

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
//
// ];

// const defaultOption = options[0];



class ComboBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
    }
  }

  // options = () => this.props.skillsByService.map(skills => {
  //   return (
  //
  //     <option
  //       key={skills.skill_id}
  //       value={skills.skill_id}
  //       groupBy={skills.service_name}
  //       >
  //         {skills.skill_name}
  //     </option>
  //   )
  // })



  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }


  render() {
    console.log();
    const options = this.props.skillsByService.map(skills => {
      return (
        <option
          key={skills.skill_id}
          value={skills.skill_id}
          groupBy={skills.service_name}
          >
            {skills.skill_name}
        </option>
      )
    })

    // const { selectedOption } = this.state;


    // <Select
    //   className='mySelectTagCss'
    //   value={selectedOption}
    //   onChange={this.handleChange}
    //   options={options}
    // />


    // <Dropdown options={options}
    //   onChange={this._onSelect}
    //   value = {defaultOption}
    //   placeholder='Select an option' />

    // <Select
    //   className='mySelectTagCss'
    //   value={selectedOption}
    //   onChange={this.handleChange}
    //   options={options}
    // />
    return (
      <select
        onChange={this.handleChange}
        name='selectedService' >
        <option key='0' value=''></option>
        {options}
      </select>





    );
  }
}

export default ComboBox;



//-------------------------------------------

// import React from "react";
// // import axios from "axios";
//
// export default class ComboBox extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }
//
//   renderSkills = () => {
//     console.log(this.props);
//     if (this.props.skillsByService) {
//       return this.props.skillsByService.map(serviceSkills => {
//         return (
//           <>
//           <option>{serviceSkills.skills_name}</option>
//           </>
//         )
//       });
//     } else {
//       return <div>Loading...</div>;
//       }
//   };
//
//   render() {
//     return (
//       <div>
//         <h1> SkillsByService </h1>
//         <select>
//           <option></option>
//           {this.renderSkills()}
//         </select>
//       </div>
//     )
//   }
// }

// ---------------------------


// export const ComboBox = props => {
//   console.log('ComboBox', props);
//   const renderSkills = () => {
//     if (props.skillsByService) {
//       return props.skillsByService.map(serviceSkills => {
//         return <>{serviceSkills.name}</>;
//       });
//     } else {
//       console.log('ComboBox Loading...', props.skillsByService);
//       return <div>Loading...</div>;
//     }
//   };
//   return (
//     <>
//       <h1> SkillsByService </h1>
//
//       {renderSkills()}
//     </>
//   );
// };
//
//
//
// export default ComboBox;
