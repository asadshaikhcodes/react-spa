import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  MessageOutlined,
  StarOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Col,
  Divider,
  Row,
  Tooltip,
  Card,
  Typography,
  Statistic,
  Tabs,
  List,
  Space,
} from "antd";
import Meta from "antd/lib/card/Meta";
import ListWithContent from "./ListWithContent";
import { cardData } from "../List/SearchList/Applications";
import { cardData as projectsCardData } from "../List/SearchList/Projects";
import { data } from "../List/SearchList/Articles";
import { Avatars } from "../List/SearchList/Projects";
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const SiteTabElement = () => (
  <Tabs
    defaultActiveKey="articles"
    items={[
      {
        label: "Articles(8)",
        key: "articles",
        children: (
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText
                    icon={StarOutlined}
                    text="156"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text="2"
                    key="list-vertical-message"
                  />,
                ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
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
        ),
      },
      {
        label: "Applications(8)",
        key: "applications",
        children: (
          <Row gutter={[16, 16]}>
            {cardData.map((data, index) => {
              return (
                <Col lg={8} sm={24}>
                  <Card
                    actions={[
                      <Tooltip title="settings">
                        <SettingOutlined key="setting" />
                      </Tooltip>,
                      <Tooltip title="edit">
                        <EditOutlined key="edit" />
                      </Tooltip>,
                      <Tooltip title="more">
                        <EllipsisOutlined key="ellipsis" />
                      </Tooltip>,
                    ]}
                  >
                    <Meta
                      avatar={<Avatar size={20} src={data.imgSrc} />}
                      title={data.title}
                      description={
                        <Row align="middle">
                          <Col span={12}>
                            <Statistic
                              title="Active Users"
                              value={data.activeUsers}
                            />
                          </Col>
                          <Col span={12}>
                            <Statistic
                              title="Active Users"
                              value={data.newUsers}
                            />
                          </Col>
                        </Row>
                      }
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        ),
      },
      {
        label: "Items(8)",
        key: "items",
        children: (
          <Row gutter={[16, 16]}>
            {projectsCardData.map((data, index) => {
              return (
                <Col lg={8} sm={24}>
                  <Card cover={<img alt="example" src={data.imgSrc} />}>
                    <Meta title={data.title} description={data.description} />
                    <Divider type="horizontal" />
                    <Row justify="space-between">
                      <Col>
                        <Typography.Text>
                          {index == 0
                            ? "few seconds ago"
                            : `${index} ${data.posted}`}
                        </Typography.Text>
                      </Col>
                      <Col>
                        <Avatars />
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Row>
        ),
      },
    ]}
  />
);

export default SiteTabElement;
