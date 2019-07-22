import React, { Component } from "react";
import axios from "axios";
import { List, Course } from "../components";

class Courses extends Component {
  state = { courses: [] };

  componentDidMount() {
    this.fetchCourses();
  }

   fetchCourses = async () => {
    await axios.get("/courses/html").then(res => {
      const { courses } = res.data;
      this.setState({ courses });
    });
  };

  render() {
    const { courses } = this.state;
    return (
      <div className="main-content">
        <h2>Courses</h2>
        <List items={courses} Component={Course} />
      </div>
    );
  }
}

export default Courses;
