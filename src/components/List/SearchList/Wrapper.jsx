import {
  Layout,
  Card,
  Row,
  Col,
  Breadcrumb,
  Dropdown,
  Form,
  Button,
  Input,
  Tabs,
  Typography,
  Divider,
  Select,
} from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContentPageHeader from "../../PageElements.jsx/ContentPageHeader";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
const { Header, Content } = Layout;

const FooterContent = () => {
  const [activeTabKey, setActiveTabKey] = useState("articles");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // if (location.state?.pageTitle.indexOf("projects") !== -1) {
    //   setActiveTabKey("projects");
    // } else if (location.state?.pageTitle.indexOf("applications") !== -1) {
    //   setActiveTabKey("applications");
    // } else if (location.state?.pageTitle.indexOf("applications") !== -1) {
    //   setActiveTabKey("articles");
    // }
    setActiveTabKey(location.state?.pageKey && location.state?.pageKey);
  }, [location]);
  return (
    <Tabs
      activeKey={activeTabKey}
      onChange={(activeKey) => {
        navigate(activeKey, {
          state: { pageTitle: `Search List(${activeKey})` },
        });
        setActiveTabKey(activeKey);
      }}
      items={[
        {
          label: `articles`,
          key: "articles",
        },
        {
          label: `projects`,
          key: "projects",
        },
        {
          label: `applications`,
          key: "applications",
        },
      ]}
    />
  );
};
function Wrapper() {
  const location = useLocation();
  console.log("location in search list", location);
  return (
    <>
      <Layout>
        <Header className="site-plain-header">
          <Breadcrumb style={{ padding: "8px" }}>
            <Breadcrumb.Item>
              <Link to="/list/table-list">List</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/list/search/articles">Search List</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {location.state?.pageTitle
                ? `Search List(${location.state?.pageTitle})`
                : "Search List(Articles)"}
            </Breadcrumb.Item>
          </Breadcrumb>
          <ContentPageHeader
            title={
              location.state?.pageTitle
                ? `Search List(${location.state?.pageTitle})`
                : "Search List(Articles)"
            }
            showContents
            contents={
              <Row justify="center">
                <Col lg={8} sm={24}>
                  <Form size="large" layout="inline">
                    <Form.Item>
                      <Input />
                    </Form.Item>
                    <Button type="primary">Search</Button>
                  </Form>
                </Col>
              </Row>
            }
            footer={<FooterContent />}
          />
        </Header>
        <Content style={{ padding: "16px" }}>
          <Card style={{ padding: "16px", marginBottom: "16px" }}>
            <Row align="middle">
              {new Array(7).fill("Category").map((item, index) => {
                return (
                  <Col span={3}>
                    {index == 0 ? (
                      <Typography.Text>{item}:</Typography.Text>
                    ) : (
                      <Button type="link">{`${item} ${index}`}</Button>
                    )}
                  </Col>
                );
              })}
              <Divider type="horizontal" dashed />
              <Col>
                Owner:
                <Select defaultValue="New" value="New">
                  <Select.Option value="Acive">Active Owner</Select.Option>
                  <Select.Option value="New">New Owner</Select.Option>
                </Select>
              </Col>
              <Divider type="horizontal" dashed />
              <Col span={8}>
                Other Options: active user{" "}
                <Select defaultValue="New" value="New" placeholder="unlimited">
                  <Select.Option value="Acive">Active Owner</Select.Option>
                  <Select.Option value="New">New Owner</Select.Option>
                </Select>
              </Col>
              <Col span={8}>
                Other Options: active user{" "}
                <Select defaultValue="New" value="New" placeholder="unlimited">
                  <Select.Option value="Acive">Active Owner</Select.Option>
                  <Select.Option value="New">New Owner</Select.Option>
                </Select>
              </Col>
            </Row>
          </Card>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
}

export default Wrapper;
