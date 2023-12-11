import {
  Logistics,
  News,
  Partners,
  StartToday,
  Stats,
  Why4u,
} from "@/components/home";
import RootLayout from "@/layouts/RootLayout";

export default function Home() {
  return (
    <>
      <Why4u />
      <Stats />
      <Logistics />
      <News />
      <Partners />
      <StartToday />
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
