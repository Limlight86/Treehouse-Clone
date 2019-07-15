import React from 'react';

const About = _ => (
  <div className="main-content">
    <h2>About</h2>
    <p>
      The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
      visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
      topic -- HTML, CSS, or JavaScript -- to see a list of our courses.
    </p>
  </div>
);

const Courses = _ => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <div component="LIST" className="course-nav" type="topic" />
    </div>
    <div component="LIST" type="course" />
  </div>
);

const Featured = _ => (
  <div className="main-content">
    <h2>Featured:</h2>
    <p>
      Introducing <strong>NAME_HERE</strong>, a teacher who loves teaching courses about <strong>TOPIC_HERE</strong>!
    </p>
  </div>
);

const Home = _ => (
  <div className="main-content home">
    <h2>React Router Tutorial</h2>
    <p>
      Learn front end web development and much more! This simple directory app offers a preview of our course library.
      Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to
      launch a new career in front end web development.
    </p>
    <p>
      We have thousands of videos created by expert teachers on web design and front end development. Our library is
      continually refreshed with the latest on web technology so you will never fall behind.
    </p>
    <hr />
    <div component="FORM" />
  </>
)

const NotFound = _ => (
  <div className="main-content not-found">
    <i className="material-icons icn-error">error_outline</i>
    <h2>Page Not Found</h2>
  </div>
)


const Teachers = _ => (
  <div className="main-content">
  <h2>Teachers</h2>
    <div component="LIST" type="teacher" className="group" />
  </div>
)