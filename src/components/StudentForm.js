import React from "react";
import { Component } from "react";

class Student extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            skills: [],
            gender:'false'
        }
    }

    onNameChange=(event)=>{
        this.setState({
            name: event.target.value
        }, ()=> {
            console.log(this.state.name);
        })
    }
    onSkillsChange=(event)=>{
        const isChecked=event.target.checked
        if(isChecked){
            // this.state.skills.push(event.target.value)
            // skills:{...this.state.skills, event.target.value}
            this.setState({
                skills:[...this.state.skills, event.target.value]
            })
        }
    }

    handleSubmit=e=>{
        e.preventDefault();
        console.log("Name:"+this.state.name+" Skills:"+this.state.skills);
    }

    render(){
        return(
            <div className="text-center">
                <h1>Student Details:</h1>
               <form onSubmit={this.handleSubmit}>
               <div>
                    <label htmlFor="name">Student Name</label>
                    <input type="text" placeholder="enter student name" required name="name" value={this.state.name} onChange={this.onNameChange}></input>
                </div>

                <div>
                    <label htmlFor="skills">Skills:</label>
                    <br></br>
                    C<input type="checkbox" name="skills" value="C" onChange={this.onSkillsChange}></input>
                    Java<input type="checkbox" name="skills" value="Java" onChange={this.onSkillsChange}></input>
                    Python<input type="checkbox" name="skills" value="Python" onChange={this.onSkillsChange}></input>
                    Javascript<input type="checkbox" name="skills" value="Javascript" onChange={this.onSkillsChange}></input>
                </div>
            <button type="submit">Submit</button>
               </form>
            </div>
        )
    }
}

export default Student;