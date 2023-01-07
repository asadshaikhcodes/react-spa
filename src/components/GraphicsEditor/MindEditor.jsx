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
function MindEditor() {
  return (
    <Layout>
      <Header className="site-plain-header">
        <Breadcrumb style={{ padding: "8px" }}>
          <Breadcrumb.Item>
            <Link to="/editor/flow">Graphics Editor</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Mind Editor</Breadcrumb.Item>
        </Breadcrumb>
        <ContentPageHeader
          title={"Mind Editor"}
          footer={
            <Typography.Text>
              Brain map is an effective graphical thinking tool for expressing
              divergent thinking. It is simple but very effective and is a
              practical thinking tool.
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
            <Col span={18}>
              <Card bordered={false}>
                <div
                  style={{
                    height: "400px",
                    width: "100%",
                    background:
                      "lightblue url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAAEeCAYAAADhKCyjAAAAAXNSR0IArs4c6QAAD5RJREFUeF7t3YduHDkWBVDO5pzj/3/cptmc8+ICTaDRa2toj/xUV3MaMBZjscWn84i7rGKp/dHyIkCAAIEjgY+ORhlEgAABAktgWgQECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDBAgQOBQQmIdQhhEgQEBgWgMECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDBAgQOBQQmIdQhhEgQEBgWgMECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDBAgQOBQQmIdQhhEgQEBgWgMECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDBAgQOBQQmIdQhhEgQEBgWgMECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDBAgQOBQQmIdQhhEgQEBgWgMECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDBAgQOBQQmIdQhhEgQEBgWgMECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDBAgQOBQQmIdQhhEgQEBgWgMECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDBAgQOBQQmIdQhhEgQEBgWgMECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDBAgQOBQQmIdQhhEgQEBgWgMECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDBAgQOBQQmIdQhhEgQEBgWgMECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDBAgQOBQQmIdQhhEgQEBgWgMECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDBAgQOBQQmIdQhhEgQEBgWgMECBA4FBCYh1CGESBAQGBaAwQIEDgUEJiHUIYRIEBAYFoDkwKfW2v99/bnTfPm61mT/54sylwETgUE5qmUcZ9GIEH4g7XW19daP1tr/e3hm311rfW929fzpd+utT5+Ilg/TS3eS+C9BQTme9N54zsIZJ39aK317bXWr29/9tu/udb67u3vEqRfvo395VrrL+8wh6EEPriAwPzgxCa4XWYnMPNKIGaX+c+11hfXWj++7Sb3rjO70Yz9z1rrV3aZ1s+VBATmlbrRW0tC7lu3HeRv1lp/fPhR9g4zO8bsMvP136+1vnS3u/zXLUxz6Z7xn78F6z96WVT+2gQE5mvr6Mv8PHtXmHuUObD5xVrrrw+lfH+t9ffbrjK7zFxyZxeZV8Ixl+XfuO0qs9v8ye2SPPczvQhcQkBgXqINr6KIhF0ObrKL/Npa6+drrfvdYQIzl+H5u4Rhvp5gzBrMrjKhm4OeBO7ekeaSPeOy+/Qi8OICAvPFW1BTwFfWWl9Ya/3pLRXnawnCXG5nx5jx2WnuR4R2YOb9uUeZ8MwBUELxp7ed5d6V5lI94/N9/rzW+p17mTXr5FUXKjBfdXuf9YfLvcdcct+H4OMEuazO5XYOaxJ4eWXXmEvv3OPM6w+3S+/sRnP4k6/l4CfBmsvvhGXmyvdIqOa5TS8ClxAQmJdowyWLyCVygisBty+TU+hTAZZd5b7cTtglCHPZnSDM40PZTWZXeb8bzeFP3vfDW1hmvuwo834vApcSEJiXaselikm4JfwScPt5yOwe85B5Qu5NwbkPf/bldnaL+zI9obsDMz9odqP5Xk/tWC8FohgCAtMaeJtA1sbe9e3L5YzN/cfHA53777EPf/azltk95lAnhz35PgngvBKmCczc89yn5bpB4NICAvPS7XnR4hJm2R3mtX/rZp9e5/Ggtz3u83i5nffv75Wdar6X+5Iv2lqTv6+AwHxfudf5vpxKJ8yy48vldcIvu8OcVOcyPK/sIL/zCY/7vOlyO5fzeTzIB2u8zrXzmfipBOZnos1P/pBZAznBTggm1BJo2QXu39Z5PB3f9zazw3zbI0a53M6jQrk/+fhBG8QJ1AoIzNrWPUvh+1OE8r8JwOwAE5D7wfP895sOf/LIUP7+/rd1HgvK2nLp/Sxt8k2uIiAwr9KJuTpyCJNL5r2DzO7y/qQ6u8zsDvP85N5B7ofI94dh5Ht80uHP3E9kJgJDAgJzCPoC02TXmHuUCcjco8yOMrvEXD7nAzP2/cmEaV451d47yBzaJCB3sOb9OUF/6vDnAj+yEgg8r4DAfF7PK3+3HNbkQfIc3uTRnvvL5ewqc7iTv8sucp907w/73c9XJmxzTzKPFeVeZ4LTZfeVu662ZxUQmM/K+cG/WfqV8HoqqBJ+OcDJ7jE7wP1bMzsEc+J9/0jQvkeZ37DJnwTgPrTJJfl+bnJ/5FqCUkh+8Fab4IoCAvOKXfn/mhKC++PPdmDmMjrBdx9e+fXD/I72PsDJrjL3G/eD5rkXmeC8fxYy78nOce8aM3v+O5fw+2PYHj+qrUNNlQSeWUBgPjPoB/h2CbTcL8xuL5fTOblOmOUSOru/7Arzyq4wl9y5pL7/9PK8N6+E5P7nH+5/UyeBmkOehGweLE/IJlT3v6ljN/kBmupbdgoIzGv3bV8u57L68VPME2r3l8cJujwSlDDMJXuCcD8ilPdmR5rwy+HN/WHNfg4zO9O8L6GcEPbritdeG6p7AQGB+QLo7zDlPp3O4csn/VMNe9eZe5QJzwRegjb/naDMCXl2pye/qfMOJRpK4LMjIDCv3ev9aT/Z9WWXuA9esrvcv2qY+4sJwn1Qk8vxBGV2kXntD9HYH3yxD38y5m2/qXNtFdUReCEBgflC8O8wbU689z/h8Ka35aPU9odjZFwu4+8fRN8BmXuU2W3mld2m3+l+hyYYSmDvPkhcXyChlyDMKwG5713mxDz3HndIJgjzCUO5HM99yPwfYgI3hzm5h+m+5PV7rcILC9hhXrg5h6U93udMaO7DnoRrLud9AMYhpmEEnhIQmD3rYz9/+VjxDsdchttB9vRTpYUCArOjaQnF/Eko7sOc/W/u5IH23MN0gNPRS1UWCwjMjublMjsPoOeRoB2YOSXPo0Z5wHz/mzsdP40qCZQKCMyexqVXuV+ZB9LzXGUeJ0p4+k2cnh6qtFxAYJY3UPkECMwJCMw5azMRIFAuIDDLG6h8AgTmBATmnLWZCBAoFxCY5Q1UPgECcwICc87aTAQIlAsIzPIGKp8AgTkBgTlnbSYCBMoFBGZ5A5VPgMCcgMCcszYTAQLlAgKzvIHKJ0BgTkBgzlmbiQCBcgGBWd5A5RMgMCcgMOeszUSAQLmAwCxvoPIJEJgTEJhz1mYiQKBcQGCWN1D5BAjMCQjMOWszESBQLiAwyxuofAIE5gQE5py1mQgQKBcQmOUNVD4BAnMCAnPO2kwECJQLCMzyBiqfAIE5AYE5Z20mAgTKBQRmeQOVT4DAnIDAnLM2EwEC5QICs7yByidAYE5AYM5Zm4kAgXIBgVneQOUTIDAnIDDnrM1EgEC5gMAsb6DyCRCYExCYc9ZmIkCgXEBgljdQ+QQIzAkIzDlrMxEgUC4gMMsbqHwCBOYEBOactZkIECgXEJjlDVQ+AQJzAgJzztpMBAiUCwjM8gYqnwCBOQGBOWdtJgIEygUEZnkDlU+AwJyAwJyzNhMBAuUCArO8gconQGBOQGDOWZuJAIFyAYFZ3kDlEyAwJyAw56zNRIBAuYDALG+g8gkQmBMQmHPWZiJAoFxAYJY3UPkECMwJCMw5azMRIFAuIDDLG6h8AgTmBATmnLWZCBAoFxCY5Q1UPgECcwICc87aTAQIlAsIzPIGKp8AgTkBgTlnbSYCBMoFBGZ5A5VPgMCcgMCcszYTAQLlAgKzvIHKJ0BgTkBgzlmbiQCBcgGBWd5A5RMgMCcgMOeszUSAQLmAwCxvoPIJEJgTEJhz1mYiQKBcQGCWN1D5BAjMCQjMOWszESBQLiAwyxuofAIE5gQE5py1mQgQKBcQmOUNVD4BAnMCAnPO2kwECJQLCMzyBiqfAIE5AYE5Z20mAgTKBQRmeQOVT4DAnIDAnLM2EwEC5QICs7yByidAYE5AYM5Zm4kAgXIBgVneQOUTIDAnIDDnrM1EgEC5gMAsb6DyCRCYExCYc9ZmIkCgXEBgljdQ+QQIzAkIzDlrMxEgUC4gMMsbqHwCBOYEBOactZkIECgXEJjlDVQ+AQJzAgJzztpMBAiUCwjM8gYqnwCBOQGBOWdtJgIEygUEZnkDlU+AwJyAwJyzNhMBAuUCArO8gconQGBOQGDOWZuJAIFyAYFZ3kDlEyAwJyAw56zNRIBAuYDALG+g8gkQmBMQmHPWZiJAoFxAYJY3UPkECMwJCMw5azMRIFAuIDDLG6h8AgTmBATmnLWZCBAoFxCY5Q1UPgECcwICc87aTAQIlAsIzPIGKp8AgTkBgTlnbSYCBMoFBGZ5A5VPgMCcgMCcszYTAQLlAgKzvIHKJ0BgTkBgzlmbiQCBcgGBWd5A5RMgMCcgMOeszUSAQLmAwCxvoPIJEJgTEJhz1mYiQKBcQGCWN1D5BAjMCQjMOWszESBQLiAwyxuofAIE5gQE5py1mQgQKBcQmOUNVD4BAnMCAnPO2kwECJQLCMzyBiqfAIE5AYE5Z20mAgTKBQRmeQOVT4DAnIDAnLM2EwEC5QICs7yByidAYE5AYM5Zm4kAgXIBgVneQOUTIDAnIDDnrM1EgEC5gMAsb6DyCRCYExCYc9ZmIkCgXEBgljdQ+QQIzAkIzDlrMxEgUC4gMMsbqHwCBOYEBOactZkIECgXEJjlDVQ+AQJzAgJzztpMBAiUCwjM8gYqnwCBOQGBOWdtJgIEygUEZnkDlU+AwJyAwJyzNhMBAuUCArO8gconQGBOQGDOWZuJAIFyAYFZ3kDlEyAwJyAw56zNRIBAuYDALG+g8gkQmBMQmHPWZiJAoFxAYJY3UPkECMwJCMw5azMRIFAuIDDLG6h8AgTmBATmnLWZCBAoFxCY5Q1UPgECcwICc87aTAQIlAsIzPIGKp8AgTkBgTlnbSYCBMoFBGZ5A5VPgMCcgMCcszYTAQLlAgKzvIHKJ0BgTkBgzlmbiQCBcgGBWd5A5RMgMCcgMOeszUSAQLmAwCxvoPIJEJgTEJhz1mYiQKBcQGCWN1D5BAjMCQjMOWszESBQLiAwyxuofAIE5gQE5py1mQgQKBcQmOUNVD4BAnMCAnPO2kwECJQLCMzyBiqfAIE5AYE5Z20mAgTKBQRmeQOVT4DAnIDAnLM2EwEC5QICs7yByidAYE5AYM5Zm4kAgXIBgVneQOUTIDAnIDDnrM1EgEC5gMAsb6DyCRCYExCYc9ZmIkCgXOB/o+0rLhtopiUAAAAASUVORK5CYII=') repeat center",
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
                    title="Node"
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

export default MindEditor;
