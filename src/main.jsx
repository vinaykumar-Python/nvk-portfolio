import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const A='/images/';

function Reveal({children,className=''}){
  const [show,setShow]=useState(false);
  useEffect(()=>{const el=document.getElementById('reveal-'+Math.random())},[]);
  return <div className={`reveal ${className}`}>{children}</div>
}

const projects=[
 {n:'01',title:'ChurnGuard AI',subtitle:'Customer Churn Prediction & Retention Intelligence Platform',desc:'An end-to-end machine learning application that turns customer data into churn-risk predictions, analysis and retention-oriented decisions.',tags:['Python','Scikit-learn','Flask','REST API','MySQL'],images:['churnguard-01.jpg','churnguard-02.jpg','churnguard-03.jpg'],accent:'green',github:'https://github.com/vinaykumar-Python/ChurnGuard-ai'},
 {n:'02',title:'CivicCare AI',subtitle:'Civic Complaint & Urban Risk Intelligence Platform',desc:'A civic intelligence platform combining complaint workflows, AI-assisted classification, priority scoring, duplicate detection, SLA tracking and geospatial risk analysis.',tags:['FastAPI','SQLite','Python','Machine Learning','Leaflet'],images:['civiccare-01.jpg','civiccare-02.jpg','civiccare-03.jpg'],accent:'amber',github:'https://github.com/vinaykumar-Python/CivicCare-AI'}
];

function App(){
 const [menu,setMenu]=useState(false); const [active,setActive]=useState('home');
 useEffect(()=>{const on=()=>{const ids=['home','about','work','process','experience','contact']; let best='home'; ids.forEach(id=>{const el=document.getElementById(id);if(el&&window.scrollY>=el.offsetTop-180)best=id});setActive(best)};window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on)},[]);
 const go=(id)=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)};
 return <div className="site">
   <div className="grain"/><header className="nav"><button className="brand" onClick={()=>go('home')} aria-label="Home"><span>NVK</span><small>PYTHON · DATA · ML</small></button><button className="menuBtn" onClick={()=>setMenu(!menu)}>{menu?'CLOSE':'MENU'}</button><nav className={menu?'open':''}>{[['home','Home'],['about','About'],['work','Work'],['process','Process'],['experience','Experience'],['contact','Contact']].map(([id,l])=><button key={id} className={active===id?'active':''} onClick={()=>go(id)}>{l}</button>)}</nav></header>

   <main>
    <section id="home" className="hero section dark">
      <div className="heroGrid"/>
      <div className="heroCopy">
        <p className="eyebrow"><span className="dot"/> PYTHON DEVELOPER · DATA & MACHINE LEARNING</p>
        <h1>Building <em>data-driven</em><br/>applications that work.</h1>
        <p className="lead">I build practical systems with Python, SQL, machine learning and APIs — from reliable data pipelines to interfaces people can actually use.</p>
        <div className="actions"><button className="btn primary" onClick={()=>go('work')}>View selected work <span>↘</span></button><a className="btn ghost" href="mailto:vinaykumar.vkn21@gmail.com">Let's connect <span>↗</span></a></div>
        <div className="heroMeta"><span>Bengaluru, India</span><span>Open to entry-level roles</span><span>MCA · 2026</span></div>
      </div>
      <div className="heroVisual"><div className="portraitFrame"><img className="profileImage" src={A+'profile.jpg'} alt="N Vinay Kumar professional portrait"/><div className="portraitLine"/></div><div className="orbit orbit1"/><div className="orbit orbit2"/><div className="codeFloat">{'{'}<br/><span>build</span>: <b>"systems"</b><br/><span>ship</span>: <b>true</b><br/>{'}'}</div></div>
      <div className="scrollHint">SCROLL TO EXPLORE <span>↓</span></div>
    </section>

    <section className="intro section light"><div className="sectionLabel">/ 00 — POSITIONING</div><div className="introGrid"><h2>I don't just train models.<br/><strong>I build around them.</strong></h2><div><p className="bigCopy">My work sits between <b>software development, analytics and machine learning</b>. I care about the full path from messy input to a useful product.</p><p className="muted">That means clean data, measurable models, APIs, persistence and an interface that makes the output understandable.</p></div></div></section>

    <section id="about" className="about section light"><div className="sectionLabel">/ 01 — ABOUT ME</div><div className="introGrid"><div><h2>Hi, I'm Vinay.<br/><strong>I build by learning.</strong></h2></div><div><p className="bigCopy">I'm a Python developer focused on <b>data, analytics and machine learning</b>. I learn by building practical applications that turn real problems into working systems.</p><p className="muted">My work spans Python, SQL, machine learning, APIs, databases and data visualization. I enjoy moving from raw data and experimentation to an application that people can actually use.</p><p className="muted">I'm currently looking for entry-level opportunities in <b>Python Development, Data Analysis, Data Science and Machine Learning</b>.</p></div></div></section>

    <section id="work" className="work section dark2"><div className="sectionTop"><div><div className="sectionLabel lightText">/ 02 — SELECTED WORK</div><h2>Systems I've built.</h2></div><span className="count">02 FEATURED PROJECTS</span></div>
      {projects.map((p,i)=><article className={`project ${i===1?'reverse':''}`} key={p.title}>
        <div className="projectInfo"><div className="projectNo">{p.n}</div><p className="projectKicker">CASE STUDY</p><h3>{p.title}</h3><h4>{p.subtitle}</h4><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="projectLinks"><button className="textLink" onClick={()=>document.getElementById('process').scrollIntoView({behavior:'smooth'})}>See how I build <span>→</span></button><a className="textLink githubLink" href={p.github} target="_blank" rel="noopener noreferrer">View project on GitHub <span>↗</span></a></div></div>
        <div className={`projectVisual ${p.accent}`}><div className="windowBar"><span/><span/><span/><b>{p.title.toUpperCase()}</b></div><img src={A+p.images[0]} alt={`${p.title} main project screenshot`}/><div className="projectIndex">{p.n} / 03</div></div>
        <div className="projectShots"><img src={A+p.images[1]} alt={`${p.title} project screenshot 2`}/><img src={A+p.images[2]} alt={`${p.title} project screenshot 3`}/></div>
      </article>)}
    </section>

    <section id="process" className="process section light"><div className="sectionLabel">/ 03 — ENGINEERING PROCESS</div><div className="processHeader"><h2>BUILD THE SYSTEM,<br/><span>NOT JUST THE MODEL.</span></h2><p>Four stages describe the way I turn a problem into a usable application.</p></div><div className="processLine"/>
      <div className="steps">{[
        ['01','BUILD','Create the application structure, backend boundaries and core workflow.'],
        ['02','PREPARE','Clean, transform and shape reliable data for analysis and modeling.'],
        ['03','ANALYZE','Explore patterns, engineer features and evaluate model behavior.'],
        ['04','DEPLOY','Connect models to APIs, persistence and an interface people can use.']
      ].map((s,i)=><div className="step" key={s[0]}><div className="stepNo">{s[0]}</div><div><h3>{s[1]}</h3><p>{s[2]}</p></div><span className="stepArrow">{i<3?'→':'↗'}</span></div>)}</div>
    </section>

    <section className="pipeline section graphite"><div className="sectionLabel lightText">/ 04 — ENGINEERING THINKING</div><div className="pipelineHead"><h2>From raw data<br/><em>to a working system.</em></h2><p>The model is one component. The engineering around it is what makes it useful.</p></div><div className="pipelineTrack">{['DATA','PROCESSING','MODEL','API','DATABASE','INTERFACE'].map((x,i)=><div className="node" key={x}><span>0{i+1}</span><b>{x}</b>{i<5&&<i>→</i>}</div>)}</div></section>

    <section id="experience" className="experience section light"><div className="sectionLabel">/ 05 — EXPERIENCE</div><div className="experienceGrid"><div><h2>Data that answers<br/><strong>real questions.</strong></h2><p className="bigCopy">At <b>Bluestock Fintech</b>, I worked on financial statement data for 100+ Nifty-100 companies, using Python, Pandas and SQL to clean, transform, analyze and validate recurring KPI outputs.</p></div><div className="experienceCard"><span>DATA ANALYTICS INTERN</span><h3>Bluestock Fintech</h3><p>May — July 2026</p><div className="metric"><b>100+</b><span>companies analyzed</span></div><div className="metric"><b>Python + SQL</b><span>analysis, KPI extraction & validation</span></div></div></div></section>

    <section className="stack section dark"><div className="sectionLabel lightText">/ 06 — TECHNOLOGY</div><div className="stackHead"><h2>A focused stack.<br/><span>Built for shipping.</span></h2><p>I prefer tools that let me move from data and experiments to a reliable application without unnecessary complexity.</p></div><div className="stackGrid">{[['PROGRAMMING',['Python','SQL','OOP']],['DATA & ML',['Pandas','NumPy','Scikit-learn','EDA','Feature Engineering']],['APPLICATIONS',['Flask','FastAPI','REST APIs']],['DATA & STORAGE',['MySQL','SQLite','Power BI','Excel']],['DEVELOPMENT',['Git','GitHub','VS Code']]].map(([h,arr])=><div className="stackItem" key={h}><span>{h}</span><div>{arr.map(x=><b key={x}>{x}</b>)}</div></div>)}</div></section>

    <section className="education section light"><div className="sectionLabel">/ 07 — FOUNDATION</div><div className="eduGrid"><div><h2>Education &<br/><strong>credentials.</strong></h2></div><div className="timeline"><div><span>2024 — 2026</span><h3>MCA — Computer Science</h3><p>Sri Venkateswara College of Engineering, JNTUA · CGPA 8.8</p></div><div><span>2021 — 2024</span><h3>BSc</h3><p>Krishna Chaitanya Degree College · CGPA 8.7</p></div><div><span>CERTIFICATIONS</span><h3>Python & MySQL · Data Science</h3><p>NxtWave · IBM</p></div><div><span>ACHIEVEMENT</span><h3>College Coding Hackathon — Event Head</h3><p>Led a 20+ participant college-level coding event.</p></div></div></div></section>

    <section id="contact" className="contact section graphite"><div className="sectionLabel lightText">/ 08 — CONTACT</div><div className="contactWrap"><div><p className="eyebrow"><span className="dot"/> AVAILABLE FOR THE NEXT BUILD</p><h2>Let's build something<br/><em>useful.</em></h2></div><div className="contactSide"><p>Looking for opportunities in Python development, data analysis, data science and machine learning.</p><a href="mailto:vinaykumar.vkn21@gmail.com">vinaykumar.vkn21@gmail.com <span>↗</span></a><a href="tel:+917995957082">+91 79959 57082 <span>↗</span></a></div></div><footer><span>© {new Date().getFullYear()} N Vinay Kumar</span><span>Python · Data · Machine Learning</span><button onClick={()=>go('home')}>Back to top ↑</button></footer></section>
   </main>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
