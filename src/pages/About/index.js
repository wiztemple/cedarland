import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const a = 0;
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="py-40">
        <div className="md:px-20">
          <h1 className="md:text-7xl font-bold text-4xl dark:text-white">About Us</h1>
          <p className="pt-5 text-lg text-gray-600">Cedarland was founded in 2012 by Arc. Nwagwu Chijindu Young.</p>
        </div>
      </section>
      <section>
        <div>
          <img src="https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="images" />
        </div>
      </section>
      <section>
        <div className="md:flex md:px-20 md:py-40 md:space-x-10">
          <div className="md:w-1/2 bg-yellow-600 bg-opacity-10 px-6 py-10 rounded-lg dark:bg-gray-800 dark:text-white">
            <h1 className="text-center md:text-4xl font-medium">
              What we do
            </h1>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor placerat
              ante,
              id euismod lacus convallis at. Aenean lorem enim, sollicitudin sit amet eros nec,
              blandit commodo orci.
            </p>
            <p className="pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor placerat
              ante,
              id euismod lacus convallis at. Aenean lorem enim, sollicitudin sit amet eros nec,
              blandit commodo orci.
            </p>
          </div>
          <div className="md:w-1/2 p-6 bg-cream rounded-lg dark:bg-gray-700 dark:text-gray-300">
            <h1 className="text-center text-4xl font-medium">
              Who we serve
            </h1>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor placerat
              ante,
              id euismod lacus convallis at. Aenean lorem enim, sollicitudin sit amet eros nec,
              blandit commodo orci.
            </p>
            <p className="pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor placerat
              ante,
              id euismod lacus convallis at. Aenean lorem enim, sollicitudin sit amet eros nec,
              blandit commodo orci.
            </p>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default About;
