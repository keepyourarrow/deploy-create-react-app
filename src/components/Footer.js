import React from "react";

const linkOpacity = "transition duration-1500 ease-in-out hover:opacity-50";

function Copyright() {
  return (
    <div className="sm:max-w-lg sm:mx-auto">
      <div className="mt-6 text-service-card font-medium text-lg sm:text-lg- lg:text-sm xl:text-lg">
        <a className={linkOpacity} href="#">
          sales@burningbuttons.com
        </a>
      </div>
      <div className="mt-2 text-service-card text-opacity-50 font-medium text-sm sm:mt-1">
        Copyright © 2020 Burning Buttons, LLC. All rights reserved
      </div>
    </div>
  );
}

export const Footer = () => {
  return (
    <footer className="bg-nav-links mt-8 sm:mt-14 xl:mt-16">
      <div className="px-6 py-10 flex justify-center  sm:pb-8 sm:pt-0 lg:max-w-3xl+ lg:mx-auto lg:pt-8 lg:pb-16 lg:px-0 xl:max-w-5xl xl:pb-12 xl:pt-10">
        <div className="flex-grow">
          <div className="sm:flex sm:justify-center sm:items-center sm:space-x-12 sm:-mt-6 lg:justify-between lg:mt-0">
            <div>
              <div className="flex space-x-6 sm:space-x-8">
                <a className={linkOpacity} href="facebook.com">
                  <img
                    className="w-10 h-10 lg:w-12 lg:h-12"
                    src="https://thumb.tildacdn.com/tild3861-3737-4662-b764-313034366135/-/resize/50x/-/format/webp/Facebook_burning_but.png"
                    alt=""
                  />
                </a>
                <a className={linkOpacity} href="instagram.net">
                  <img
                    className="w-10 h-10 lg:w-12 lg:h-12"
                    src="https://thumb.tildacdn.com/tild3064-6534-4633-a364-663134313737/-/resize/50x/-/format/webp/Instagram_burning_bu.png"
                    alt=""
                  />
                </a>
                <a className={linkOpacity} href="www.linkedin.net">
                  <img
                    className="w-10 h-10 lg:w-12 lg:h-12"
                    src="https://thumb.tildacdn.com/tild6631-3435-4162-b231-323766636531/-/resize/50x/-/format/webp/Linkedin_burning_but.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="hidden lg:block lg:-mt-2 xl:mt-6">
                <Copyright />
              </div>
            </div>

            <div className="mt-8 flex space-x-6 items-center sm:mt-16 lg:mt-0 xl:space-x-12">
              <a className={`sm:hidden ${linkOpacity}`} href="#">
                <img
                  className="h-24"
                  src="https://thumb.tildacdn.com/tild6562-3831-4338-b366-383135633030/-/resize/153x/-/format/webp/Top_Ruby_on_Rails_De.png"
                  alt=""
                />
              </a>

              <div>
                <a href="#">
                  <img
                    className={`h-13 lg:h-16 xl:h-20 ${linkOpacity}`}
                    src="https://thumb.tildacdn.com/tild3961-6536-4334-a636-323566346362/-/resize/178x/-/format/webp/clutch_new.png"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className={`h-13 lg:h-16 xl:h-20 ${linkOpacity}`}
                    src="https://thumb.tildacdn.com/tild3366-3466-4530-a164-386137386632/-/resize/178x/-/format/webp/goodfirms2.png"
                    alt=""
                  />
                </a>
              </div>
              <a className={`hidden sm:block ${linkOpacity}`} href="#">
                <img
                  className="h-24 sm:h-28 lg:h-32 xl:h-32.5"
                  src="https://thumb.tildacdn.com/tild6562-3831-4338-b366-383135633030/-/resize/153x/-/format/webp/Top_Ruby_on_Rails_De.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          {/* only for smaller screens */}
          <div className="lg:hidden">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
};
