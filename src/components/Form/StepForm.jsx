import {
  Button,
  message,
  Steps,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  TreeSelect,
  Row,
  Col,
  Layout,
  Typography,
  Card,
  PageHeader,
  Breadcrumb,
  Space,
  List,
  Divider,
  Result,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const { Step } = Steps;
const { Header, Content } = Layout;
const StepOneForm = (
  <Row justify="center">
    <Col lg={18} sm={24}>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
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
                children: [
                  {
                    title: "Bamboo",
                    value: "bamboo",
                  },
                ],
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
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Row justify="center" align="middle">
          <Space>
            <Col>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Col>
            <Col>
              <Button type="default">Cancel</Button>
            </Col>
          </Space>
        </Row>
      </Form>
    </Col>
  </Row>
);

const stepTwoListData = [
  "ant-design@alipay.com",
  "test@example.com",
  "Alex",
  "500.00",
];

const StepTwoContent = (
  <Row justify="center">
    <Col lg={18} sm={24}>
      <Card bordered={false}>
        <List
          size="large"
          header={<div>Header</div>}
          bordered
          dataSource={stepTwoListData}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <Divider type="horizontal" />
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="vertical"
        >
          <Form.Item label="Input" required>
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Card>
    </Col>
  </Row>
);

const StepThreeContent = (
  <div style={{ marginBottom: "30px" }}>
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
    <Divider />
    <Row justify="center">
      <Col span={18}>
        <List
          size="large"
          header={<div>Header</div>}
          bordered
          dataSource={stepTwoListData}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Col>
    </Row>
  </div>
);

const steps = [
  {
    title: "First",
    content: StepOneForm,
  },
  {
    title: "Second",
    content: StepTwoContent,
  },
  {
    title: "Last",
    content: StepThreeContent,
  },
];

function StepForm() {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Layout>
      <Header
        style={{ backgroundColor: "#fff", padding: "0px", height: "auto" }}
      >
        <Breadcrumb style={{ padding: "8px" }}>
          <Breadcrumb.Item>
            <Link to="/form/basic-form">Form</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Step</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader title="Step Form" />
        <Card bordered={false}>
          <Typography.Paragraph ellipsis={true}>
            Ant Design, a design language for background applications, is
            refined by Ant UED Team.
          </Typography.Paragraph>
        </Card>
      </Header>
      <Content style={{ padding: "16px" }}>
        <div style={{ padding: "16px", backgroundColor: "#fff" }}>
          <div style={{ padding: "16px" }}>
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content" style={{ marginTop: "20px" }}>
              {steps[current].content}
            </div>
            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                >
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default StepForm;
