import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
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
} from "antd";
import Meta from "antd/lib/card/Meta";

export const cardData = [
  {
    title: "Angular",
    activeUsers: "100,000",
    newUsers: "1,345",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "React",
    activeUsers: "100,000",
    newUsers: "1,345",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "Angular",
    activeUsers: "100,000",
    newUsers: "1,345",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "Vue",
    activeUsers: "100,000",
    newUsers: "1,345",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "Ant Design",
    activeUsers: "100,000",
    newUsers: "1,345",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "Ant Design Pro",
    activeUsers: "100,000",
    newUsers: "1,345",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "Alipay",
    activeUsers: "100,000",
    newUsers: "1,345",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "Bootstrap",
    activeUsers: "100,000",
    newUsers: "1,345",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
];
function Applications() {
  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={[16, 16]}>
        {cardData.map((data, index) => {
          return (
            <Col lg={6} sm={24}>
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
                        <Statistic title="Active Users" value={data.newUsers} />
                      </Col>
                    </Row>
                  }
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Applications;
