import React from 'react';

//Function Showing Profiles fetching data properties from https://uinames.com/api/?amount=10

function Profile(props) {
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" alt="Profile" width="200px"></img>
            <h2>{props.name} {props.surname}</h2>
            <p><span role='img' aria-label='gender'>👤 {props.gender}</span></p>
            <p><span role='img' aria-label='gender'>🌐 {props.region}</span></p>
            <div>
            <p><span role='img' aria-label='all rights are free'>Keep pressing Spacebar on your keyboard to view more profiles. 🤘</span></p>
            </div>
        </div>
    )
}

class Profiles extends React.Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    //Make use of componentDidMount()

    componentDidMount() {

        //Make an API call 

        fetch("https://uinames.com/api/?amount=10")
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    //Render and show data on a random order


    render() {
        const userData = this.state.users.map(data =>
            <Profile key={data.id} name={data.name} surname={data.surname} gender={data.gender} region={data.region} />);
        const randomUser = userData[Math.floor(Math.random() * userData.length)]
        return (
            <div>
                {randomUser}
            </div>
        );
    }
}

export default Profiles;   