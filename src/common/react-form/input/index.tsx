import React from "react";
import {UseFormRegister} from "react-hook-form";

type InputFormType = {
  label: string;
  register: UseFormRegister<any>;
  required: boolean;
  typeInput?: "primary" | " secondary" | "black";
};

// The following component is an example of your existing Input Component
const Input: React.FC<InputFormType> = ({label, register, required}) => (
  <>
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Username"
      type={"text"}
      {...register(label, {required})}
    />
  </>
);

export default React.memo(Input);
