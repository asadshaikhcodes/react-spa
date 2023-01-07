import {
  Breadcrumb,
  Layout,
  Card,
  Row,
  Col,
  PageHeader,
  Avatar,
  Divider,
  Typography,
  Button,
  List,
} from "antd";
import Meta from "antd/lib/card/Meta";
import { PlusOutlined } from "@ant-design/icons";
import { RadarChart } from "../Charts/RadarChart";
import { Link } from "react-router-dom";
const { Header, Content } = Layout;
const { Title, Text } = Typography;
const HeaderCardExtras = (
  <Row align="middle" justify="end">
    <Col>
      <Text type="secondary">Count</Text>
      <Title level={3}>56</Title>
    </Col>
    <Col>
      <Divider type="vertical" />
    </Col>
    <Col>
      <Text type="secondary">Share</Text>
      <Title level={3}>8/24</Title>
    </Col>
    <Col>
      <Divider type="vertical" />
    </Col>
    <Col>
      <Text type="secondary">Total</Text>
      <Title level={3}>2,223</Title>
    </Col>
  </Row>
);

const listData = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

function Workplace() {
  return (
    <Layout>
      <Header
        style={{ backgroundColor: "#fff", padding: "0px", height: "auto" }}
      >
        <Breadcrumb style={{ padding: "8px" }}>
          <Breadcrumb.Item>
            <Link to="/dashboard/analysis">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Workplace</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader title="Workplace" />
        <Card bordered={false}>
          <Row justify="space-between" align="middle">
            <Col sm={24} lg={12}>
              <Meta
                avatar={
                  <Avatar src="https://joeschmoe.io/api/v1/random" size={64} />
                }
                title="Workplace Avatar"
                description="Workplace Avatar Description"
              />
            </Col>
            <Col sm={24} lg={12}>
              {HeaderCardExtras}
            </Col>
          </Row>
        </Card>
      </Header>
      <Content>
        <div style={{ padding: "16px" }}>
          <Row gutter={[16, 16]}>
            <Col lg={17} sm={24}>
              <Row>
                <Col span={24}>
                  <Card title="Grid Card" style={{ position: "unset" }}>
                    <Card.Grid hoverable>
                      <Meta
                        title="Grid 1"
                        description="Grid one description"
                        avatar={
                          <Avatar
                            size={30}
                            src="https://joeschmoe.io/api/v1/random"
                          />
                        }
                      />
                    </Card.Grid>
                    <Card.Grid hoverable>
                      <Meta
                        title="Grid 2"
                        description="Grid Two description"
                        avatar={
                          <Avatar
                            size={30}
                            src="https://joeschmoe.io/api/v1/random"
                          />
                        }
                      />
                    </Card.Grid>
                    <Card.Grid hoverable>
                      <Meta
                        title="Grid 3"
                        description="Grid Three description"
                        avatar={
                          <Avatar
                            size={30}
                            src="https://joeschmoe.io/api/v1/random"
                          />
                        }
                      />
                    </Card.Grid>
                    <Card.Grid hoverable>
                      <Meta
                        title="Grid 4"
                        description="Grid four description"
                        avatar={
                          <Avatar
                            size={30}
                            src="https://joeschmoe.io/api/v1/random"
                          />
                        }
                      />
                    </Card.Grid>
                    <Card.Grid>
                      <Meta
                        title="Grid 5"
                        description="Grid Five description"
                        avatar={
                          <Avatar
                            size={30}
                            src="https://joeschmoe.io/api/v1/random"
                          />
                        }
                      />
                    </Card.Grid>
                    <Card.Grid hoverable>
                      <Meta
                        title="Grid 6"
                        description="Grid Six description"
                        avatar={
                          <Avatar
                            size={30}
                            src="https://joeschmoe.io/api/v1/random"
                          />
                        }
                      />
                    </Card.Grid>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card title="List Card" style={{ marginTop: "16px" }}>
                    <List
                      itemLayout="horizontal"
                      dataSource={listData}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar src="https://joeschmoe.io/api/v1/random" />
                            }
                            title={
                              <a href="https://ant.design">{item.title}</a>
                            }
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg={7} sm={24}>
              <Row gutter={[0, 16]}>
                <Col span={24}>
                  <Card title="Link Group" bodyStyle={{ padding: "2px" }}>
                    <Row align="middle">
                      <Col>
                        <Card
                          type="inner"
                          bordered={false}
                          bodyStyle={{ padding: "5px" }}
                        >
                          <Button type="link" size="small" ghost>
                            Button
                          </Button>
                        </Card>
                      </Col>
                      <Col>
                        <Card
                          type="inner"
                          bordered={false}
                          bodyStyle={{ padding: "5px" }}
                        >
                          <Button type="link" size="small" ghost>
                            Button
                          </Button>
                        </Card>
                      </Col>
                      <Col>
                        <Card
                          type="inner"
                          bordered={false}
                          bodyStyle={{ padding: "5px" }}
                        >
                          <Button type="link" size="small" ghost>
                            Button
                          </Button>
                        </Card>
                      </Col>
                      <Col>
                        <Card
                          type="inner"
                          bordered={false}
                          bodyStyle={{ padding: "5px" }}
                        >
                          <Button type="link" size="small" ghost>
                            Button
                          </Button>
                        </Card>
                      </Col>
                      <Col>
                        <Card
                          type="inner"
                          bordered={false}
                          bodyStyle={{ padding: "5px" }}
                        >
                          <Button type="link" size="small" ghost>
                            Button
                          </Button>
                        </Card>
                      </Col>
                      <Col>
                        <Card
                          type="inner"
                          bordered={false}
                          bodyStyle={{ padding: "5px" }}
                        >
                          <Button type="link" size="small" ghost>
                            Button
                          </Button>
                        </Card>
                      </Col>
                      <Col>
                        <Card
                          type="inner"
                          bordered={false}
                          bodyStyle={{ padding: "5px" }}
                        >
                          <Button
                            type="primary"
                            size="small"
                            ghost
                            icon={<PlusOutlined />}
                          >
                            Button
                          </Button>
                        </Card>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card
                    title="Radar Chart"
                    style={{ height: "350px" }}
                    bodyStyle={{ height: "280px", padding: "10px" }}
                  >
                    <RadarChart />
                  </Card>
                </Col>
                <Col span={24}>
                  <Card
                    title="Users"
                    style={{ height: "350px" }}
                    bodyStyle={{ height: "280px", padding: "10px" }}
                  >
                    <Row>
                      <Col lg={12} sm={24}>
                        <Card type="inner" bordered={false}>
                          <Meta
                            avatar={
                              <Avatar
                                src="https://joeschmoe.io/api/v1/random"
                                size={20}
                              />
                            }
                            title="React"
                          />
                        </Card>
                      </Col>
                      <Col lg={12} sm={24}>
                        <Card type="inner" bordered={false}>
                          <Meta
                            avatar={
                              <Avatar
                                src="https://joeschmoe.io/api/v1/random"
                                size={20}
                              />
                            }
                            title="Javascript"
                          />
                        </Card>
                      </Col>
                      <Col lg={12} sm={24}>
                        <Card type="inner" bordered={false}>
                          <Meta
                            avatar={
                              <Avatar
                                src="https://joeschmoe.io/api/v1/random"
                                size={20}
                              />
                            }
                            title="Typescript"
                          />
                        </Card>
                      </Col>
                      <Col lg={12} sm={24}>
                        <Card type="inner" bordered={false}>
                          <Meta
                            avatar={
                              <Avatar
                                src="https://joeschmoe.io/api/v1/random"
                                size={20}
                              />
                            }
                            title="Vue"
                          />
                        </Card>
                      </Col>
                      <Col lg={12} sm={24}>
                        <Card type="inner" bordered={false}>
                          <Meta
                            avatar={
                              <Avatar
                                src="https://joeschmoe.io/api/v1/random"
                                size={20}
                              />
                            }
                            title="Fluter"
                          />
                        </Card>
                      </Col>
                      <Col lg={12} sm={24}>
                        <Card type="inner" bordered={false}>
                          <Meta
                            avatar={
                              <Avatar
                                src="https://joeschmoe.io/api/v1/random"
                                size={20}
                              />
                            }
                            title="Angular"
                          />
                        </Card>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default Workplace;
