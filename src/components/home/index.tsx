import {Button, DatePicker} from "antd";
import React, {useCallback, useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import Input from "../../common/react-form/input";

const HomeComp = () => {
  console.log("hello");
  const test: String = "21";
  const [a, setA] = useState(false);

  const {register, handleSubmit} = useForm();

  const object1 = ["1", "2", "2", "4", "4", "5", "5", "5", "4", "4", "5", "5"];
  const object2 = ["1", "2", "2", "4", "4", "5", "5", "5", "4", "4", "5", "5"];
  const object3 = ["1", "2", "2", "4", "4", "5", "5", "5", "4", "4", "5", "5"];
  const object4 = ["1", "2", "2", "4", "4", "5", "5", "5", "4", "4", "5", "5"];
  const arr = [object1, object2, object3, object4];
  console.log("arr", arr, test);

  const onSubmit = useCallback((data: any) => {
    alert(JSON.stringify(data));
  }, []);

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
    <>
      <h1>{"Hello world!"}</h1>
      <h1 className="text-3xl font-bold underline">{"Hello world!"}</h1>

      <div className="w-full max-w-xs">
        <form
          className={"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <Input label="First Name" register={register} required />
          </div>

          {/* <Select label="Age" {...register("Age")} /> */}
          <input
            className={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            }
            type="submit"
          />
        </form>

        <Button type="primary">Primary Button</Button>

        <DatePicker placeholder="select date" />
      </div>
    </>
  );
};

export default HomeComp;
