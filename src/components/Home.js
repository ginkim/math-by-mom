import React, { Component } from 'react';
import '../App.css';
import Student from './Student';
import MenuButton from './MenuButton';

const students = [
  {
    name : 'Emily', 
    age : 4
  },
  {
    name : 'Brianna',
    age: 2 
  },
 {
    name : 'Ash',
    age : 1
 }
];

localStorage.setItem('students', JSON.stringify(students));

class Home extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        students : JSON.parse(localStorage.getItem('students')),
        topic : 'addition'
      };
  
      this.onClick = this.onClick.bind(this);
      this.onStudentAdd = this.onStudentAdd.bind(this);
    }

    getStudents() {
      return this.state.students;
    }

    componentWillMount() {
      const students = this.getStudents();
  
      this.setState({
        students : students
      });
    }
  
    onClick(e) {
  
      // this.setState is asynchronous so use callback to see the updated state
      this.setState({
        topic : e.target.textContent
      }, () => {
        alert('you chose ' + this.state.topic);
      });
  
      
    }

    onStudentAdd() {

      const students = this.getStudents();
      students.push(
        {
          name: 'Mr. Grinch',
          age: 100
        }
      )

      this.setState({
        students: students
      })
    }
  
  
  
  
    render() {
  
      const topics = [
        "addition",
        "subtraction",
        "multiplication",
        "division"
      ];
  
      return (
        <div>
          
            <h2> Hi! Who is up for a challenge? </h2>
            {
              this.state.students.map(student => {
                return (                 
                  <Student 
                    key={student.name}
                    student={student}/>
                );
              })
            }

            <div>
              Don't see your name? Click the add button and add your name!
              <button onClick={this.onStudentAdd}>Add</button>
            </div>
            
            <hr/>
          
            <h2>Choose a topic</h2>
  
            <div className="menuContainer">
            {
              topics.map(topic => {
                return (
                  <div key={topic}>
                    <MenuButton 
                      title={topic} 
                      onClick={this.onClick}/>
                  </div>
                )
              })
            }
            </div>
  
        </div>
      );
    }
  }
  
  export default Home;