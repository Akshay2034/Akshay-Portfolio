import React from 'react'; 
import {FaReact, FaPython, FaGitAlt, FaGithub, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        Python: <FaPython/>,
        Postman: <SiPostman/>,
        Reactjs: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
