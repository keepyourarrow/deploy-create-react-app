import React from "react";

export const Header = () => {
  return (
    <header className="mt-16 pt-3 lg:pt-5">
      <div className="bg-nav-links text-white pl-12 pr-6 py-20 lg:py-32 xl:pt-24 xl:pb-32">
        <div className="flex max-w-sm mx-auto lg:max-w-full xl:container lg:justify-center  ">
          <div className="lg:max-w-lg lg:pl-12 xl:pl-0 xl:ml-4">
            <h1 className="text-3xl- font-bold leading-tight sm:text-3xl xl:text-4xl">
              <strong>
                Fast Track Turnkey <br />
                IT Solutions
              </strong>
            </h1>
            <p className=" mt-4 pr-12 text-sm xl:text-lg">
              We do the full cycle development and can help you out with both
              creation of a new exquisite IT-product and adding a value{" "}
              <br className="lg:hidden" />
              to your existing ones
            </p>
            <div className="mt-6 xl:mt-12">
              <button
                className="px-4 py-3 leading-5 rounded-md text-sm uppercase tracking-wide font-semibold
              bg-white transition duration-200 text-nav-links hover:text-nav-links-hover sm:text-base xl:text-lg xl:leading-9"
              >
                Leave Request
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://thumb.tildacdn.com/tild3032-3837-4539-b461-316362663837/-/resize/640x/-/format/webp/Group_23.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};
