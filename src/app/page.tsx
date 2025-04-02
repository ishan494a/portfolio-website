import Navbar from '../components/Navbar';
import Title from '../components/Title';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Footer from '@/components/Footer';
import WorkEx from '@/components/WorkEx';

export default function Home() {
  return (
      <div
        className='font-mono bg-gray text-white'
        style={{ backgroundColor: 'rgb(10, 10, 10)', color: '#ffffff' }} // Inline styles here
      >
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4">
        <Title />
        <AboutMe />
        {/* <WorkEx /> */}
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}