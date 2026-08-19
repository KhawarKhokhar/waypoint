import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import AboutArea from '@/components/AboutArea';
import CounterArea from '@/components/CounterArea';
import GalleryArea from '@/components/GalleryArea';
import Footer from '@/components/Footer';

export const metadata = { title: 'About | Waypoint Assets' };

const About = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb title="About Us" />
      <AboutArea />
      <CounterArea />
      <GalleryArea />
      <Footer />
    </>
  );
};

export default About;
