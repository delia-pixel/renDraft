import { Button, Menu, type MenuProps } from "antd";
import GridIcon from "../icons/GridIcon";
import MessageChatCircleIcon from "../icons/MessageChatCircleIcon";
import TrashIcon from "../icons/TrashIcon";
import { useState } from "react";
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <GridIcon />, label: "Dashboard" },
  {
    key: "2",
    icon: <MessageChatCircleIcon />,
    label: "Users",
    children: [
      { key: "4", label: "All" },
      { key: "5", label: "Admins" },
      { key: "6", label: "Developers" },
      { key: "7", label: "Testers" },
    ],
  },
  { key: "3", icon: <TrashIcon />, label: "Deleted Users" },
];
export default function SideNav() {
  const [collapsed, setCollapsed] = useState(false);

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  return (
    <div style={{ width: 280 }} className="static">
      {/* <Button onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={["2"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        className="h-screen"
      />
    </div>
  );
}
