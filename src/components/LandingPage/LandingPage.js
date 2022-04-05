import React from "react";
import Table from "../../shared/component/Table/Table";
import "./LandingPage.css";
import { connect } from "react-redux";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    const tableDataNew = this.props.Users.map((user) => {
      const fullName = user.name.split(" ");
      const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      return { ...user, nameInitials: initials.toUpperCase() };
    });

    this.state = {
      tableData: tableDataNew,
    };
  }

  render() {
    return (
      <div className="main">
        <div className="leftdiv">
          <h2>USER INFO</h2>
          <Table Users={this.state.tableData} />
        </div>
        <div className="rightdiv">
          <h4>Profile</h4>
          <h4>Post</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Users: state.task.Users,
});

export default connect(mapStateToProps)(LandingPage);
