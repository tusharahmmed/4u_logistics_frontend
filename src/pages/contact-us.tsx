import {Contact, FormSection} from "@/components/contactUs";
import RootLayout from "@/layouts/RootLayout";

const ContactUsPage = () => {
  return (
    <>
      <FormSection />
      <Contact />
    </>
  );
};

export default ContactUsPage;

ContactUsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
