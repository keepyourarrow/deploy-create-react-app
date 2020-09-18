import React from "react";

export const Achievements = () => {
  return (
    <div className="bg-achievements py-8">
      <div className="grid grid-rows-2 gap-8 pr-12 sm:pr-0 sm:flex sm:items-center sm:justify-center sm:space-x-8 sm:gap-0 lg:space-x-10 xl:space-x-24 xl:mr-20">
        <div className="mx-auto sm:mx-0">
          <div className="flex items-center space-x-6 sm:space-x-1 ml-14 sm:ml-0 lg:space-x-4">
            <img
              className="w-10 h-10 lg:w-15 lg:h-15"
              src="https://thumb.tildacdn.com/tild3735-3366-4933-b261-366630313832/-/resize/60x/-/format/webp/photo.png"
              alt=""
            />
            <div>
              <div className="text-gray-600 text-xs- font-medium uppercase tracking-wide leading-5 lg:text-xs">
                TOP RATED AGENCY ON UPWORK
              </div>
              <p className="font-bold text-nav-links lg:text-xl+">
                99% Job Success
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-6 sm:space-x-2 lg:space-x-4 mx-auto pr-2">
          <img
            className="w-10 h-10 lg:w-12 lg:h-12"
            src="https://thumb.tildacdn.com/tild3831-3934-4434-a433-363231643362/-/resize/50x/-/format/webp/photo.png"
            alt=""
          />
          <div>
            <div className="text-gray-600 text-xs- font-medium uppercase tracking-wide leading-5 lg:text-xs">
              WORKED MORE than
            </div>
            <p className="font-bold text-nav-links lg:text-xl+">400k hours</p>
          </div>
        </div>
        <div className="flex items-center space-x-6 sm:space-x-2 lg:space-x-4 mx-auto">
          <img
            className="h-10 lg:h-15"
            src="https://thumb.tildacdn.com/tild6462-3637-4863-a231-353934623736/-/resize/44x/-/format/webp/photo.png"
            alt=""
          />
          <div>
            <div className="text-gray-600 text-xs- font-medium uppercase tracking-wide leading-5 lg:text-xs">
              EARNED MORE THAN{" "}
            </div>
            <p className="font-bold text-nav-links lg:text-xl+">
              5 Million Dollars
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
