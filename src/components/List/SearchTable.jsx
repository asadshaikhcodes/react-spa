import { useState } from "react";
import {
  Layout,
  Row,
  Col,
  PageHeader,
  Card,
  List,
  Breadcrumb,
  Form,
  Input,
  Button,
  Space,
  Dropdown,
  Menu,
  Radio,
} from "antd";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { Link } from "react-router-dom";
import ContentPageHeader from "../PageElements.jsx/ContentPageHeader";
import SiteModal from "../PageElements.jsx/SiteModal";
import SiteTable from "../PageElements.jsx/SiteTable";
const { Header, Content } = Layout;
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

const ModalForm = () => {
  const [form] = useForm();
  return (
    <Form
      form={form}
      layout="vertical"
      name="form_in_modal"
      initialValues={{
        modifier: "public",
      }}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: true,
            message: "Please input the title of collection!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input type="textarea" />
      </Form.Item>
    </Form>
  );
};

function SearchTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [form] = useForm();
  return (
    <Layout>
      <Header className="site-plain-header">
        <Breadcrumb style={{ padding: "8px" }}>
          <Breadcrumb.Item>
            <Link to="/list/table-list">List</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Search Table</Breadcrumb.Item>
        </Breadcrumb>
        <ContentPageHeader title={"Search Table"} showContents={false} />
      </Header>
      <Content style={{ padding: "16px" }}>
        <div
          style={{
            padding: "16px",
            backgroundColor: "#fff",
            marginBottom: "16px",
          }}
        >
          <Form form={form} name="horizontal_login" layout="inline">
            <Row justify="space-evenly" align="middle">
              <Col>
                <Form.Item label="User Name">
                  <Input />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="User Name">
                  <Input />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Space>
                    <Button type="default">Reset</Button>
                    <Button type="primary">Query</Button>
                    <Dropdown overlay={listActionDropdownMenu}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          Hover me
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </Space>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <div
          style={{
            padding: "16px",
            backgroundColor: "#fff",
          }}
        >
          <Card
            title="List Table"
            extra={
              <Button
                icon={<PlusOutlined />}
                type="primary"
                onClick={() => showModal()}
              >
                New
              </Button>
            }
            bordered={false}
          >
            <SiteTable />
          </Card>
        </div>
      </Content>
      <SiteModal
        modalContent={<ModalForm />}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
    </Layout>
  );
}

export default SearchTable;
