import {
  Layout,
  Row,
  Col,
  Card,
  Breadcrumb,
  Statistic,
  Radio,
  Input,
  Space,
} from "antd";
import { Link } from "react-router-dom";
import ContentPageHeader from "../PageElements.jsx/ContentPageHeader";
import ListWithContent from "../PageElements.jsx/ListWithContent";
const { Header, Content } = Layout;

function BasicList() {
  return (
    <Layout>
      <Header className="site-plain-header">
        <Breadcrumb style={{ padding: "8px" }}>
          <Breadcrumb.Item>
            <Link to="/list/table-list">List</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Basic List</Breadcrumb.Item>
        </Breadcrumb>
        <ContentPageHeader title={"Basic List"} />
      </Header>
      <Content>
        <div style={{ padding: "16px" }}>
          <Card
            style={{
              margin: "0px 0px 16px 0px",
            }}
          >
            <Row gutter={[16, 16]} justify="space-around" align="middle">
              <Col span={8}>
                <Statistic
                  title="Active Users"
                  value={112893}
                  style={{ textAlign: "center" }}
                />
              </Col>
              <Col span={8}>
                <Statistic
                  title="Active Users"
                  value={112893}
                  style={{ textAlign: "center" }}
                />
              </Col>
              <Col span={8}>
                <Statistic
                  title="Active Users"
                  value={112893}
                  style={{ textAlign: "center" }}
                />
              </Col>
            </Row>
          </Card>
          <Card
            title="Basic List"
            bordered={false}
            extra={
              <Space>
                <Radio.Group>
                  <Radio.Button>Choice 1</Radio.Button>
                  <Radio.Button>Choice 2</Radio.Button>
                  <Radio.Button>Choice 3</Radio.Button>
                </Radio.Group>
                <Input style={{ width: "100%" }} />
              </Space>
            }
          >
            <ListWithContent/>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default BasicList;
