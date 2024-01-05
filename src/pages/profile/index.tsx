import DashboardLayout from "@/layouts/DashboardLayout";
import PrivateRotes from "@/layouts/PrivateRotes";
import React from "react";

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
};

export default Profile;
Profile.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <PrivateRotes>
      <DashboardLayout>{page}</DashboardLayout>
    </PrivateRotes>
  );
};
