import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Projects = () => {
  // eslint-disable-next-line no-unused-vars
  const a = 9;

  return (
    <div className="bg-cream dark:bg-kiwi">
      <section>
        <Navbar />
      </section>
      <section className="md:px-20 md:py-52">
        <h1 className="text-7xl font-semibold text-cedarland dark:text-snowgrey">
          A collection of recently
          <br />
          completed projects.
        </h1>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Projects;
