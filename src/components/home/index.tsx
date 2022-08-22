import {Button, DatePicker} from "antd";
import Head from "next/head";
import React, {useEffect, useState} from "react";

const Home = () => {
  console.log("hello");
  const test: String = "21";
  const [a, setA] = useState(false);

  const object1 = ["1", "2", "2", "4", "4", "5", "5", "5", "4", "4", "5", "5"];
  const object2 = ["1", "2", "2", "4", "4", "5", "5", "5", "4", "4", "5", "5"];
  const object3 = ["1", "2", "2", "4", "4", "5", "5", "5", "4", "4", "5", "5"];
  const object4 = ["1", "2", "2", "4", "4", "5", "5", "5", "4", "4", "5", "5"];
  const arr = [object1, object2, object3, object4];
  console.log("arr", arr, test);

  useEffect(() => {
    // setA(a);
    console.log("UseEffect", a, setA);

    if (a) {
      console.log("test false");
    } else {
      console.log("test true");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  );
};

export default Home;
