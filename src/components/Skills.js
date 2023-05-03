import "../style/Skills.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  const htmlSkill = 80;
  const cssSkill = 75;
  const jsSkill = 70;
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className="skill-progress-container">
                          <div className="skill-progress-bar">
                            <CircularProgressbar
                              value={htmlSkill}
                              text={`${htmlSkill}%`}
                              styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: "round",
                                textSize: "18px",
                                pathTransitionDuration: 0.3,
                                pathColor: "#F46C3A",
                                trailColor: `rgba(0, 0, 0, 0.7)`,
                                textColor: "#B8B8B8",
                              })}
                            />
                            <h5 className="skill-text">HTML</h5>
                          </div>
                          <div className="skill-progress-bar">
                            <CircularProgressbar
                              value={cssSkill}
                              text={`${cssSkill}%`}
                              styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: "round",
                                textSize: "18px",
                                pathTransitionDuration: 0.3,
                                pathColor: "#3A9BD4",
                                trailColor: `rgba(0, 0, 0, 0.7)`,
                                textColor: "#B8B8B8",
                              })}
                            />
                            <h5 className="skill-text">CSS</h5>
                          </div>
                          <div className="skill-progress-bar">
                            <CircularProgressbar
                              value={jsSkill}
                              text={`${jsSkill}%`}
                              styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: "round",
                                textSize: "18px",
                                pathTransitionDuration: 0.3,
                                pathColor: "#F2DA1B",
                                trailColor: `rgba(0, 0, 0, 0.7)`,
                                textColor: "#B8B8B8",
                              })}
                            />
                            <h5 className="skill-text">Javascript</h5>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;