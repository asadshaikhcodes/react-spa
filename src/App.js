import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import {
  Layout,
  Menu,
  Row,
  Col,
  Card,
  Tabs,
  Dropdown,
  Typography,
  Input,
  Badge,
  Divider,
  Avatar,
} from "antd";
import { MENU_ROUTES } from "./helper-constants/routes";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import DashboardWrapper from "./components/Dashboard/DashboardWrapper";
import Analysis from "./components/Dashboard/Analysis";
import Monitor from "./components/Dashboard/Monitor";
import Workplace from "./components/Dashboard/Workplace";
import FormWrapper from "./components/Form/FormWrapper";
import BasicForm from "./components/Form/BasicForm";
import StepForm from "./components/Form/StepForm";
import AdvancedForm from "./components/Form/AdvancedForm";
import ListWrapper from "./components/List/ListWrapper";
import Wrapper from "./components/List/SearchList/Wrapper";
import Articles from "./components/List/SearchList/Articles";
import Projects from "./components/List/SearchList/Projects";
import Applications from "./components/List/SearchList/Applications";
import BasicList from "./components/List/BasicList";
import SearchTable from "./components/List/SearchTable";
import CardList from "./components/List/CardList";
import ProfileWrapper from "./components/Profile/ProfileWrapper";
import BasicProfile from "./components/Profile/BasicProfile";
import AdvancedProfile from "./components/Profile/AdvancedProfile";
import ResultWrapper from "./components/Result/ResultWrapper";
import Success from "./components/Result/Success";
import Fail from "./components/Result/Fail";
import ExceptionWrapper from "./components/Exception/ExceptionWrapper";
import Error403 from "./components/Exception/Error403";
import Error404 from "./components/Exception/Error404";
import Error500 from "./components/Exception/Error500";
import AccountWrapper from "./components/Account/AccountWrapper";
import AccountCenter from "./components/Account/AccountCenter";
import AccountSettings from "./components/Account/AccountSettings";
import EditorWrapper from "./components/GraphicsEditor/EditorWrapper";
import FlowEditor from "./components/GraphicsEditor/FlowEditor";
import MindEditor from "./components/GraphicsEditor/MindEditor";
import KoniEditor from "./components/GraphicsEditor/KoniEditor";
import SiteTabElement from "./components/PageElements.jsx/SiteTabElement";
import Meta from "antd/lib/card/Meta";
const { Header, Content, Sider, Footer } = Layout;

function App() {
  const [openKeys, setOpenKeys] = useState("");
  const [activeKey, setActiveKey] = useState("");
  const [searchbarExpanded, setSearchbarExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const path = location.pathname.split("/");
    console.log(path);
    setOpenKeys([path[1]]);
    setActiveKey(path[2]);
    console.log("location in app js", location);
    if (location.pathname === "/") {
      navigate("dashboard/analysis");
    }
  }, [location, navigate]);

  useEffect(() => {
    const path = location.pathname.split("/");
    console.log(path);
    setOpenKeys([path[1]]);
    setActiveKey(path[2]);
  }, []);

  const NotificationOverlay = () => {
    return (
      <Menu
        items={[
          {
            label: (
              <Tabs
                defaultActiveKey="notifications"
                items={[
                  {
                    label: "Notifications",
                    key: "notifications",
                    children: (
                      <Row>
                        <Col span={24}>
                          <Card bordered={false}>
                            <Meta
                              title="Notification 3"
                              avatar={<Avatar size="small" />}
                              description="Notification description"
                            />
                          </Card>
                        </Col>
                        <Col span={24}>
                          <Card bordered={false}>
                            <Meta
                              title="Notification 3"
                              avatar={<Avatar size="small" />}
                              description="Notification description"
                            />
                          </Card>
                        </Col>
                        <Col span={24}>
                          <Card bordered={false}>
                            <Meta
                              title="Notification 3"
                              avatar={<Avatar size="small" />}
                              description="Notification description"
                            />
                          </Card>
                        </Col>
                      </Row>
                    ),
                  },
                  { label: "Infromation", key: "messages" },
                  { label: "Upcoming", key: "upcoming" },
                ]}
              />
            ),
          },
        ]}
      />
    );
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Header>
        <Row align="middle">
          <Col span={12}>
            <Typography.Title level={3} style={{ color: "#fff" }}>
              React Single Page App
            </Typography.Title>
          </Col>
          <Col span={12}>
            <Row align="middle" justify="end">
              <Col>
                <Row>
                  <Col>
                    <SearchOutlined
                      onClick={() => setSearchbarExpanded(!searchbarExpanded)}
                      style={{ color: "#fff" }}
                    />
                  </Col>
                  <Col>{searchbarExpanded && <Input size="small" />}</Col>
                </Row>
              </Col>
              <Row justify="space-around" align="center">
                <Col>
                  <Divider type="vertical" />
                </Col>
                <Col>
                  <QuestionCircleOutlined style={{ color: "#fff" }} />
                </Col>
                <Col>
                  <Divider type="vertical" />
                </Col>
                <Col>
                  <Dropdown
                    overlay={<NotificationOverlay />}
                    overlayStyle={{
                      width: "400px",
                    }}
                    trigger="click"
                    arrow
                  >
                    <Badge
                      color="red"
                      count="11"
                      size="small"
                      style={{ lineHeight: "initial" }}
                    >
                      <BellOutlined style={{ color: "#fff" }} />
                    </Badge>
                  </Dropdown>
                </Col>
                <Col>
                  <Divider type="vertical" />
                </Col>
                <Col>
                  <Avatar
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Pale"
                    size="small"
                  />
                </Col>
                <Col>
                  <Divider type="vertical" />
                </Col>
                <Col>
                  <Typography.Text style={{ color: "#fff" }}>
                    User Name
                  </Typography.Text>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Header>
      <Layout style={{ height: "100%" }}>
        <Sider collapsible className="side-nav">
          <Menu
            items={MENU_ROUTES}
            mode="inline"
            style={{ height: "550px", overflow: "hidden auto" }}
          />
        </Sider>
        <Content style={{ height: "600px", overflowY: "auto" }}>
          <Routes>
            <Route path="dashboard/*" element={<DashboardWrapper />}>
              <Route index path="analysis" element={<Analysis />} />
              <Route path="monitor" element={<Monitor />} />
              <Route path="workplace" element={<Workplace />} />
            </Route>
            <Route path="form/*" element={<FormWrapper />}>
              <Route index path="basic-form" element={<BasicForm />} />
              <Route path="step-form" element={<StepForm />} />
              <Route path="advanced-form" element={<AdvancedForm />} />
            </Route>
            <Route />
            <Route path="list/*" element={<ListWrapper />}>
              <Route path="search/*" element={<Wrapper />}>
                <Route index path="articles" element={<Articles />} />
                <Route path="projects" element={<Projects />} />
                <Route path="applications" element={<Applications />} />
              </Route>
              <Route path="basic-list" element={<BasicList />} />
              <Route index path="table-list" element={<SearchTable />} />
              <Route path="card-list" element={<CardList />} />
            </Route>
            <Route path="profile/*" element={<ProfileWrapper />}>
              <Route index path="basic" element={<BasicProfile />} />
              <Route path="advanced" element={<AdvancedProfile />} />
            </Route>
            <Route path="result/*" element={<ResultWrapper />}>
              <Route index path="success" element={<Success />} />
              <Route path="fail" element={<Fail />} />
            </Route>
            <Route path="exception/*" element={<ExceptionWrapper />}>
              <Route path="403" element={<Error403 />} />
              <Route path="404" element={<Error404 />} />
              <Route path="500" element={<Error500 />} />
            </Route>
            <Route path="account/*" element={<AccountWrapper />}>
              <Route path="center" element={<AccountCenter />} />
              <Route path="settings" element={<AccountSettings />} />
            </Route>
            <Route path="editor/*" element={<EditorWrapper />}>
              <Route path="flow" element={<FlowEditor />} />
              <Route path="mind" element={<MindEditor />} />
              <Route path="koni" element={<KoniEditor />} />
            </Route>
          </Routes>
          <Layout>
            <Footer>
              React Single Page App &#169;{new Date().getFullYear()} Created by Asad Shaikh
            </Footer>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
