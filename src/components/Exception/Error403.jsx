import { Button, Result } from "antd";
function Error403() {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you don't have access to this page."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
}

export default Error403;
