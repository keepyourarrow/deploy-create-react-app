import React from "react";

export const Tilda = () => {
  return (
    <div className="py-5 bg-tilda-bg flex justify-center">
      <div className="-ml-6 flex items-center space-x-2 opacity-40">
        <span className="text-xs font-light">Made on</span>
        <img
          className="w-7+ h-7+"
          src="https://static.tildacdn.com/img/tildacopy_black.png"
          alt=""
        />
        <span className="text-sm font-medium">Tilda</span>
      </div>
    </div>
  );
};
