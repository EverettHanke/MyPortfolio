import React from 'react';
import java from '/icons/java.png';
import javascript from '/icons/java-script.png';
import python from '/icons/python.png';
import kotlin from '/icons/kotlin.png';
import csharp from '/icons/c-sharp-.png';
import php from '/icons/php-programming-language.png';
import sql from '/icons/SQL.png';
import html from '/icons/html.png';
import css from '/icons/css-3.png';
import cpp from '/icons/c++.png';
import unreal from '/icons/UnrealEngineBP.png';
import typescript from '/icons/typescript.png';
import xml from '/icons/xml.png';
import tailwind from '/icons/tail.png';
import nodejs from '/icons/nodejs.png';
import reactjs from '/icons/react.png';
import jquery from '/icons/jquery.png';
import orm from '/icons/ORM.png';
import entity from '/icons/Mircosoft.png';
import angular from '/icons/angular.png';


function Skills() {
  return (
    <section id="skills">
      <div className="skills">
        <div>
          <h2 className="title">Skills:</h2>
          <div className="scroller">
            <div className="itemL skill1"><h3>Natural Leader</h3></div>
            <div className="itemL skill2"><h3>Team Player</h3></div>
            <div className="itemL skill3"><h3>Scrum Master</h3></div>
            <div className="itemL skill4"><h3>Problem-solving</h3></div>
            <div className="itemL skill5"><h3>Debugging</h3></div>
            <div className="itemL skill6"><h3>Server-Side Validation</h3></div>
            <div className="itemL skill7"><h3>Agile Methodology</h3></div>
          </div>
        </div>
        <div>
          <h2 className="title">Languages:</h2>
          <div className="scroller">
            <div className="itemR lang1"><img src={java} className="langImage" /><p>Java</p></div>
            <div className="itemR lang2"><img src={javascript} className="langImage" /><p>JavaScript</p></div>
            <div className="itemR lang3"><img src={python} className="langImage" /><p>Python</p></div>
            <div className="itemR lang4"><img src={kotlin} className="langImage" /><p>Kotlin</p></div>
            <div className="itemR lang5"><img src={csharp} className="langImage" /><p>C#</p></div>
            <div className="itemR lang6"><img src={php} className="langImage" /><p>PHP</p></div>
            <div className="itemR lang7"><img src={sql} className="langImage" /><p>SQL</p></div>
            <div className="itemR lang8"><img src={html} className="langImage" /><p>HTML</p></div>
            <div className="itemR lang9"><img src={css} className="langImage" /><p>CSS</p></div>
            <div className="itemR lang10"><img src={cpp} className="langImage" /><p>C++</p></div>
            <div className="itemR lang11"><img src={unreal} className="langImage" /><p>BluePrints</p></div>
            <div className="itemR lang12"><img src={typescript} className="langImage" /><p>TypeScript</p></div>
            <div className="itemR lang13"><img src={xml} className="langImage" /><p>XML</p></div>
          </div>
        </div>
        <div>
          <h2 className="title">Frameworks:</h2>
          <div className="scroller">
            <div className="itemL frame1"><img src={tailwind} className="langImage" /> <p>Tailwind</p></div>
            <div className="itemL frame2"><img src={php} className="langImage" /><p>Fat-Free MVC</p></div>
            <div className="itemL frame3"><img src={nodejs} className="langImage" /><p>Node.JS MVC</p></div>
            <div className="itemL frame4"><img src={reactjs} className="langImage" /><p>React.JS</p></div>
            <div className="itemL frame5"><img src={jquery} className="langImage" /><p>JQuery</p></div>
            <div className="itemL frame6"><img src={orm} className="langImage" /><p>ORM</p></div>
            <div className="itemL frame7"><img src={entity} className="langImage" /><p>Microsoft Entity Framework</p></div>
            <div className="itemL frame8"><img src={angular} className="langImage" /><p>Angular</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;