import { MenuOutlined } from "@ant-design/icons";
import { Affix, Anchor, Button, Drawer } from "antd";
import { useState } from "react";
import { Link } from "remix";
const { Link: LinkA } = Anchor;
export default function Header() {
  const [menu, setMenu] = useState("home");
  const handleClick = (e: any) => {
    setMenu(e.key);
  };
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <Affix offsetTop={0}>
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <Link to="/">REMIX movie</Link>
          </div>
          <div className="mobileHidden">
            <Anchor targetOffset={65}>
              <LinkA href="#about" title="About" />
              <LinkA href="#contact" title="Contact" />
            </Anchor>
          </div>
          <div className="mobileVisible">
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Anchor targetOffset={65}>
                <LinkA href="#about" title="About" />
                <LinkA href="#contact" title="Contact" />
              </Anchor>
            </Drawer>
          </div>
        </div>
      </div>
    </Affix>
  );
}
