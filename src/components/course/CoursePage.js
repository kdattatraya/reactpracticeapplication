import React,{ PropTypes } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component{
  constructor(props,context){
    super (props, context);
      this.state = {
    course: {title:""}
  };
  this.onTitleChange=this.onTitleChange.bind(this);
  this.onClickSave=this.onClickSave.bind(this);
  }

onTitleChange(event){
  const course= this.state.course;
  course.title=event.target.value;
  this.setState({course:course});
}

onClickSave(){
  this.props.dispatch(courseActions.createCourse(this.state.course));
  // console.log("HI");
  // alert(`Saving ${this.state.course.title}`);
}

courseRow(course,index){
  return <div key={index}>{course.title}</div>;
}
render(){
  return(
  <div>
  <h1>Courses</h1>
  {this.props.courses.map(this.courseRow)}
  <h2>Add Courses</h2>
  <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
  <input type="submit" onClick={this.onClickSave} value="Save" />
  </div>);
}
}

CoursePage.propTypes={
  dispatch:PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    courses: state.courses
  };
}

// function mapDispatchToPRops(){

// }

export default connect(mapStateToProps)(CoursePage);