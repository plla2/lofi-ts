import { Alert } from "react-bootstrap";

interface Prop {
  variant: string;
  children: string;
}

const Message = ({ variant, children }: Prop) => {
  return <Alert variant={variant}>{children}</Alert>;
};
Message.defaultProps = {
  variant: "info",
};
export default Message;
