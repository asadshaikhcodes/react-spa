import { useState, useRef, useEffect } from "react";
import {
  Card,
  Layout,
  Row,
  Col,
  Avatar,
  Typography,
  Tag,
  Tabs,
  Space,
  Divider,
  Input,
} from "antd";
import {
  ClusterOutlined,
  ContactsOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import SiteTabElement from "../PageElements.jsx/SiteTabElement";

function AccountCenter() {
  const [tags, setTags] = useState([
    "thoughtful",
    "inclusive",
    "tech enthusiast",
    "focused",
    "sporty",
  ]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, []);

  const tagForMap = (tag) => {
    const tagElem = <Tag>{tag}</Tag>;
    return (
      <span
        key={tag}
        style={{
          display: "inline-block",
        }}
      >
        {tagElem}
      </span>
    );
  };

  const tagChild = tags.map(tagForMap);

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }

    setInputVisible(false);
    setInputValue("");
  };

  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={[16, 16]}>
        <Col lg={6} sm={24}>
          <Card>
            <Row justify="center" gutter={[16, 16]}>
              <Col span={12}>
                <Avatar
                  src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                  size={120}
                />
              </Col>
              <Col span={18}>
                <Typography.Title level={4} style={{ textAlign: "center" }}>
                  Asad Shaikh
                </Typography.Title>
              </Col>
              <Col span={24}>
                <Typography.Text style={{ textAlign: "center" }}>
                  Be tolerant to diversity, tolerance is a virtue
                </Typography.Text>
              </Col>
              <Col span={24}>
                <Typography.Text>
                  <Space>
                    <ContactsOutlined />
                    <span>Interaction expert</span>
                  </Space>
                </Typography.Text>
              </Col>
              <Col span={24}>
                <Typography.Text>
                  <Space>
                    <ClusterOutlined />
                    <span>
                      Ant Financial - XX Business Group - XX Platform Department
                      - XX Technology Department - UED
                    </span>
                  </Space>
                </Typography.Text>
              </Col>
              <Col span={24}>
                <Typography.Text>
                  <Space>
                    <HomeOutlined />
                    <span>Mira Road,Mumbai,IN</span>
                  </Space>
                </Typography.Text>
              </Col>
              <Divider dashed />
              <Col span={24}>
                {tagChild}
                {inputVisible && (
                  <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    style={{
                      width: 78,
                    }}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                  />
                )}
                {!inputVisible && (
                  <Tag onClick={showInput} className="site-tag-plus">
                    <PlusOutlined /> New Tag
                  </Tag>
                )}
              </Col>
              <Divider dashed />
              <Col lg={12} sm={24}>
                <Row>
                  <Col span={6}>
                    <Avatar
                      src="https://joeschmoe.io/api/v1/random"
                      size={20}
                    />
                  </Col>
                  <Col span={18}>
                    <Typography.Text ellipsis>
                      Science moving bricks group
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
              <Col lg={12} sm={24}>
                <Row>
                  <Col span={6}>
                    <Avatar
                      src="https://joeschmoe.io/api/v1/random"
                      size={20}
                    />
                  </Col>
                  <Col span={18}>
                    <Typography.Text ellipsis>
                      Science moving bricks group
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
              <Col lg={12} sm={24}>
                <Row>
                  <Col span={6}>
                    <Avatar
                      src="https://joeschmoe.io/api/v1/random"
                      size={20}
                    />
                  </Col>
                  <Col span={18}>
                    <Typography.Text ellipsis>
                      Science moving bricks group
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
              <Col lg={12} sm={24}>
                <Row>
                  <Col span={6}>
                    <Avatar
                      src="https://joeschmoe.io/api/v1/random"
                      size={20}
                    />
                  </Col>
                  <Col span={18}>
                    <Typography.Text ellipsis>
                      Science moving bricks group
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
              <Col lg={12} sm={24}>
                <Row>
                  <Col span={6}>
                    <Avatar
                      src="https://joeschmoe.io/api/v1/random"
                      size={15}
                    />
                  </Col>
                  <Col span={18}>
                    <Typography.Text ellipsis>
                      Science moving bricks group
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
              <Col lg={12} sm={24}>
                <Row>
                  <Col span={6}>
                    <Avatar
                      src="https://joeschmoe.io/api/v1/random"
                      size={20}
                    />
                  </Col>
                  <Col span={18}>
                    <Typography.Text ellipsis>
                      Science moving bricks group
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={18} sm={24}>
          <Card>
            <SiteTabElement />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AccountCenter;
