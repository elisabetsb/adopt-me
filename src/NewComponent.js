import React from "react";

class NewComponent extends React.Component {
  state = {};

  static getDerivedStateFromProps({
    name,
    animal,
    breed,
    location,
    description
  }) {
    return { name, animal, breed, location, description };
  }
  render() {
    const { name, animal, breed, location, description } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

export default NewComponent;
