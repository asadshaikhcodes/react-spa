import {
  Layout,
  Row,
  Col,
  PageHeader,
  Card,
  List,
  Breadcrumb,
  Button,
  Avatar,
  Divider,
  Statistic
} from "antd";
import ContentPageHeader from "../PageElements.jsx/ContentPageHeader";
import { PlusOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

const { Header, Content } = Layout;



const cardListData = [
  {
    title: "Angular",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    imgSrc: "https://joeschmoe.io/api/v1/random",
  },
  {
    title: "Ant Design",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    imgSrc: "https://joeschmoe.io/api/v1/random",
  },
  {
    title: "React",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    imgSrc: "https://joeschmoe.io/api/v1/random",
  },
  {
    title: "Bootstrap",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    imgSrc: "https://joeschmoe.io/api/v1/random",
  },
  {
    title: "Vue",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    imgSrc: "https://joeschmoe.io/api/v1/random",
  },
  {
    title: "Webpack",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    imgSrc: "https://joeschmoe.io/api/v1/random",
  },
  {
    title: "Ant Design Pro",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    imgSrc: "https://joeschmoe.io/api/v1/random",
  },
];

function CardList() {
  return (
    <Layout>
      <Header className="site-plain-header">
        <Breadcrumb style={{ padding: "8px" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <ContentPageHeader title={"Card List"} showContents />
      </Header>
      <Content>
        <div style={{ padding: "16px" }}>
          <Row gutter={[16, 16]}>
            {cardListData.map((cardData, index) => {
              return (
                <Col lg={6} sm={24}>
                  {index == 0 ? (
                    <Button
                      type="dashed"
                      style={{ width: "100%", height: "200px" }}
                    >
                      <PlusOutlined />
                    </Button>
                  ) : (
                    <Card
                      style={{ height: "200px" }}
                      actions={[
                        <>
                          <Button type="link" ghost>
                            Action
                          </Button>
                          <Divider type="vertical"/>
                          <Button type="link" ghost>
                            Action
                          </Button>
                        </>,
                      ]}
                    >
                      <Meta
                        avatar={<Avatar src={cardData.imgSrc} size={40} />}
                        title={cardData.title}
                        description={cardData.description}
                      />
                    </Card>
                  )}
                </Col>
              );
            })}
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default CardList;
