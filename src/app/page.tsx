import Navbar from '../components/Navbar';
import Title from '../components/Title';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Footer from '@/components/Footer';

export default function Home() {
  return (
      <div
        className='font-mono bg-gray text-white'
        style={{ backgroundColor: 'rgb(13, 13, 13)', color: '#ffffff' }} // Inline styles here
      >
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4">
        <Title />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}