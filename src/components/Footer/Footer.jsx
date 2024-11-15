import React from "react";
import style from "./style.module.scss";
import { DataMenu } from "@components/Footer/constants";

const Footer = () => {
  const { container, boxNav, title } = style;

  return (
    <div className={container}>
      <div>
        <img
          style={{ width: 160, height: 55 }}
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png"
          alt=""
        />
      </div>
      <div className={boxNav}>
        {DataMenu.map((item) => (
          <div>{item.type}</div>
        ))}
      </div>
      <p className={title}>Guaranteed safe ckeckout</p>
      <div>
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"
          alt=""
        />
      </div>
      <div style={{ marginTop: 30 }}>Copyright © 2024 - Nguyen Tien Chinh</div>
    </div>
  );
};

export default Footer;
