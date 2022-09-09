import {Row} from "antd";

import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  return (
    <>
      <Row className={`py-30 ${styles.bg}`}>
        <div className={`mx-auto ${styles.pd}`}>
          <p className="my-7">Discount code: 50% </p>
        </div>
      </Row>
    </>
  );
}
