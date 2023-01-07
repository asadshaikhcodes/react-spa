import { Button, Card, Result, Row, Col } from "antd";
import SiteStep from "../PageElements.jsx/SiteStep";

const Success = () => (
  <div style={{ padding: "16px" }}>
    <Row>
      <Col span={24}>
        <Card bordered={false}>
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
          <Card
            type="inner"
            bordered={false}
            style={{ height: "300px", backgroundColor: "#eee" }}
          >
            <Row>
              <Col span={24}>
                <SiteStep />
              </Col>
            </Row>
          </Card>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Success;
