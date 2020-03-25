const Pet = ({ name, animal, breed }) => {
    return React.createElement ("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};

const Person = ({ name, surname, email }) => {
    return React.createElement ("div", {}, [
        React.createElement("h2", {}, name),
        React.createElement("h2", {}, surname),
        React.createElement("h2", {}, email),
    ]);
};


const App = () => {
    return React.createElement ("div", { id: "something-important" },
        [React.createElement("h1", {}, "Contact me!"),
        React.createElement (Person, { name: "Tirma", surname: "Santana Jarquin", email: "tirmaliciuos@love.com"}),
        React.createElement (Person, { name: "Misu", surname: "Cat", email: "DLH"}),
        React.createElement (Person, { name: "Platano", surname: "Dog", email: "Ratonero"}),
    ]);
};



ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);

