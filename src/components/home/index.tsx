import {Button, DatePicker} from "antd";
import React, {useEffect, useState} from "react";

const HomeComp = () => {
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
    <div data-testid="home-page">
      <h1>{"Hello world!"}</h1>
      <h1 className="text-3xl font-bold underline">{"Hello world!"}</h1>

      <div className="w-full max-w-xs">
        <Button type="primary">Primary Button</Button>

        <DatePicker placeholder="select date" />
      </div>
    </div>
  );
};

export default HomeComp;
