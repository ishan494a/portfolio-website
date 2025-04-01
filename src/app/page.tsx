import Navbar from '../components/Navbar';
import Title from '../components/Title';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='font-mono'>
      <Navbar />
      <Title />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}