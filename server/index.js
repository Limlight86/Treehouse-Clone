const { TeacherList, HTMLCourses, CSSCourses, JSCourses, Topics } = require('./data');

const express = require('express')
const app = express()

app.get('/teachers', (req, res) => res.send({ teachers: TeacherList }));

app.get('/teacher/:id', (req, res) => {
  const { id } = req.params
  const teacher = TeacherList.find(teacher => teacher.id === id)
  res.send({ teacher });
});

app.get('/courses/:topic', (req, res) => {
  const { topic } = req.params
  const courses = 
    {
      html : HTMLCourses,
      css : CSSCourses,
      javascript : JSCourses
    }[topic] || [];
  res.send({ courses });
});

const PORT = 5000

app.listen(PORT, ()=> console.log(`Server is listening on ${PORT}`));