"use client"

import Footer from './components/footer';
import Hero from './components/hero';
import Projects from './components/projects';
import TechStack from './components/techstack';

export default function Home() {

  return (
    <div>
      <Hero />
      <p className=' p-3 text-justify	'>
      Data Science professional with over 3 years of experience in data engineering, machine learning, and software development. Skilled in building efficient data pipelines, developing forecasting models, and designing analytics platforms using tools like SQL, PowerBI, Docker, and Django. 
      </p>
      <p className=' p-3 text-justify	'>
      Experienced in IoT data engineering, improving system performance, and handling large-scale data streaming tasks. Proficient in implementing CI/CD workflows and creating innovative solutions in diverse domains. Currently pursuing a Master of Data Science, focusing on advanced topics such as deep learning and data engineering, with a track record of delivering reliable and impactful results.
      </p>
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}
