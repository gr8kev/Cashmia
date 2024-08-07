import React from "react";

const Button = ({ item, active }) => {
  return (
    <a
      className="lg:flex-row lg:gap-3 lg:my-5 object-contain flex flex-col items-center"
      href={item.route}
    >
      {" "}
      <img
        className={
          active === item.title
            ? "border p-2 rounded-lg shadow-md"
            : "object-contain"
        }
        src={item.icon}
        alt="s"
      />
      <p className="font-bold">{item.title}</p>
    </a>
  );
};

export default Button;
