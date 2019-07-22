import React, { Component } from "react";
import axios from "axios";
import { List, Teacher } from "../components";

class Teachers extends Component {
  state = { teachers: [] };

  componentDidMount() {
    this.fetchTeachers();
  }

  fetchTeachers = async () => {
    await axios.get("/teachers").then(res => {
      const { teachers } = res.data;
      const filteredTeachers = teachers.filter(teacher => teacher.img_src);
      this.setState({ teachers: filteredTeachers });
    });
  };

  render() {
    const { teachers } = this.state;
    return (
      <div className="main-content">
        <h2>Teachers</h2>
        <List items={teachers} Component={Teacher} />
      </div>
    );
  }
}

export default Teachers;
