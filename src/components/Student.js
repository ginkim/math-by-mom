import React, { Component } from 'react';

class Student extends Component {

    
    render() {
        const { student } = this.props;

        return (

            <div>{student.name}, aged {student.age}</div>
        );

        
    }

}

export default Student;