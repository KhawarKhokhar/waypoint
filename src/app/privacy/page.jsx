import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import PrivacyMain from '@/components/PrivacyMain';
import Footer from '@/components/Footer';

export const metadata = { title: 'Privacy Policy | Waypoint Assets' };

const Privacy = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb title="Privacy Policy" />
      <PrivacyMain />
      <Footer />
    </>
  );
};

export default Privacy;
