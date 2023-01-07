import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Divider, Row, Tooltip, Card, Typography } from "antd";
import Meta from "antd/lib/card/Meta";

export const Avatars = () => (
  <Avatar.Group>
    <Avatar src="https://joeschmoe.io/api/v1/random" />
    <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
    <Tooltip title="Ant User" placement="top">
      <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
    </Tooltip>
    <Avatar
      style={{ backgroundColor: "#1890ff" }}
      icon={<AntDesignOutlined />}
    />
  </Avatar.Group>
);

export const cardData = [
  {
    title: "Angular",
    description: "Hope is a good thing, maybe the best, good things don't die",
    posted: "2 hours ago",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "React",
    description: "Hope is a good thing, maybe the best, good things don't die",
    posted: "2 hours ago",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "Angular",
    description: "Hope is a good thing, maybe the best, good things don't die",
    posted: "2 hours ago",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "Vue",
    description: "Hope is a good thing, maybe the best, good things don't die",
    posted: "2 hours ago",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "Ant Design",
    description: "Hope is a good thing, maybe the best, good things don't die",
    posted: "2 hours ago",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "Ant Design Pro",
    description: "Hope is a good thing, maybe the best, good things don't die",
    posted: "2 hours ago",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "Alipay",
    description: "Hope is a good thing, maybe the best, good things don't die",
    posted: "2 hours ago",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "Bootstrap",
    description: "Hope is a good thing, maybe the best, good things don't die",
    posted: "hours ago",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
];

function Projects() {
  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={[16, 16]}>
        {cardData.map((data, index) => {
          return (
            <Col lg={6} sm={24}>
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
    </div>
  );
}

export default Projects;
