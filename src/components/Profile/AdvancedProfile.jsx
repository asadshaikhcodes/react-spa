import { useState } from "react";
import {
  Layout,
  Card,
  Row,
  Col,
  Breadcrumb,
  Tabs,
  Typography,
  Divider,
  Statistic,
  Empty,
} from "antd";
import ContentPageHeader from "../PageElements.jsx/ContentPageHeader";
import { Link } from "react-router-dom";
import SiteTable from "../PageElements.jsx/SiteTable";
import SiteStep from "../PageElements.jsx/SiteStep";
const { Header, Content } = Layout;

const cardTabList = [
  { key: "logOne", tab: "Operation log one" },
  { key: "logTwo", tab: "Operation log Two" },
  { key: "logThree", tab: "Operation log Three" },
];

const cardTabContents = {
  logOne: <SiteTable />,
  logTwo: <SiteTable />,
  logThree: <SiteTable />,
};

const PageHeaderMoreContents = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Typography.Text>founder Qu Lili</Typography.Text>
      </Col>
      <Col span={12}>
        <Typography.Text>Ordering Products XX service</Typography.Text>
      </Col>
      <Col span={12}>
        <Typography.Text>creation time 2017-07-07</Typography.Text>
      </Col>
      <Col span={12}>
        <Typography.Text>Associated documents 12421</Typography.Text>
      </Col>
      <Col span={12}>
        <Typography.Text>
          effective date 2017-07-07 ~ 2017-08-08
        </Typography.Text>
      </Col>
      <Col span={12}>
        <Typography.Text>
          Remark Please confirm within two working days
        </Typography.Text>
      </Col>
    </Row>
  );
};

const MoreContentsExtras = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Statistic title="state" value={"Pending"} />
      </Col>
      <Col span={12}>
        <Statistic title="order amount" value={"₹568.08"} />
      </Col>
    </Row>
  );
};

const FooterContent = () => {
  return (
    <Tabs
      defaultActiveKey="Details"
      onChange={(activeKey) => {
        console.log(activeKey);
      }}
      items={[
        {
          label: `Details`,
          key: "Details",
        },
        {
          label: `Rules`,
          key: "Rules",
        },
      ]}
    />
  );
};

function AdvancedProfile() {
  const [cardTabActiveKey, setActiveTabKey2] = useState("logOne");
  return (
    <Layout>
      <Header className="site-plain-header">
        <Breadcrumb style={{ padding: "8px" }}>
          <Breadcrumb.Item>
            <Link to="/profile/basic">Profile</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Advanced Profile</Breadcrumb.Item>
        </Breadcrumb>
        <ContentPageHeader
          title="Order number: 234231029431"
          showContents
          showExtra
          moreContents={<PageHeaderMoreContents />}
          moreContentsExtras={<MoreContentsExtras />}
          footer={<FooterContent />}
        />
      </Header>
      <Content style={{ padding: "16px" }}>
        <Card
          title="Process Progress"
          bordered={false}
          style={{ marginBottom: "16px" }}
        >
          <SiteStep />
        </Card>
        <Card title="User Info">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Typography.Text>username Pay Xiaoxiao</Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>
                member card number 32943898021309809423
              </Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>ID card 3321944288191034921</Typography.Text>
            </Col>
            <Col span={6}>
              <Typography.Text>contact details 18112345678</Typography.Text>
            </Col>
            <Col span={18}>
              <Typography.Text>
                contact address Qu Lili 18100000000 Intersection of Gongzhuan
                Road, Huanggushan Road, Xihu District, Hangzhou City, Zhejiang
                Province
              </Typography.Text>
            </Col>
            <Divider />
            <Col>
              <Typography.Text>
                contact address Qu Lili 18100000000 Intersection of Gongzhuan
                Road, Huanggushan Road, Xihu District, Hangzhou City, Zhejiang
                Province
              </Typography.Text>
            </Col>
            <Col span={24}>
              <Card type="inner" title="Multi-level information group">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Typography.Title level={4}>Group Name</Typography.Title>
                  </Col>
                  <Col span={8}>
                    <Typography.Text>username Pay Xiaoxiao</Typography.Text>
                  </Col>
                  <Col span={8}>
                    <Typography.Text>
                      member card number 32943898021309809423
                    </Typography.Text>
                  </Col>
                  <Col span={8}>
                    <Typography.Text>
                      ID card 3321944288191034921
                    </Typography.Text>
                  </Col>
                  <Col span={6}>
                    <Typography.Text>
                      contact details 18112345678
                    </Typography.Text>
                  </Col>
                  <Col span={18}>
                    <Typography.Text>
                      contact address Qu Lili 18100000000 Intersection of
                      Gongzhuan Road, Huanggushan Road, Xihu District, Hangzhou
                      City, Zhejiang Province
                    </Typography.Text>
                  </Col>
                  <Divider />
                  <Col span={24}>
                    <Typography.Title level={4}>Group Name</Typography.Title>
                  </Col>
                  <Col span={8}>
                    <Typography.Text>username Pay Xiaoxiao</Typography.Text>
                  </Col>
                  <Col span={8}>
                    <Typography.Text>
                      member card number 32943898021309809423
                    </Typography.Text>
                  </Col>
                  <Col span={8}>
                    <Typography.Text>
                      ID card 3321944288191034921
                    </Typography.Text>
                  </Col>
                  <Col span={6}>
                    <Typography.Text>
                      contact details 18112345678
                    </Typography.Text>
                  </Col>
                  <Col span={18}>
                    <Typography.Text>
                      contact address Qu Lili 18100000000 Intersection of
                      Gongzhuan Road, Huanggushan Road, Xihu District, Hangzhou
                      City, Zhejiang Province
                    </Typography.Text>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card
          title="User's call records in the past six months"
          style={{ marginTop: "16px", marginBottom: "16px" }}
        >
          <Empty />
        </Card>
        <Card
          tabList={cardTabList}
          activeTabKey={cardTabActiveKey}
          onTabChange={(key) => setActiveTabKey2(key)}
        >
          {cardTabContents[cardTabActiveKey]}
        </Card>
      </Content>
    </Layout>
  );
}

export default AdvancedProfile;
