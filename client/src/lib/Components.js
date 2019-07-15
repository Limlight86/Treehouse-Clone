import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const Course = _ => (
  <li className="course media group">
    <img className="course-img" src="IMAGE_SRC_HERE" alt="course" />
    <div>
      <h3>TITLE_HERE</h3>
      <p>DESCRIPTION_HERE</p>
    </div>
  </li>
);

const Form = _ => (
  <form>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Topic" />
    <button type="submit">Go!</button>
  </form>
);

const List = ({ items = [], className }) => <ul className={classNames(className)}>{/* MAP OVER ITEMS HERE */}</ul>;

const Navigation = _ => (
  <header>
    <span className="icn-logo">
      <i className="material-icons">code</i>
    </span>
    <ul className="main-nav">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/teachers">Teachers</NavLink>
      </li>
      <li>
        <NavLink to="/courses">Courses</NavLink>
      </li>
    </ul>
  </header>
);

const SectionWrapper = ({ className, children }) => (
  <div className={classNames('main-content', className)}>{children}</div>
);

const Teacher = _ => (
  <li className="teacher">
    <img className="teacher-img" src="IMG_SRC_HERE" alt="teacher" />
    <h3>NAME_HERE</h3>
    <p>BIO_HERE</p>
  </li>
);

const Topic = _ => (
  <li>
    <button>TOPIC_HERE</button>
  </li>
);
