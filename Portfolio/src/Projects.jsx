import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2 className="title">Projects</h2>
      <div id="projectContainer">
        <a href="https://github.com/EverettHanke/ProductivityTracker" target="_blank" rel="noopener noreferrer" className="projectButton">
          <div className="project">
            <h3>Productivity Tracker</h3>
            <div className="imgContainer">
              <img src="/images/ProductivityTracker.png" alt="Productivity Tracker" className="projectImg" />
            </div>
            <p>Productivity tracker that allows you to set up items to do, daily repeated tasks, with customizable themes for both Windows and Mac.</p>
            <p className="skillsUsed">Skills: TypeScript, JavaScript, React Electron, LocalStorage</p>
          </div>
        </a>
        <a href="https://github.com/EverettHanke/passwordManager" target="_blank" rel="noopener noreferrer" className="projectButton">
          <div className="project">
            <h3>Password Manager</h3>
            <div className="imgContainer">
              <img src="/images/PasswordManager.png" alt="Password Manager" className="projectImg" />
            </div>
            <p>A Password Manager App that allows users to easily create update and delete passwords in their own personal vault</p>
            <p className="skillsUsed">Skills: Python, SQLite, Tkinter, Cryptography, Pyperclip</p>
          </div>
        </a>
        <a href="https://www.fab.com/listings/2a28fd5a-4610-4b3a-b359-7672eb9e4e17" target="_blank" rel="noopener noreferrer" className="projectButton">
          <div className="project">
            <h3>Twin Stick Shooter Template</h3>
            <div className="imgContainer">
              <img src="/images/TSSTemplate.png" alt="Twin Stick Shooter Template" className="projectImg" />
            </div>
            <p>A Full Game Template for a Twin Stick Shooter. Complete with AI, Highly customizable weapons and enemies, packaged up and multiplayer ready </p>
            <p className="skillsUsed">Skills: Unreal Engine, Blueprints, C++, Network replication, Advanced AI, Component based programming</p>
          </div>
        </a>
        <a href="https://github.com/EverettHanke/CanineCompassionCenter" target="_blank" rel="noopener noreferrer" className="projectButton">
          <div className="project">
            <h3>Canine Compassion Center</h3>
            <div className="imgContainer">
              <img src="/images/CanineCompassion.png" alt="Canine Compassion Center" className="projectImg" />
            </div>
            <p>A web page that allows users to view and schedule appointments with adoptable dogs.</p>
            <p className="skillsUsed">Skills: Fat-Free MVC, PHP, HTML, CSS, SQL, Agile methodologies</p>
          </div>
        </a>
        <a href="https://www.fab.com/listings/dd457ed4-408c-4810-be82-fdae6dc0eb55" target="_blank" rel="noopener noreferrer" className="projectButton">
          <div className="project">
            <h3>Radial Wheel Menu Template</h3>
            <div className="imgContainer">
              <img src="/images/RadialWheel1.png" alt="Radial Wheel Menu" className="projectImg" />
            </div>
            <p>A Radial Wheel Menu for purchase on the Unreal Engine Marketplace. Create a highly customizable radial menu for your players.</p>
            <p className="skillsUsed">Skills: Unreal Engine, Blueprints, Network replication, UI/UX </p>
          </div>
        </a>
        <a href="https://github.com/TeamBeetle" target="_blank" rel="noopener noreferrer" className="projectButton">
          <div className="project">
            <h3>Applicant Tracking Tool</h3>
            <div className="imgContainer">
              <img src="/images/ApplicantTrackingTool.jpg" alt="Applicant Tracking Tool" className="projectImg" />
            </div>
            <p>Full Stack Web App that allows users to keep track of Job applications sending users alerts to check up on past job applications</p>
            <p className="skillsUsed">Skills: PHP, HTML, CSS, Bootstrap, SQL, Agile methodologies, Sprints</p>
          </div>
        </a>
        <a href="https://www.fab.com/listings/36ff5f4f-ed1e-4777-af58-558d41b67964" target="_blank" rel="noopener noreferrer" className="projectButton">
          <div className="project">
            <h3>BodyCam Effects</h3>
            <div className="imgContainer">
              <img src="/images/BodyCam.png" alt="Body Cam Project" className="projectImg" />
            </div>
            <p>Unreal Engine plugin that allows game developers to quickly add visual post-processing materials to a player camera.</p>
            <p className="skillsUsed">Skills: Unreal Engine, Blueprints, Component based programming, Material Node programming</p>
          </div>
        </a>
        <a href="https://store.steampowered.com/app/2117420/Prime_Horror_II/" target="_blank" rel="noopener noreferrer" className="projectButton">
          <div className="project">
            <h3>Prime Horror II</h3>
            <div className="imgContainer">
              <img src="/images/PrimeHorror.png" alt="Prime Horror II" className="projectImg" />
            </div>
            <p>A First Person Multiplayer Horror game available for free on Steam</p>
            <p className="skillsUsed">Skills: Unreal Engine, Multiplayer, C++, Blueprints, Network replication, Steam API</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
