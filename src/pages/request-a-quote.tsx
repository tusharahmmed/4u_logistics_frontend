import QuoteFormSection from "@/components/request_a_quote/QuoteFormSection";
import RootLayout from "@/layouts/RootLayout";

const RequestQuote = () => {
  return (
    <>
      <QuoteFormSection />
    </>
  );
};

export default RequestQuote;

RequestQuote.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
