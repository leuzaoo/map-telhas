import React from "react";

export default function Center({ children }) {
  return (
    <div className="px-5 lg:px-0 mx-auto w-full max-w-screen-lg">
      {children}
    </div>
  );
}
