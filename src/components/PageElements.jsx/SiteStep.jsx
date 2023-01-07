import "antd/dist/antd.css";
import { Popover, Steps } from "antd";

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const SiteStep = () => (
  <Steps current={1} progressDot={customDot}>
    <Step title="Create project" description="You can hover on the dot." />
    <Step title="Department Preliminary Review" description="You can hover on the dot." />
    <Step title="financial review" description="You can hover on the dot." />
    <Step title="Finish" description="You can hover on the dot." />
  </Steps>
);

export default SiteStep;
