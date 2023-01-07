import { Link } from "react-router-dom";
import {
  DashboardOutlined,
  FormOutlined,
  TableOutlined,
  ProfileOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  UserOutlined,
  HighlightOutlined,
} from "@ant-design/icons";
export const MENU_ROUTES = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: <DashboardOutlined />,
    children: [
      {
        label: <Link to="/dashboard/analysis">Analysis</Link>,
        key: "analysis",
      },
      {
        label: <Link to="/dashboard/monitor">Monitor</Link>,
        key: "monitor",
      },
      {
        label: <Link to="/dashboard/workplace">Workplace</Link>,
        key: "workplace",
      },
    ],
  },
  {
    label: "Form",
    key: "form",
    icon: <FormOutlined />,
    children: [
      {
        label: <Link to="/form/basic-form">Basic Form</Link>,
        key: "basic-form",
      },
      {
        label: <Link to="/form/step-form">Step Form</Link>,
        key: "step-form",
      },
      {
        label: <Link to="/form/advanced-form">Advanced Form</Link>,
        key: "advanced-form",
      },
    ],
  },
  {
    label: "List",
    key: "list",
    icon: <TableOutlined />,
    children: [
      {
        label: "Search List",
        key: "search",
        children: [
          {
            label: (
              <Link
                to="/list/search/articles"
                state={{ pageTitle: "articles", pageKey: "articles" }}
              >
                Search List(articles)
              </Link>
            ),
            key: "articles",
          },
          {
            label: (
              <Link
                to="/list/search/projects"
                state={{ pageTitle: "projects", pageKey: "projects" }}
              >
                Search List(projects)
              </Link>
            ),
            key: "projects",
          },
          {
            label: (
              <Link
                to="/list/search/applications"
                state={{ pageTitle: "applications", pageKey: "applications" }}
              >
                Search List(applications)
              </Link>
            ),
            key: "applications",
          },
        ],
      },
      {
        label: <Link to="/list/basic-list">Basic List</Link>,
        key: "basic-list",
      },
      {
        label: <Link to="/list/table-list">Search Table</Link>,
        key: "table-list",
      },
      {
        label: <Link to="/list/card-list">Card List</Link>,
        key: "card-list",
      },
    ],
  },
  {
    label: "Profile",
    key: "profile",
    icon: <ProfileOutlined />,
    children: [
      {
        label: <Link to="/profile/basic">Basic Profile</Link>,
        key: "basic",
      },
      {
        label: <Link to="/profile/advanced">Advanced Profile</Link>,
        key: "advanced",
      },
    ],
  },
  {
    label: "Result",
    key: "result",
    icon: <CheckCircleOutlined />,
    children: [
      {
        label: <Link to="/result/success">Success</Link>,
        key: "success",
      },
      {
        label: <Link to="/result/fail">Fail</Link>,
        key: "fail",
      },
    ],
  },
  {
    label: "Exception",
    key: "exception",
    icon: <WarningOutlined />,
    children: [
      {
        label: <Link to="/exception/403">403</Link>,
        key: "403",
      },
      {
        label: <Link to="/exception/404">404</Link>,
        key: "404",
      },
      {
        label: <Link to="/exception/500">500</Link>,
        key: "500",
      },
    ],
  },
  {
    label: "Account",
    key: "account",
    icon: <UserOutlined />,
    children: [
      {
        label: <Link to="/account/center">Account Center</Link>,
        key: "center",
      },
      {
        label: <Link to="/account/settings">Account Settings</Link>,
        key: "settings",
      },
    ],
  },
  {
    label: "Graphics Editor",
    key: "editor",
    icon: <HighlightOutlined />,
    children: [
      {
        label: <Link to="/editor/flow">Flow Editor</Link>,
        key: "flow",
      },
      {
        label: <Link to="/editor/mind">Mind Editor</Link>,
        key: "mind",
      },
      {
        label: <Link to="/editor/koni">Koni Editor</Link>,
        key: "koni",
      },
    ],
  },
];
