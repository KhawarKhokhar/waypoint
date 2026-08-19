import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import ContactMain from '@/components/ContactMain';
import Footer from '@/components/Footer';

export const metadata = { title: 'Contact | Waypoint Assets' };

const Contact = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb title="Contact Us" />
      <ContactMain />
      <Footer />
    </>
  );
};

export default Contact;
