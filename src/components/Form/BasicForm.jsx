import {
  Breadcrumb,
  Layout,
  Card,
  Row,
  Col,
  PageHeader,
  Typography,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Space,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header, Content } = Layout;
const { Paragraph, Text } = Typography;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function BasicForm() {
  return (
    <Layout>
      <Header
        style={{ backgroundColor: "#fff", padding: "0px", height: "auto" }}
      >
        <Breadcrumb style={{ padding: "8px" }}>
          <Breadcrumb.Item>
            <Link to="/form/basic-form">Form</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Basic</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader title="Basic Form" />
        <Card bordered={false}>
          <Paragraph ellipsis={true}>
            Ant Design, a design language for background applications, is
            refined by Ant UED Team.
          </Paragraph>
        </Card>
      </Header>
      <Content style={{ padding: "16px" }}>
        <div style={{ padding: "16px", backgroundColor: "#fff" }}>
          <Row justify="space-around">
            <Col span={18}>
              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="vertical"
              >
                <Form.Item label="Input">
                  <Input />
                </Form.Item>
                <Form.Item label="Select">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="TreeSelect">
                  <TreeSelect
                    treeData={[
                      {
                        title: "Light",
                        value: "light",
                        children: [{ title: "Bamboo", value: "bamboo" }],
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="Cascader">
                  <Cascader
                    options={[
                      {
                        value: "zhejiang",
                        label: "Zhejiang",
                        children: [
                          {
                            value: "hangzhou",
                            label: "Hangzhou",
                          },
                        ],
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="DatePicker">
                  <DatePicker />
                </Form.Item>
                <Form.Item label="RangePicker">
                  <RangePicker />
                </Form.Item>
                <Form.Item label="InputNumber">
                  <InputNumber />
                </Form.Item>
                <Form.Item label="TextArea">
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                  label="Chekbox"
                  name="disabled"
                  valuePropName="checked"
                >
                  <Checkbox>Checkbox</Checkbox>
                </Form.Item>
                <Form.Item label="Radio">
                  <Radio.Group>
                    <Radio value="apple"> Apple </Radio>
                    <Radio value="pear"> Pear </Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Switch" valuePropName="checked">
                  <Switch />
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList">
                  <Upload action="/upload.do" listType="picture-card">
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>
                <Form.Item label="Button">
                  <Button>Button</Button>
                </Form.Item>
                <Form.Item>
                  <Space>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                    <Button htmlType="button">Cancel</Button>
                  </Space>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default BasicForm;
