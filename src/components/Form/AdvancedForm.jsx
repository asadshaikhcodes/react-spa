import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  Select,
  Row,
  Col,
  Layout,
  Typography,
  Card,
  PageHeader,
  Breadcrumb,
  Space,
  Divider,
  TimePicker,
} from "antd";
import EditableTableForm from "../PageElements.jsx/EditableTableForm";
import { Link } from "react-router-dom";
const { Header, Content } = Layout;
const { RangePicker } = DatePicker;

const PickerWithType = ({ type, onChange }) => {
  if (type === "time")
    return <TimePicker onChange={onChange} style={{ width: "100%" }} />;
  if (type === "date")
    return <DatePicker onChange={onChange} style={{ width: "100%" }} />;
  return (
    <DatePicker picker={type} onChange={onChange} style={{ width: "100%" }} />
  );
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }} defaultValue="86">
      <Select.Option value="86">+86</Select.Option>
      <Select.Option value="87">+87</Select.Option>
    </Select>
  </Form.Item>
);

function AdvancedForm() {
  return (
    <Layout>
      <Header
        style={{ backgroundColor: "#fff", padding: "0px", height: "auto" }}
      >
        <Breadcrumb style={{ padding: "8px" }}>
          <Breadcrumb.Item>
            <Link to="/form/basic-form">Form</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Advanced</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader title="Advanced Form" />
        <Card bordered={false}>
          <Typography.Paragraph ellipsis={true}>
            Ant Design, a design language for background applications, is
            refined by Ant UED Team.
          </Typography.Paragraph>
        </Card>
      </Header>
      <Content style={{ padding: "16px" }}>
        <div style={{ padding: "16px", backgroundColor: "#fff" }}>
          <Card title="Advanced Form Components" bordered={false}>
            <Row gutter={[20, 20]} align="middle">
              <Col lg={8} sm={24}>
                <Row gutter={[0, 30]}>
                  <Col span={24}>
                    <Input />
                  </Col>
                  <Col span={24}>
                    <Form.Item>
                      <Select placeholder="Select a option">
                        <Select.Option value="male">Option 1</Select.Option>
                        <Select.Option value="female">Option 2</Select.Option>
                        <Select.Option value="other">Option 3</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col lg={8} sm={24}>
                <Row gutter={[0, 30]}>
                  <Col span={24}>
                    <Input
                      addonBefore={
                        <Typography.Text type="secondary">
                          https://
                        </Typography.Text>
                      }
                      addonAfter={
                        <Typography.Text type="secondary">.com</Typography.Text>
                      }
                    />
                  </Col>
                  <Col span={24}>
                    <Form.Item>
                      <RangePicker picker="time" style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col lg={8} sm={24}>
                <Row gutter={[0, 30]}>
                  <Col span={24}>
                    <PickerWithType />
                  </Col>
                  <Col span={24}>
                    <Form.Item name="phone">
                      <Input
                        addonBefore={prefixSelector}
                        style={{ width: "100%" }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
          <Card bordered={false} title="Dynamic Table">
            <EditableTableForm />
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default AdvancedForm;
