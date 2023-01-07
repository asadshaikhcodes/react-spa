import {
  Layout,
  Row,
  Col,
  Card,
  Breadcrumb,
  Statistic,
  Radio,
  Input,
  Space,
  Typography,
  Divider,
} from "antd";
import ContentPageHeader from "../PageElements.jsx/ContentPageHeader";
import { Link } from "react-router-dom";
import {
  RedoOutlined,
  UndoOutlined,
  CopyOutlined,
  ReconciliationOutlined,
  DeleteOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  BorderHorizontalOutlined,
} from "@ant-design/icons";
const { Header, Content } = Layout;
function FlowEditor() {
  return (
    <Layout>
      <Header className="site-plain-header">
        <Breadcrumb style={{ padding: "8px" }}>
          <Breadcrumb.Item>
            <Link to="/editor/flow">Graphics Editor</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Flow Editor</Breadcrumb.Item>
        </Breadcrumb>
        <ContentPageHeader
          title={"Flow Editor"}
          footer={
            <Typography.Text>
              A thousand words are not as good as a picture, and a flowchart is
              a good way to express the idea of ​​an algorithm
            </Typography.Text>
          }
        />
      </Header>
      <Content style={{ padding: "16px" }}>
        <Card
          title={
            <div style={{ backgroundColor: "#eee", padding: "16px" }}>
              <Row justify="space-around" align="middle">
                <Col>
                  <UndoOutlined />
                </Col>
                <Col>
                  <RedoOutlined />
                </Col>
                <Col>
                  <Divider type="vertical" />
                </Col>
                <Col>
                  <CopyOutlined />
                </Col>
                <Col>
                  <ReconciliationOutlined />
                </Col>
                <Col>
                  <DeleteOutlined />
                </Col>
                <Col>
                  <Divider type="vertical" />
                </Col>
                <Col>
                  <ZoomInOutlined />
                </Col>
                <Col>
                  <ZoomOutOutlined />
                </Col>
                <Col>
                  <BorderHorizontalOutlined />
                </Col>
              </Row>
            </div>
          }
        >
          <Row>
            <Col span={6}>
              <Row>
                <Col span={24}>
                  <Card bordered={false}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImIiIGN4PSIzNiIgY3k9IjM2IiByPSIzNiIvPjxmaWx0ZXIgeD0iLTkuNyUiIHk9Ii02LjklIiB3aWR0aD0iMTE5LjQlIiBoZWlnaHQ9IjExOS40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRkZGMkU4IiB4bGluazpocmVmPSIjYiIvPjxjaXJjbGUgc3Ryb2tlPSIjRkZDMDY5IiBjeD0iMzYiIGN5PSIzNiIgcj0iMzUuNSIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPjx0c3BhbiB4PSIyMyIgeT0iNDEiPlN0YXJ0PC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==" />
                  </Card>
                </Col>
                <Col span={24}>
                  <Card bordered={false}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iNDgiIHJ4PSI0Ii8+PGZpbHRlciB4PSItOC44JSIgeT0iLTEwLjQlIiB3aWR0aD0iMTE3LjUlIiBoZWlnaHQ9IjEyOS4yJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRTZGN0ZGIiB4bGluazpocmVmPSIjYiIvPjxyZWN0IHN0cm9rZT0iIzE4OTBGRiIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNzkiIGhlaWdodD0iNDciIHJ4PSI0Ii8+PC9nPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHRzcGFuIHg9IjIxIiB5PSIyOSI+Tm9ybWFsPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==" />
                  </Card>
                </Col>
                <Col span={24}>
                  <Card bordered={false}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iNzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik00Mi42NyAxLjY3bDM0Ljk2NSAzMS4zNTJhNCA0IDAgMCAxIDAgNS45NTZMNDIuNjcgNzAuMzNhNCA0IDAgMCAxLTUuMzQgMEwyLjM2NSAzOC45NzhhNCA0IDAgMCAxIDAtNS45NTZMMzcuMzMgMS42N2E0IDQgMCAwIDEgNS4zNCAweiIgaWQ9ImIiLz48ZmlsdGVyIHg9Ii04LjglIiB5PSItNi45JSIgd2lkdGg9IjExNy41JSIgaGVpZ2h0PSIxMTkuNCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAxKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0U2RkZGQiIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBzdHJva2U9IiM1Q0RCRDMiIGQ9Ik00Mi4zMzcgMi4wNDJhMy41IDMuNSAwIDAgMC00LjY3NCAwTDIuNjk4IDMzLjM5NGEzLjUgMy41IDAgMCAwIDAgNS4yMTJsMzQuOTY1IDMxLjM1MmEzLjUgMy41IDAgMCAwIDQuNjc0IDBsMzQuOTY1LTMxLjM1MmEzLjUgMy41IDAgMCAwIDAtNS4yMTJMNDIuMzM3IDIuMDQyeiIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMSkiPjx0c3BhbiB4PSIxOCIgeT0iNDIiPkRlY2lzaW9uPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==" />
                  </Card>
                </Col>
                <Col span={24}>
                  <Card bordered={false}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iNDgiIHJ4PSIyNCIvPjxmaWx0ZXIgeD0iLTguOCUiIHk9Ii0xMC40JSIgd2lkdGg9IjExNy41JSIgaGVpZ2h0PSIxMjkuMiUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0Y5RjBGRiIgeGxpbms6aHJlZj0iI2IiLz48cmVjdCBzdHJva2U9IiNCMzdGRUIiIHg9Ii41IiB5PSIuNSIgd2lkdGg9Ijc5IiBoZWlnaHQ9IjQ3IiByeD0iMjMuNSIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPjx0c3BhbiB4PSIyNCIgeT0iMjkiPk1vZGVsPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==" />
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Card bordered={false}>
                <div
                  style={{
                    height: "400px",
                    width: "100%",
                    background:
                      "lightblue url('data:image/png;base64,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') repeat center",
                  }}
                ></div>
              </Card>
            </Col>
            <Col span={6}>
              <Row>
                <Col span={24}>
                  <Card
                    type="inner"
                    style={{ height: "200px" }}
                    title="Canvas"
                  />
                </Col>
                <Col span={24}>
                  <Card
                    type="inner"
                    style={{ height: "400px" }}
                    title="Minimap"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Content>
    </Layout>
  );
}

export default FlowEditor;
