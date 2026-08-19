import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceArea from '@/components/ServiceArea';
import WorkProcess from '@/components/WorkProcess';
import Footer from '@/components/Footer';

export const metadata = { title: 'Services | Waypoint Assets' };

const Services = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb title="Services" />
      <ServiceArea />
      <WorkProcess />
      <Footer />
    </>
  );
};

export default Services;
