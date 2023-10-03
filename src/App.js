import "./index.css";
import React from "react";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="pic.jpg" alt="" />;
}
function Intro() {
  return (
    <p>
      Web Developer at BYOD, Hoping for any future opprtunities available.
      Hoping to break into tech soon. See you soon.
    </p>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🥪" color="red"/>
      <Skill skill="HTML" emoji="👎" color="blue"/> 
      <Skill skill="CSS" emoji="👍 " color="green"/>
      <Skill skill="JAVA" emoji="🍎" color="yellow"/> 
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor:props.color}}>
      {" "}
      <span>
        {" "}
        {props.skill + ""}
        {props.emoji}
      </span>{" "}
    </div>
  );
}

export default App;
