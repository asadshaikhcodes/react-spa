import {
  Avatar,
  Card,
  Row,
  Col,
  Tooltip,
  Divider,
  Typography,
  Progress,
  Button,
  DatePicker,
  List,
  Table,
  Menu,
  Dropdown,
  Radio,
  Space,
  Statistic,
} from "antd";
import {
  InfoCircleOutlined,
  CaretUpOutlined,
  ArrowDownOutlined,
  EllipsisOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { AreaChart } from "../Charts/AreaChart";
import { BarChart } from "../Charts/BarChart";
import moment from "moment";
import { TABLE_COLUMNS, TABLE_DATA } from "../../helper-constants/tableData";
import { DoughnutChart } from "../Charts/DoughnutChart";
const { RangePicker } = DatePicker;

const barchartCardBigTablist = [
  {
    key: "App",
    tab: "App",
  },
  {
    key: "Article",
    tab: "Article",
  },
];

const areaChartBigTablist = new Array(30).fill({
  key: "tabItem",
  tab: (
    <>
      <Typography.Title level={4}>30%</Typography.Title>
      <Progress percent={30} size="small" type="circle" showInfo={false} />
    </>
  ),
});

const dropdownMenuItems = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
      },
    ]}
  />
);

const DropdownMenu = () => (
  <Dropdown overlay={dropdownMenuItems}>
    <EllipsisOutlined />
  </Dropdown>
);

const listData = [
  "List Item 1",
  "List Item 2",
  "List Item 3",
  "List Item 4",
  "List Item 5",
  "List Item 6",
  "List Item 7",
];

const BarChartBigList = (
  <>
    <List
      header="List Items Group"
      dataSource={listData}
      renderItem={(item) => (
        <List.Item key={item}>
          <List.Item.Meta title={item} />
          <div>323,234</div>
        </List.Item>
      )}
      bordered={false}
      size={"small"}
    />
  </>
);

const contentListNoTitle = {
  App: (
    <div>
      <Row gutter={[50, 16]}>
        <Col lg={18} sm={24}>
          <div style={{ height: "100%" }}>
            <BarChart />
          </div>
        </Col>
        <Col lg={6} sm={24}>
          {BarChartBigList}
        </Col>
      </Row>
    </div>
  ),
  Article: (
    <div>
      <Row gutter={[50, 16]}>
        <Col lg={18} sm={24}>
          <div style={{ height: "100%" }}>
            <BarChart />
          </div>
        </Col>
        <Col lg={6} sm={24}>
          {BarChartBigList}
        </Col>
      </Row>
    </div>
  ),
};

const areaChartBigTablistContent = {
  TabItem: (
    <div style={{ height: "100%", width: "100%" }}>
      <AreaChart />
    </div>
  ),
};

const barChartBigExtraContent = (
  <Row>
    <Col>
      <Button type="link" ghost>
        Quarter One
      </Button>
    </Col>
    <Col>
      <Button type="link" ghost>
        Quarter Two
      </Button>
    </Col>
    <Col>
      <Button type="link" ghost>
        Quarter Three
      </Button>
    </Col>
    <Col>
      <Button type="link" ghost>
        Quarter Four
      </Button>
    </Col>
    <Col>
      <RangePicker
        defaultValue={[
          moment("2015/01/01", "YYYY/MM/DD"),
          moment("2015/01/01", "YYYY/MM/DD"),
        ]}
        format={"YYYY/MM/DD"}
      />
    </Col>
  </Row>
);

function Analysis() {
  console.log("tab list", areaChartBigTablist);
  const [barchartTabActiveKey, setBarchartTabActiveKey] = useState("App");
  const [areaChartBigActiveKey, setAreaChartBigActiveKey] = useState("TabItem");
  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={[16, 16]}>
        <Col lg={6} sm={24}>
          <Card
            title={<Typography.Title level={2}>126,560</Typography.Title>}
            extra={
              <Tooltip title="Icon Tooltip">
                <InfoCircleOutlined />
              </Tooltip>
            }
            style={{ height: "300px" }}
            bordered={false}
          >
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
            <Divider type="horizontal" />
            <span>Total: 12,423</span>
          </Card>
        </Col>
        <Col lg={6} sm={24}>
          <Card
            title={<Typography.Title level={2}>126,560</Typography.Title>}
            extra={
              <Tooltip title="Icon Tooltip">
                <InfoCircleOutlined />
              </Tooltip>
            }
            style={{ height: "300px" }}
            bordered={false}
            bodyStyle={{ padding: "0px 10px 16px 10px" }}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <AreaChart />
            </div>
            <Divider type="horizontal" />
            <span>Total: 12,423</span>
          </Card>
        </Col>
        <Col lg={6} sm={24}>
          <Card
            title={<Typography.Title level={2}>126,560</Typography.Title>}
            extra={
              <Tooltip title="Icon Tooltip">
                <InfoCircleOutlined />
              </Tooltip>
            }
            style={{ height: "300px" }}
            bordered={false}
            bodyStyle={{ padding: "0px 10px 16px 10px" }}
          >
            <div>
              <BarChart />
            </div>
            <Divider type="horizontal" />
            <span>Total: 12,423</span>
          </Card>
        </Col>
        <Col lg={6} sm={24}>
          <Card
            title={<Typography.Title level={2}>126,560</Typography.Title>}
            extra={
              <Tooltip title="Icon Tooltip">
                <InfoCircleOutlined />
              </Tooltip>
            }
            style={{ height: "300px" }}
            bordered={false}
            bodyStyle={{ padding: "16px" }}
          >
            <Typography.Title level={3}>78%</Typography.Title>
            <Progress percent={78} showInfo={false} />
            <Divider type="horizontal" />
            <span>Total: 12,423</span>
          </Card>
        </Col>
        <Col span={24}>
          <Card
            style={{ width: "100%", height: "450px" }}
            tabList={barchartCardBigTablist}
            activeTabKey={barchartTabActiveKey}
            tabBarExtraContent={barChartBigExtraContent}
            onTabChange={(key) => {
              setBarchartTabActiveKey(key);
            }}
            bodyStyle={{ padding: "5px 10px" }}
          >
            {contentListNoTitle[barchartTabActiveKey]}
          </Card>
        </Col>
        <Col lg={12} sm={24}>
          <Card title="Analysis Table" style={{ height: "650px" }}>
            <Row>
              <Col span={24}>
                <Row>
                  <Col span={12}>
                    <Card type="inner" bordered={false}>
                      <Typography.Title level={3}>12,321</Typography.Title>
                      <span>
                        17.1
                        <CaretUpOutlined style={{ color: "red" }} />
                      </span>
                      <div>
                        <AreaChart />
                      </div>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card type="inner" bordered={false}>
                      <Typography.Title level={3}>12,321</Typography.Title>
                      <span>
                        17.1
                        <CaretUpOutlined style={{ color: "red" }} />
                      </span>
                      <div>
                        <AreaChart />
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Table
                  columns={TABLE_COLUMNS}
                  dataSource={TABLE_DATA}
                  pagination={{ defaultPageSize: 5, size: "small" }}
                  size="small"
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={12} sm={24}>
          <Card
            title="Doghnut Chart"
            extra={
              <Space>
                <Radio.Group>
                  <Radio.Button value="large">Monthly</Radio.Button>
                  <Radio.Button value="default">Weekly</Radio.Button>
                  <Radio.Button value="small">Daily</Radio.Button>
                </Radio.Group>
                <DropdownMenu />
              </Space>
            }
            style={{ height: "650px" }}
            bodyStyle={{ height: "90%" }}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <DoughnutChart />
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Card
            style={{ height: "600px" }}
            tabList={new Array(30)
              .fill({
                key: "tabItem",
                tab: (
                  <Row>
                    <Col>
                      <Typography.Title level={3}>30%</Typography.Title>
                    </Col>
                    <Col>
                      <Progress
                        percent={30}
                        size="small"
                        type="circle"
                        showInfo={false}
                      />
                    </Col>
                  </Row>
                ),
              })
              .map((_, i) => {
                const id = String(i);
                return {
                  key: "TabItem",
                  tab: (
                    <>
                      <Typography.Title level={4}>30%</Typography.Title>
                      <Progress
                        percent={30}
                        size="small"
                        type="circle"
                        showInfo={false}
                      />
                    </>
                  ),
                  key: id,
                };
              })}
            bodyStyle={{ padding: "16px", height: "400px", width: "100%" }}
          >
            {areaChartBigTablistContent[areaChartBigActiveKey]}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Analysis;
