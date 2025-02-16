import React from "react";

const JSXRules = (props) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];

  const userInfo = [
    {
      name: "timbo",
      email: "timbo@gmail.com",
    },
    {
      name: "tintin",
      email: "tintin@gmail.com",
    },
    {
      name: "rambo",
      email: "rambo@gmail.com",
    },
  ];

  return (
    <main>
      <h1>JSX Rules</h1>
      <p>JSX must return a single parent element</p>
      <p>JSX element must be properly closed</p>
      <ol>
        {userInfo.map(({ name, email }, index) => (
          <li key={index}>
            <span>{name}</span> &nbsp;&nbsp;
            <span>{email}</span>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default JSXRules;
