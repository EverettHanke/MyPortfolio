import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <div className="skills">
        <div>
          <h2 className="title">Skills:</h2>
          <div className="scroller">
            <div className="itemL skill1"><h1>Natural Leader</h1></div>
            <div className="itemL skill2"><h1>Team Player</h1></div>
            <div className="itemL skill3"><h1>Scrum Master</h1></div>
            <div className="itemL skill4"><h1>Problem-solving</h1></div>
            <div className="itemL skill5"><h1>Debugging</h1></div>
            <div className="itemL skill6"><h1>Server-Side Validation</h1></div>
            <div className="itemL skill7"><h1>Agile Methodology</h1></div>
          </div>
        </div>
        <div>
          <h2 className="title">Languages:</h2>
          <div className="scroller">
            <div className="itemR lang1"><img src="/icons/java.png" className="langImage" /><p>Java</p></div>
            <div className="itemR lang2"><img src="/icons/java-script.png" className="langImage" /><p>JavaScript</p></div>
            <div className="itemR lang3"><img src="/icons/python.png" className="langImage" /><p>Python</p></div>
            <div className="itemR lang4"><img src="/icons/kotlin.png" className="langImage" /><p>Kotlin</p></div>
            <div className="itemR lang5"><img src="/icons/c-sharp-.png" className="langImage" /><p>C#</p></div>
            <div className="itemR lang6"><img src="/icons/php-programming-language.png" className="langImage" /><p>PHP</p></div>
            <div className="itemR lang7"><img src="/icons/SQL.png" className="langImage" /><p>SQL</p></div>
            <div className="itemR lang8"><img src="/icons/html.png" className="langImage" /><p>HTML</p></div>
            <div className="itemR lang9"><img src="/icons/css-3.png" className="langImage" /><p>CSS</p></div>
            <div className="itemR lang10"><img src="/icons/c++.png" className="langImage" /><p>C++</p></div>
            <div className="itemR lang11"><img src="/icons/UnrealEngineBP.png" className="langImage" /><p>BluePrints</p></div>
            <div className="itemR lang12"><img src="/icons/typescript.png" className="langImage" /><p>TypeScript</p></div>
            <div className="itemR lang13"><img src="/icons/xml.png" className="langImage" /><p>XML</p></div>
          </div>
        </div>
        <div>
          <h2 className="title">Frameworks:</h2>
          <div className="scroller">
            <div className="itemL frame1"><img src="/icons/tail.png" className="langImage" /> <p>Tailwind</p></div>
            <div className="itemL frame2"><img src="/icons/php-programming-language.png" className="langImage" /><p>Fat-Free MVC</p></div>
            <div className="itemL frame3"><img src="/icons/nodejs.png" className="langImage" /><p>Node.JS MVC</p></div>
            <div className="itemL frame4"><img src="/icons/react.png" className="langImage" /><p>React.JS</p></div>
            <div className="itemL frame5"><img src="/icons/jquery.png" className="langImage" /><p>JQuery</p></div>
            <div className="itemL frame6"><img src="/icons/ORM.png" className="langImage" /><p>ORM</p></div>
            <div className="itemL frame7"><img src="/icons/Mircosoft.png" className="langImage" /><p>Microsoft Entity Framework</p></div>
            <div className="itemL frame8"><img src="/icons/angular.png" className="langImage" /><p>Angular</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
