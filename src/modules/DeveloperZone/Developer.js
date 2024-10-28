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
            <a href="/Himanshu-Sharmacv.pdf" download>
              Download CV
            </a>
          </li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <h1 className={styles.title}>Hi, I'm <span>Himanshu Sharma</span></h1>
        <p className={styles.subtitle}>Full Stack Developer Crafting Modern Web Experiences</p>
        <a href="#projects" className={styles.ctaButton}>See My Work</a>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <h2>About Me</h2>
        <p>I am a developer with a passion for creating sleek and functional web applications that engage and inspire users.</p>
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
            <h3>Project 1</h3>
            <p>Details about the project, its highlights, and the technologies used.</p>
          </div>
          <div className={styles.projectCard}>
            <h3>Project 2</h3>
            <p>Details about the project, its highlights, and the technologies used.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <h2>Contact Me</h2>
        <p>If you’d like to work together or just say hello, reach out!</p><br/>
        <br/>
        <a href="mailto:sharmahimanshu2429@gmail.com" className={styles.contactButton}>Let's Connect</a>
      </section>
    </div>
  );
}

export default Developer;
