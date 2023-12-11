import {inter, sans} from "@/fonts/fonts";
import React from "react";
import {ConfigProvider} from "antd";

interface IProvider {
  children: React.ReactElement | any;
}

const Provider = ({children}: IProvider) => {
  return (
    <div className={`${inter.variable} ${sans.variable}`} id="_4u">
      <ConfigProvider>{children}</ConfigProvider>
    </div>
  );
};

export default Provider;
