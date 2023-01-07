import { Avatar, Card, Row, Col, Typography, Progress } from "antd";
import { useEffect, useState } from "react";
import { AreaChart } from "../Charts/AreaChart";
import { BubbleChart } from "../Charts/BubbleChart";
import { DoughnutChart } from "../Charts/DoughnutChart";
import { PieChart } from "../Charts/PieChart";

function Monitor() {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    let timerId = setInterval(() => setTimer(new Date()), 1);
    return () => clearInterval(timerId);
  }, [timer]);

  const hour = timer.getHours();
  const minutes = timer.getMinutes();
  const seconds = timer.getSeconds();
  const milSeconds = timer.getMilliseconds();
  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={[16, 16]}>
        <Col lg={18} sm={24}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="Monitor">
                <Row align="middle" gutter={[16, 16]}>
                  <Col lg={6} sm={24}>
                    <Card type="inner" bordered={false}>
                      <Typography.Text type="secondary">Total</Typography.Text>
                      <Typography.Title level={3}>124,543,233</Typography.Title>
                    </Card>
                  </Col>
                  <Col lg={6} sm={24}>
                    <Card type="inner" bordered={false}>
                      <Typography.Text type="secondary">
                        Percentage
                      </Typography.Text>
                      <Typography.Title level={3}>92%</Typography.Title>
                    </Card>
                  </Col>
                  <Col lg={6} sm={24}>
                    <Card
                      type="inner"
                      bordered={false}
                      bodyStyle={{ width: "100%", height: "100%",padding:'0px' }}
                    >
                      <Typography.Text type="secondary">Timer</Typography.Text>
                      <Typography.Title
                        level={3}
                      >{`${hour}:${minutes}:${seconds}:${milSeconds}`}</Typography.Title>
                    </Card>
                  </Col>
                  <Col lg={6} sm={24}>
                    <Card type="inner" bordered={false}>
                      <Typography.Text type="secondary">Count</Typography.Text>
                      <Typography.Title level={3}>234</Typography.Title>
                    </Card>
                  </Col>
                  <Col span={24}>
                    <Card
                      style={{ height: "600px" }}
                      bodyStyle={{
                        height: "600px",
                        width: "100%",
                        padding: "16px",
                      }}
                      bordered={false}
                    >
                      <BubbleChart />
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={6} sm={24}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card
                title="Area Chart"
                bodyStyle={{ height: "250px", padding: "16px" }}
                style={{ height: "400px" }}
              >
                <Typography.Text type="secondary">Chart</Typography.Text>
                <Typography.Title level={3} style={{ margin: "0px" }}>
                  Chart Summary
                </Typography.Title>
                <div style={{ height: "100%", width: "100%" }}>
                  <AreaChart />
                </div>
              </Card>
            </Col>
            <Col span={24}>
              <Card
                title="Meter"
                bodyStyle={{ height: "300px", padding: "16px" }}
                style={{ height: "400px" }}
              >
                <DoughnutChart />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <div style={{ marginTop: "16px" }}>
        <Row gutter={[16, 16]}>
          <Col lg={12} sm={24}>
            <Card title="Monitor Status Summary" style={{ height: "300px" }}>
              <Row align="middle" gutter={[16, 16]}>
                <Col sm={24} lg={8}>
                  <Progress
                    strokeColor="coral"
                    percent={28}
                    size="default"
                    type="circle"
                  />
                </Col>
                <Col sm={24} lg={8}>
                  <Progress
                    percent={22}
                    strokeColor="indigo"
                    size="default"
                    type="circle"
                  />
                </Col>
                <Col sm={24} lg={8}>
                  <Progress
                    percent={32}
                    strokeColor="seagreen"
                    size="default"
                    type="circle"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={6} sm={24}>
            <Card title="Typography" style={{ height: "300px" }}>
              <Typography.Text>Ant Design (default)</Typography.Text>
              <Typography.Text type="secondary">
                Ant Design (secondary)
              </Typography.Text>
              <Typography.Text type="success">
                Ant Design (success)
              </Typography.Text>
              <Typography.Text type="warning">
                Ant Design (warning)
              </Typography.Text>
              <Typography.Text type="danger">
                Ant Design (danger)
              </Typography.Text>
              <Typography.Text disabled>Ant Design (disabled)</Typography.Text>
              <Typography.Text mark>Ant Design (mark)</Typography.Text>
              <Typography.Text code>Ant Design (code)</Typography.Text>
              <Typography.Text keyboard>Ant Design (keyboard)</Typography.Text>
              <Typography.Text underline>
                Ant Design (underline)
              </Typography.Text>
              <Typography.Text delete>Ant Design (delete)</Typography.Text>
              <Typography.Text strong>Ant Design (strong)</Typography.Text>
              <Typography.Text italic>Ant Design (italic)</Typography.Text>
            </Card>
          </Col>
          <Col lg={6} sm={24}>
            <Card title="Pie Chart Card" style={{ height: "300px" }}>
              <PieChart />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Monitor;
