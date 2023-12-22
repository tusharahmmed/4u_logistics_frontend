import Login from "@/components/login/Login";
import RootLayout from "@/layouts/RootLayout";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
