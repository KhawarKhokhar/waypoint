import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import TermsMain from '@/components/TermsMain';
import Footer from '@/components/Footer';

export const metadata = { title: 'Terms and Conditions | Waypoint Assets' };

const Terms = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb title="Terms and Conditions" />
      <TermsMain />
      <Footer />
    </>
  );
};

export default Terms;
