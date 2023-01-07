import React from "react";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  List,
  Progress,
  Space,
  Statistic,
  Menu,
  Typography,
  Dropdown,
} from "antd";

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: "https://joeschmoe.io/api/v1/random",
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  date: new Date().toLocaleDateString(),
}));

const listActionDropdownMenu = (
  <Menu
    items={[
      {
        key: "1",
        label: "1st item",
      },
      {
        key: "2",
        label: "2nd item",
      },
      {
        key: "3",
        label: "3rd item",
      },
    ]}
  />
);

const ListWithContent = ({
  showFooter = false,
  footerContent,
  dataSource,
  size = "large",
  itemLayout = "vertical",
  pageSize = 5,
  showActions = false,
  showExtras = false,
  actions,
  extraContent,
}) => (
  <List
    itemLayout={itemLayout}
    size={size}
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: pageSize,
    }}
    dataSource={dataSource ? dataSource : data}
    footer={
      showFooter ? (
        footerContent ? (
          footerContent
        ) : (
          <div>
            <b>ant design</b> footer part
          </div>
        )
      ) : null
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <Button type="link">Action</Button>,
          <Dropdown overlay={listActionDropdownMenu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>,
        ]}
        extra={
          <>
            <Statistic
              title="Owner"
              valueRender={() => (
                <Typography.Text type="secondary">{item.title}</Typography.Text>
              )}
            />
            <Statistic
              title="Date"
              valueRender={() => (
                <Typography.Text type="secondary">{item.date}</Typography.Text>
              )}
            />
            <Progress percent={70} />
          </>
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);

export default ListWithContent;
