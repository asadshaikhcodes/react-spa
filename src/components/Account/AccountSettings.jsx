import {
  Tabs,
  Col,
  Row,
  Card,
  Form,
  Input,
  Avatar,
  Button,
  Upload,
  Select,
  List,
  Typography,
  Switch,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
const { Option } = Select;

const listData = [
  { title: "account password", subtitle: "Current password strength: strong" },
  { title: "secret phone", subtitle: "Binding mobile phone: 138****8293" },
  {
    title: "Security Question",
    subtitle:
      "No security questions are set, which can effectively protect account security",
  },
  { title: "Backup email", subtitle: "Binding email: ant***sign.com" },
  {
    title: "MFA device",
    subtitle:
      "The MFA device is not bound. After binding, a second confirmation can be performed.",
  },
];

const accountBindingListData = [
  { title: "Bind Taobao", subtitle: "Taobao account is not currently bound" },
  { title: "Bind Alipay", subtitle: "Alipay account is not currently bound" },
  {
    title: "Binding DingTalk",
    subtitle: "DingTalk account is not currently bound",
  },
];

const notificationSettingListData = [
  {
    title: "account password",
    subtitle:
      "Messages from other users will be notified in the form of internal messages",
  },
  {
    title: "system information",
    subtitle:
      "System messages will be notified in the form of internal messages",
  },
  {
    title: "Upcoming Tasks",
    subtitle: "To-do tasks will be notified in the form of an internal letter",
  },
];

const SecuritySettingTabContent = (
  <List
    itemLayout="horizontal"
    dataSource={listData}
    renderItem={(item) => (
      <List.Item actions={[<Button type="link">revise</Button>]}>
        <List.Item.Meta
          title={<Typography.Text strong>{item.title}</Typography.Text>}
          description={item.subtitle}
        />
      </List.Item>
    )}
  />
);

const AccountBindingTabContent = (
  <List
    itemLayout="horizontal"
    dataSource={accountBindingListData}
    renderItem={(item) => (
      <List.Item actions={[<Button type="link">bind</Button>]}>
        <List.Item.Meta
          title={<Typography.Text strong>{item.title}</Typography.Text>}
          description={item.subtitle}
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" size={40} />}
        />
      </List.Item>
    )}
  />
);

const NotificationSettingTabContent = (
  <List
    itemLayout="horizontal"
    dataSource={notificationSettingListData}
    renderItem={(item) => (
      <List.Item
        actions={[
          <Switch
            defaultChecked
            checkedChildren="Open"
            unCheckedChildren="Close"
          />,
        ]}
      >
        <List.Item.Meta
          title={<Typography.Text strong>{item.title}</Typography.Text>}
          description={item.subtitle}
        />
      </List.Item>
    )}
  />
);
const TabElement = (
  <Tabs
    tabPosition="left"
    items={[
      {
        label: "Basic Settings",
        key: "basic",
        children: (
          <Row justify="space-between" align="middle">
            <Col span={12}>
              <Form layout="vertical">
                <Form.Item label="Mail">
                  <Input />
                </Form.Item>
                <Form.Item label="Nick name">
                  <Input />
                </Form.Item>
                <Form.Item label="Personal Profile">
                  <TextArea />
                </Form.Item>
                <Form.Item label="Country/Region">
                  <Select value="india">
                    <Option value="india">India</Option>
                    <Option value="usa">USA</Option>
                    <Option value="uk">UK</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button type="primary">Submit</Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={6}>
              <Avatar
                src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                size={120}
              />
              <div style={{ marginTop: "20px" }}>
                <Upload>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </div>
            </Col>
          </Row>
        ),
      },
      {
        label: "Security Settings",
        key: "security",
        children: SecuritySettingTabContent,
      },
      {
        label: "Account Binding",
        key: "binding",
        children: AccountBindingTabContent,
      },
      {
        label: "New Message Notification",
        key: "notification",
        children: NotificationSettingTabContent,
      },
    ]}
  />
);

function AccountSettings() {
  return (
    <div style={{ padding: "16px" }}>
      <Card bordered={false}>{TabElement}</Card>
    </div>
  );
}

export default AccountSettings;
