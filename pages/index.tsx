import ScrollToTop from '@/components/ScrollToTop';
import Works from '@/components/works/works';
import CustomLayout from '@/layouts/customLayout/CustomLayout';
import MainLayout from '@/layouts/oldLayout/mainLayout';


export default function Home() {
  return (
    <CustomLayout>
      <ScrollToTop />
      <Works />
    </CustomLayout>
  );
}
