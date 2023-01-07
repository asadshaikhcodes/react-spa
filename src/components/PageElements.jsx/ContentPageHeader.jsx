import { MoreOutlined } from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Menu,
  PageHeader,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";

const { Paragraph } = Typography;

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
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
            href="http://www.taobao.com/"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu} placement="bottomRight">
    <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
  </Dropdown>
);

const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu",
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu",
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu",
  },
];

const IconLink = ({ src, text }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const content = (
  <>
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level
      color system and a product-level color system.
    </Paragraph>
    <Space>
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Quick Start"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text=" Product Info"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Product Doc"
      />
    </Space>
  </>
);

const RenderBreadcrumb = (showBreadcrumb, breadcrumbRoutes = []) => {
  if (showBreadcrumb) {
    if (breadcrumbRoutes.length > 0) {
      return breadcrumbRoutes;
    } else {
      return routes;
    }
  }
};

const Content = ({ children, extraContent }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
    <div className="image">{extraContent}</div>
  </Row>
);

const ContentPageHeader = ({
  showTags = false,
  tags,
  showSubTitle = false,
  subTitle,
  showExtra = false,
  showAvatar = false,
  extraContent,
  moreContents,
  moreContentsExtras,
  showContents = false,
  title,
  footer = null,
}) => (
  <PageHeader
    title={title ? title : "Title"}
    className="site-page-header"
    subTitle={
      showSubTitle ? (subTitle ? subTitle : "This is a subtitle") : null
    }
    tags={showTags ? tags ? tags : <Tag color="blue">Running</Tag> : null}
    extra={
      showExtra
        ? extraContent
          ? extraContent
          : [
              <Button key="3">Operation</Button>,
              <Button key="2">Operation</Button>,
              <Button key="1" type="primary">
                Primary
              </Button>,
              <DropdownMenu key="more" />,
            ]
        : null
    }
    avatar={
      showAvatar
        ? {
            src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
          }
        : null
    }
    footer={footer}
  >
    {showContents ? (
      <Content
        extraContent={
          moreContentsExtras ? (
            moreContentsExtras
          ) : (
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
              alt="content"
              width="100%"
            />
          )
        }
      >
        {moreContents ? moreContents : content}
      </Content>
    ) : null}
  </PageHeader>
);

export default ContentPageHeader;
