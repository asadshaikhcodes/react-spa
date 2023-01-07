import {
  Layout,
  Card,
  Row,
  Col,
  Breadcrumb,
  Typography,
  Divider,
} from "antd";
import ContentPageHeader from "../PageElements.jsx/ContentPageHeader";
import { Link } from "react-router-dom";
import SiteTable from "../PageElements.jsx/SiteTable";
const { Header, Content } = Layout;
function BasicProfile() {
  return (
    <Layout>
      <Header className="site-plain-header">
        <Breadcrumb style={{ padding: "8px" }}>
          <Breadcrumb.Item>
            <Link to="/profile/basic">Profile</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Basic Profile</Breadcrumb.Item>
        </Breadcrumb>
        <ContentPageHeader title="Basic Profile" />
      </Header>
      <Content style={{ padding: "16px" }}>
        <Card>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Typography.Title level={3}>Refund Application</Typography.Title>
            </Col>
            <Col span={8}>
              <Typography.Text>Pickup number: 1000000000</Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>state Picked up</Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>Sales order number 1234123421</Typography.Text>
            </Col>
            <Divider type="horizontal" />
            <Col span={24}>
              <Typography.Title level={3}>User Infor</Typography.Title>
            </Col>
            <Col span={8}>
              <Typography.Text>username Pay Xiaoxiao</Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>contact number 18100000000</Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>
                Common express Cainiao Warehousing
              </Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>
                Pickup address No. 18, Wantang Road, Xihu District, Hangzhou
                City, Zhejiang Province
              </Typography.Text>
            </Col>
            <Col span={12}>
              <Typography.Text>Remark none</Typography.Text>
            </Col>
            <Divider />
            <Col span={24}>
              <Typography.Title level={3}>Return Items</Typography.Title>
            </Col>
            <Col span={24}>
              <SiteTable />
            </Col>
            <Col span={24}>
              <Typography.Title level={3}>Return Progress</Typography.Title>
            </Col>
            <Col span={24}>
              <SiteTable />
            </Col>
          </Row>
        </Card>
      </Content>
    </Layout>
  );
}

export default BasicProfile;
