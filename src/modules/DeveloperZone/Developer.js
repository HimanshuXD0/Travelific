import React from 'react';
import styles from './Developer.module.css';

function Developer() {
  return (
    <div className={styles.Developer}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>My Portfolio</div>
        <ul className={styles.navLinks}>
          <li>
            <a href="https://drive.google.com/file/d/14YFH3_HDBzxUN4gjUmu-JGEQAYviK74m/view?usp=sharing">
              Resume
            </a>
          </li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul> </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <h1 className={styles.title}>Hi, I'm <span>Himanshu Sharma</span></h1>
        <p className={styles.subtitle}>Full Stack Developer Crafting Modern Web and Mobile Applications Experiences</p>
        <a href="#projects" className={styles.ctaButton}>See My Work</a>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <h2>About Me</h2>
        <p>An enthusiastic engineer with a solid grasp of coding and a passion for building innovative solutions. Driven by
          real-world challenges, I thrive in inspirational environments and aim to use my skills to contribute to
          meaningful projects and advancements..</p>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.experience}>
        <h2>Experience</h2>
        <p>With a background in both frontend and backend development, I've been able to contribute to diverse projects across various industries.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectList}>
          <div className={styles.projectCard}>
            <h3>Travelific</h3>
            <p>This mern website goal is to provide the platform for traveling
              enthusiasts and tour and travel agency to commiuncate over each
              other by providing their requriment and budget respectively
              • Firstly i designed the idea to implement this approch and start with
              making ui/ux using reactJS (Used Redux saga state management
              throught the app) then by following the frontend requirement i wrote
              the backend in nodejs on express js framework with MongoDB and
              created the desired secure apis , afterward i made the application
              live by deploying on render.com
              • Authentication login/signup (token based API's )
              • Scalable/Robust (use MongoDB atlas)
              • Having admin panel mobile app (written in FLUTTER)</p>
            <h1>Skills Developed: React.js, Redux, NodeJs, ExpressJs, MongoDB,
              Flutter</h1>
            <a href='https://travelific.onrender.com/'>Visit Site </a>
            &nbsp;&nbsp;&nbsp;
            <a href='https://github.com/HimanshuXD0/Travelific'>Source Code</a>

          </div>
          <div className={styles.projectCard}>
            <h3>eKalakar</h3>
            <p>
              The eKalakaar App connects traditional Indian artists with opportunities from corporations, NGOs, hotels, and more, empowering them with visibility, fair pay, and skill development. It offers curated performances, supports cultural heritage, and has served top brands. Free to register,
              eK provides job listings, portfolio tools, and updates for artists.</p>
            <h1> Skills Developed: Flutter, Dart, Firebase</h1>
            <a href='https://play.google.com/store/apps/details?id=com.tanxe.android.ekalakaar_app'>Visit App </a>
            &nbsp;&nbsp;&nbsp;
            <a href=''>Source Code</a>

          </div>
          <div className={styles.projectCard}>
            <h3>Groupie</h3>
            <p>The hybrid mobile app is developed using Flutter, leveraging
              Firebase for cloud storage and enabling authentication through
              Google. It features a group chatting functionality with real-time
              updates, ensuring a dynamic and interactive user experience.
              • Started taking the Architecture of project and start writting the front
              code followed by bakend integartion
              • Send and Recieve Data from Server interacted UI/UX
            </p>
            <h1> Skills Developed: Flutter, Figma, Dart, Firebase</h1>
            <a href='https://www.mediafire.com/file/atz5wl1wunkgj71/Groupie.apk/file'>Visit App </a>
            &nbsp;&nbsp;&nbsp;
            <a href='https://github.com/HimanshuXD0/Groupie'>Source Code</a>

          </div>
          <div className={styles.projectCard}>
            <h3>Newsify</h3>
            <p>
                 Newsify is the news tracking application written in Kotlin 3 yrs back by me
                 it is pure native app for android uses the api to fetch the data from the source and 
                 disply it on the recycler view 
              </p>
            <h1> Skills Developed: Kotlin, Api Consumption </h1>
            <a href='https://drive.google.com/file/d/18zhyYNf9IY7JGAmU_b7PqyBZ70rwm3oR/view?usp=sharing'>Visit App </a>
            &nbsp;&nbsp;&nbsp;
            <a href='https://github.com/HimanshuXD0/Newsify'>Source Code</a>

          </div>
          <div className={styles.projectCard}>
            <h3>Ceverything</h3>
            <p>
                Ceverything is the multi service platform app which provides the bookings of hotel, food, pay bills, Flight Tickets, Hospitality Services 
                on just one platform itself basically it is as of now frontend part only that will showcase my frontend ablity to write the figma file as it is
              </p>
            <h1> Skills Developed: Flutter,Dart,Figma </h1>
            <a href='https://www.mediafire.com/file/4zqzbl7awpnnqx0/Ceverything.apk/file'>Visit App </a>
            &nbsp;&nbsp;&nbsp;
            <a href='https://github.com/HimanshuXD0/Ceverything'>Source Code</a>

          </div>
          <div className={styles.projectCard}>
            <h3>CRM</h3>
            <p>
                CRM is the Online Work management platform by which employes can work togther without missing the the tasks. Having
                inbuilt chating functionality to being in the connection on work user can check in check out online by time
              </p>
            <h1> Skills Developed: Flutter,Dart,Figma,UI/UX </h1>
            <a href='https://drive.google.com/file/d/1jtsZUUNlquDjgFRhJHsDOCillz5msifH/view?usp=sharing'>See Demonstration </a>
            &nbsp;&nbsp;&nbsp;
            <a href='https://github.com/HimanshuXD0/CRM'>Source Code</a>

          </div>

          <h1> Connect with me for many other projects which is completely made by me</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <h2>Contact Me</h2>
        <p>If you’d like to work together or just say hello, reach out!</p><br />
        <br />
        <a href="mailto:sharmahimanshu2429@gmail.com" className={styles.contactButton}>Let's Connect</a>
      </section>
    </div>
  );
}

export default Developer;
