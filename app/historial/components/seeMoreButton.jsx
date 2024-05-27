import React from 'react';

export default class SeeMoreButton extends React.Component {
  render() {
    return (
      <div className="w-3/4 flex justify-center">
        <button 
          className="bg-primary text-on-primary font-bold py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-75" 
          onClick={this.props.onClick}
        >
          Ver más
        </button>
      </div>
    );
  }
}
