import ActionBar from "@/components/ui/ActionBar";
import FBreadCrumb from "@/components/ui/FBreadCrumb";
import FTable from "@/components/ui/FTable";
import DashboardLayout from "@/layouts/DashboardLayout";
import {Button, Input, message} from "antd";
import Link from "next/link";
import {useState} from "react";
import {DeleteOutlined, EditOutlined, ReloadOutlined} from "@ant-design/icons";
import {useDebounced} from "@/rtk/hooks";
import FModal from "@/components/ui/FModal";
import dayjs from "dayjs";
import {
  useDeleteDriverRequestMutation,
  useGetDriverRequestsQuery,
} from "@/rtk/features/api/driverApi";

const UserListPage = () => {
  const query: Record<string, any> = {};
  const [deleteDriverRequest] = useDeleteDriverRequestMutation();

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [requestId, setRequestId] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const {data, isLoading} = useGetDriverRequestsQuery({...query});

  const driverRequests = data?.driverRequests;
  const meta = data?.meta;

  const columns = [
    {
      title: "Name",
      render: function (data: Record<string, string>) {
        const fullName = `${data?.name} ${data?.serName} `;
        return <>{fullName}</>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },

    {
      title: "Truck Type",
      dataIndex: "truckType",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (data: string) => {
        return (
          <div
            className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
            data-te-close="true">
            {data}
          </div>
        );
      },
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Updated at",
      dataIndex: "updatedAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },

    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        // console.log(data);

        return (
          <>
            <Link href={`/admin/drivers/edit/${data}`}>
              <Button
                style={{
                  margin: "5px 5px",
                }}
                onClick={() => {}}
                type="primary">
                <EditOutlined />
              </Button>
            </Link>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                setRequestId(data);
              }}
              danger
              style={{marginLeft: "3px"}}>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const {order, field} = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const deleteRequestHandler = async (id: string) => {
    try {
      const res = await deleteDriverRequest(id).unwrap();
      if (res) {
        message.success("Request Successfully Deleted!");
        setOpen(false);
      }
    } catch (error: any) {
      setOpen(false);
      // console.log(error);
      message.error(error.message);
    }
  };

  return (
    <div>
      <FBreadCrumb
        items={[
          {
            label: "admin",
            link: "/profile",
          },
        ]}
      />
      <ActionBar title="Driver Request List">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
          value={searchTerm}
        />
        <div>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{margin: "0px 5px"}}
              type="primary"
              onClick={resetFilters}>
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <FTable
        loading={isLoading}
        columns={columns}
        dataSource={driverRequests}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        rowKey="id"
        expandable={{
          expandedRowRender: (record: any) => (
            <p style={{margin: 0}}>{record.truckDescription}</p>
          ),
          rowExpandable: (record: any) =>
            record.truckDescription !== "Not Expandable",
        }}
      />

      <FModal
        title="Remove quote"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteRequestHandler(requestId)}>
        <p className="my-5">Do you want to remove this request?</p>
      </FModal>
    </div>
  );
};

export default UserListPage;

UserListPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
