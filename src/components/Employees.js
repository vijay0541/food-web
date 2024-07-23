//function based component

// const Employees = ({name}) => {
//     return (
//         <div>
//         <h1>{name}</h1>
//         <h2>Work Experience: 15</h2>
//         <h3>Twitter Handle: @pamuleshwar</h3>
//         </div>
//     )
// }

// export default Employees;


//class based component
import React from "react";

class Employees extends React.Component{
    constructor(props) {
        super(props);

        //create state variable
        this.state = {
            userInfo: {
                login: "Dummy",
                public_repos: 0,
            }
        }
    }

    async componentDidMount(){
        //fetch the data from API
        const data = await fetch("https://api.github.com/users/pamuleshwar");

        //convert data into json formate
        const json = await data.json();

        //update the state variable
        this.setState({
            userInfo : json,
        });
    }


    render() {

        const {login, public_repos} = this.state.userInfo;

        return (
            <div>
                <h1>{login}</h1>
                <h3>{public_repos}</h3>
            </div>
        )
    }
}

export default Employees;