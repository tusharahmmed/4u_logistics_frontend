import {Badge, type MenuProps} from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  MailOutlined,
  UnorderedListOutlined,
  UserOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import {USER_ROLE} from "./role";
import {useGetQuotesQuery} from "@/rtk/features/api/quoteApi";
import {USER_ROLE_PERMISSION} from "./global";

export const sidebarItems = (role: string, permissions: string[]) => {
  const query: Record<string, any> = {};
  query["status"] = "pending";

  const {data, isLoading} = useGetQuotesQuery({...query});
  const totalPending = data?.meta?.total;

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
          label: <Link href={`/profile/change-password`}>Change Password</Link>,
          key: `/profile/change-password`,
        },
      ],
    },
  ];

  const quoteItems: MenuProps["items"] = [
    {
      label: "Manage Quatation",
      key: "manage-quatation",
      icon: <UnorderedListOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/quote/pending`}>
              Pending <Badge count={totalPending}></Badge>
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

  const customerItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/customers`}>Manage Customer Request</Link>,
      icon: <TableOutlined />,
      key: `/${role}/customers`,
    },
  ];

  const driverItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/drivers`}>Manage Driver Request</Link>,
      icon: <MailOutlined />,
      key: `/${role}/drivers`,
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

  const adminSidebarItems: MenuProps["items"] = [...defaultSidebarItems];
  // check permissions and add sidebar options for admin & hr
  if (role === USER_ROLE.HR) {
    if (permissions.includes(USER_ROLE_PERMISSION.QUOTES)) {
      hrSidebarItems.push(...quoteItems);
    }
    if (permissions.includes(USER_ROLE_PERMISSION.DRIVERS)) {
      hrSidebarItems.push(...driverItems);
    }
    if (permissions.includes(USER_ROLE_PERMISSION.CUSTOMERS)) {
      hrSidebarItems.push(...customerItems);
    }
  }
  if (role === USER_ROLE.ADMIN) {
    if (permissions.includes(USER_ROLE_PERMISSION.QUOTES)) {
      adminSidebarItems.push(...quoteItems);
    }
    if (permissions.includes(USER_ROLE_PERMISSION.DRIVERS)) {
      adminSidebarItems.push(...driverItems);
    }
    if (permissions.includes(USER_ROLE_PERMISSION.CUSTOMERS)) {
      adminSidebarItems.push(...customerItems);
    }
  }

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...quoteItems,
    ...customerItems,
    ...driverItems,
    {
      label: <Link href={`/${role}/user`}>Manage User</Link>,
      icon: <UserOutlined />,
      key: `/${role}/user`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.HR) return hrSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
