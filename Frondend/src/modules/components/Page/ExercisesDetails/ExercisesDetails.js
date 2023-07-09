import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scroll-menu';

import { Link } from 'react-router-dom';

import "bootstrap-icons/font/bootstrap-icons.css";
import './ExercisesDetails.css';

// list of items
const list = [
  { name: 'Planking' },
  { name: 'Pull Up', path: '/pullup'},
  { name: 'Sit Up' },
  { name: 'Jumping Rope' },
  { name: 'Squat Jump' },
  { name: 'Tricep Dips' },
  { name: 'High knees' },
  { name: 'Lifting Weights' }
];

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

class ExercisesDetails extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  }


  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
      
    return (
      <div className="Exercises">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />

          <Link to={"/home"}>
          <button className='bi' onclick="history.go(-1);"> 
          <i className="bi bi-arrow-left"></i> 
          </button>
          </Link>

      </div>
    );
  }
}

export default ExercisesDetails;