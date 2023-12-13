import {
  Corporate,
  CustomerRequestSection,
  Logistics,
} from "@/components/workWithUs";
import RootLayout from "@/layouts/RootLayout";

const WorkWithUs = () => {
  return (
    <>
      <Logistics />
      <Corporate />
      <CustomerRequestSection />
    </>
  );
};

export default WorkWithUs;

WorkWithUs.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
