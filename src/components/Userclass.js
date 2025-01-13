import React from "react";
class Userclass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      //   count: 0,
      //   count2: 10,
      userinfo: {
        name: "Dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/ar-p-it");
    const json = await data.json();

    this.setState({
      userinfo: json,
    });
    console.log(json);
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    //? const {name,location}=this.props;
    /!* destructure on the flier*/;
    // return (
    //   <div className="user-card">

    //     <h1>Count:{this.state.count}</h1>
    //     <button onClick={()=>{
    //         this.setState({
    //             count:this.state.count+2,
    //         })
    //     }}>Count increase</button>

    //     {/* <h1>Count:{this.state.count2}</h1> */}

    //     <h2>This is {this.props.location}</h2>
    //     <h3>Location : {this.props.name} </h3>
    //     <h4>Contact:9898877698</h4>

    //     <h2>Name: {} </h2>
    //     <h3>Location:{} </h3>
    //     <h4>Contact:{} </h4>

    //   </div>

    // );
    const { name, location, id, login, avatar_url } = this.state.userinfo;

    return (
      <div className="user-card">
        <h2>Name: {name} </h2>
        <h3>Location:{location} </h3>
        <h4>Contact:{id} </h4>
        <h4>nickname:{login} </h4>
        <img src="avatar_url"></img>
      </div>
    );
  }
}
export default Userclass;
// *****
//  *
//  * --- MOUNTING ----
//  *
//  * Constructor (dummy)
//  * Render (dummy)
//  *      <HTML Dummy >
//  * Component Did MOunt
//  *      <API Call>
//  *      <this.setState> -> State variable is updated
//  *
//  * ---- UPDATE
//  *
//  *      render(APi data)
//  *      <HTML (new API data>)
//  *      ccomponentDid Update
//  *
//  *
//  *
//  *
//  *