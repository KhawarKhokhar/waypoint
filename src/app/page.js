import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import AboutArea from '@/components/AboutArea';
import ServiceArea from '@/components/ServiceArea';
import GalleryArea from '@/components/GalleryArea';
import CounterArea from '@/components/CounterArea';
import ContactForm from '@/components/ContactForm';
import WorkProcess from '@/components/WorkProcess';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutArea />
      <ServiceArea />
      <GalleryArea />
      <CounterArea />
      <ContactForm />
      <WorkProcess />
      <Footer />
    </>
  );
};

export default Home;
