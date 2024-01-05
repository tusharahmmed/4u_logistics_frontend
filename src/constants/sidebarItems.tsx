import {Badge, type MenuProps} from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import {USER_ROLE} from "./role";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/profile`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const hrSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `/${role}/courses`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Quatation",
      key: "manage-quatation",
      icon: <TableOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/quote/pending`}>
              Pending <Badge count={1}></Badge>
            </Link>
          ),
          key: `/${role}/quote/pending`,
        },
        {
          label: <Link href={`/${role}/quote/completed`}>Completed</Link>,
          key: `/${role}/quote/completed`,
        },
        {
          label: <Link href={`/${role}/quote/cancled`}>Cancled</Link>,
          key: `/${role}/quote/cancled`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Quatation",
      key: "manage-quatation",
      icon: <TableOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/quote/pending`}>
              Pending <Badge count={1}></Badge>
            </Link>
          ),
          key: `/${role}/quote/pending`,
        },
        {
          label: <Link href={`/${role}/quote/completed`}>Completed</Link>,
          key: `/${role}/quote/completed`,
        },
        {
          label: <Link href={`/${role}/quote/cancled`}>Cancled</Link>,
          key: `/${role}/quote/cancled`,
        },
      ],
    },
    // {
    //   label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
    //   icon: <TableOutlined />,
    //   key: `/${role}/admin`,
    // },
    // {
    //   label: <Link href={`/${role}/user`}>Manage User</Link>,
    //   icon: <TableOutlined />,
    //   key: `/${role}/user`,
    // },
    // {
    //   label: "Management",
    //   key: "management",
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       label: <Link href={`/${role}/department`}>Department</Link>,
    //       key: `/${role}/department`,
    //     },
    //   ],
    // },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.HR) return hrSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
