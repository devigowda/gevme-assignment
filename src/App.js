import React from "react";
import { connect } from "react-redux";
import { GetUsers } from "./shared/store/actions/uaserAction";
import  LandingPage  from "./components/LandingPage/LandingPage"

 class App extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
      }
  }

  componentDidMount() {
    // making all API calls and store in the redux-store
    this.props.GetUsers();
  }

  render() {
    console.log("this.props.tasksss ", this.props.Loading);
    return (
      <div className="App" style={{backgroundColor:"lightgray"}}>
      <LandingPage/>
     </div> 
    );
  }
}

const mapStateToProps = state => ({
  Loading: state.task.loading
});

const mapDispacthToProps = dispatch => {
  return {
    GetUsers: () => dispatch(GetUsers())    
  };

};
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(App);