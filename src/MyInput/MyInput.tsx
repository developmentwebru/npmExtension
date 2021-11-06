import React, { FC } from "react";
import "./MyInput.css";

export interface MyInputProps {
  placeholder: string;
  label: string;
  big?: boolean;
}

const MyInput: FC<MyInputProps> = ({
  children,
  label,
  placeholder,
  big,
  ...props
}) => {
  const classes = ["my-input"];
  if (big) {
    classes.push("big-input");
  }
  return (
    <label>
      {label}
      <input
        {...props}
        className={classes.join(" ")}
        placeholder={placeholder}
      />
    </label>
  );
};

export default MyInput;
