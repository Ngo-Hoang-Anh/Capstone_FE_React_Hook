import { Menu, Input, Button } from "antd";
import "./PostManager.css";
import { Table, Tag } from "antd";
const PostManager = () => {
  const postStatus = [
    { value: "all", label: "Tất cả" },
    { value: "pending", label: "Chờ duyệt" },
    { value: "approved", label: "Đã duyệt" },
    { value: "disapproved", label: "Từ chối" },
    { value: "expired", label: "Hết hạn" },
  ];
  const showDetail = (id) => {
    console.log("showDetail:" + id);
  };
  const editPost = (id) => {
    console.log("editPost:" + id);
  };
  const deletePost = (id) => {
    console.log("deletePost:" + id);
  };
  const updateRoomNumber = (id) => {
    console.log("updateRoomNumber:" + id);
  };
  const reupPost = (id) => {
    console.log("reupPost:" + id);
  };
  const viewDetailButton = {
    key: "detail",
    title: "Chi tiểt bài đăng",
    color: "#1890ff",
    onClick: showDetail,
  };
  const editButton = {
    key: "edit",
    title: "Chỉnh sửa thông tin",
    color: "#1890ff",
    onClick: editPost,
  };
  const deleteButton = {
    key: "delete",
    title: "Xoá bài đăng",
    color: "red",
    onClick: deletePost,
  };
  const updateNumberButton = {
    key: "updateRoomNumber",
    title: "Thay đổi số phòng",
    color: "#389e0d",
    onClick: updateRoomNumber,
  };
  const reupPostButton = {
    key: "updateRoomNumber",
    title: "Xin duyệt lại bài",
    color: "#389e0d",
    onClick: reupPost,
  };

  const buttonsForPending = [viewDetailButton, editButton, deleteButton];
  const buttonsForApproved = [
    viewDetailButton,
    editButton,
    updateNumberButton,
    deleteButton,
  ];
  const buttonsForExpired = [
    viewDetailButton,
    editButton,
    reupPostButton,
    deleteButton,
  ];
  const buttonsForDisapproved = [viewDetailButton, editButton, deleteButton];
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let tag;
        if (status === "pending") {
          tag = <Tag color="blue">Đang chờ duyệt</Tag>;
        } else if (status === "approved") {
          tag = <Tag color="green">Đã duyệt</Tag>;
        } else if (status === "disapproved") {
          tag = <Tag color="red">Bị từ chối</Tag>;
        } else {
          //status = expired
          tag = <Tag color="red">Hết hạn</Tag>;
        }
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>{tag}</div>
        );
      },
    },
    {
      title: "Chức năng",
      key: "actions",
      dataIndex: "actions",
      render: (text, record) => {
        let buttons;
        if (record.status === "pending") {
          buttons = buttonsForPending;
        } else if (record.status === "approved") {
          buttons = buttonsForApproved;
        } else if (record.status === "disapproved") {
          buttons = buttonsForDisapproved;
        } else {
          //stauts = expired
          buttons = buttonsForExpired;
        }
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {buttons.map((button) => {
              return (
                <Button
                  key={button.key}
                  style={{
                    color: "white",
                    backgroundColor: button.color,
                    width: "150px",
                  }}
                  onClick={() => button.onClick(record.id)}
                >
                  {button.title}
                </Button>
              );
            })}
          </div>
        );
      },
    },
  ];

  const data = [
    {
      id: "1",
      title: "This is title",
      address: "This is address",
      createdDate: "29-02-2000",
      status: "pending",
    },
    {
      id: "2",
      title: "This is title This is title This is title",
      address: "This is address",
      createdDate: "29-02-2000",
      status: "approved",
    },
    {
      id: "3",
      title: "This is title",
      address: "This is address",
      createdDate: "29-02-2000",
      status: "disapproved",
    },
    {
      id: "4",
      title: "This is title",
      address: "This is address",
      createdDate: "29-02-2000",
      status: "expired",
    },
  ];
  return (
    <>
      <div className="search-bar">
        <h1>Quản lý bài đăng</h1>
        <div style={{ display: "flex" }}>
          <Input /> <Button type="primary">Tìm kiếm</Button>
        </div>
      </div>
      <div className="custom-horizontal-menu">
        <Menu mode="horizontal" defaultSelectedKeys={["all"]}>
          {postStatus.map((item) => (
            <Menu.Item key={item.value}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </div>
      <Table
        style={{ border: "1px solid lightgrey" }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};
export default PostManager;
