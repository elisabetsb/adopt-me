import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import NewComponent from "./NewComponent";

class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <NewComponent
          name={name}
          animal={animal}
          breed={breed}
          location={location}
          description={description}
        />
      </div>
    );
  }
}

export default Details;
