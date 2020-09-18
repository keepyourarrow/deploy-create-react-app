import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XOutline } from "@graywolfai/react-heroicons";
import avatar from "../test1233.png";

function IconSVG() {
  return (
    <svg viewBox="0 0 25 25">
      <path
        fill="#FFFFFF"
        d="M23.295 24.412a.987.987 0 0 1-1.123-.43L19.9 20.358H9.527c-1.392 0-2.523-1.153-2.523-2.57V16.3c0-.563.448-1.02 1-1.02.553 0 1 .457 1 1.02v1.485c0 .295.235.533.523.533h10.92c.036 0 .067.018.103.022a.96.96 0 0 1 .527.224.984.984 0 0 1 .14.15c.023.026.054.043.073.075l.725 1.154V9.7a.528.528 0 0 0-.523-.532h-1.48c-.55 0-1-.457-1-1.02 0-.56.45-1.018 1-1.018h1.48c1.392 0 2.524 1.152 2.524 2.57V23.433c0 .452-.293.85-.72.978zM14.49 13.226H4.116L1.844 16.85a.997.997 0 0 1-1.124.43 1.017 1.017 0 0 1-.72-.978V2.57C0 1.152 1.132 0 2.523 0H14.49c1.39 0 2.52 1.152 2.52 2.57v8.085c0 1.418-1.13 2.57-2.52 2.57zm.52-10.656a.528.528 0 0 0-.52-.532H2.522c-.288 0-.522.24-.522.532v10.242l.726-1.153c.02-.032.05-.05.07-.076a.897.897 0 0 1 .296-.256.92.92 0 0 1 .372-.118c.037-.004.068-.022.104-.022h10.92c.288 0 .522-.238.522-.533V2.57z"
      ></path>
    </svg>
  );
}
function EmojiSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        fill="#9DA9B0"
        fill-rule="evenodd"
        d="M8 16c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM8 1.333A6.674 6.674 0 0 0 1.333 8 6.674 6.674 0 0 0 8 14.667 6.674 6.674 0 0 0 14.667 8 6.674 6.674 0 0 0 8 1.333zm0 12c-1.942 0-3.705-1.167-4.601-3.046A.666.666 0 1 1 4.6 9.713C5.275 11.123 6.577 12 8 12c1.431 0 2.733-.875 3.397-2.285a.666.666 0 1 1 1.206.57c-.886 1.88-2.65 3.048-4.603 3.048zM10.667 8a1.335 1.335 0 0 1-1.334-1.333 1.335 1.335 0 0 1 2.667 0C12 7.402 11.402 8 10.667 8zM5.333 8A1.335 1.335 0 0 1 4 6.667c0-.736.599-1.334 1.333-1.334a1.335 1.335 0 0 1 0 2.667z"
      ></path>
    </svg>
  );
}
function DriftSVG() {
  return (
    <svg width="12" height="12" viewBox="0 0 8 14">
      <path
        fill="#FEF79E"
        fill-rule="evenodd"
        stroke="#F5A623"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".938"
        d="M4.256 5.777h3.65L.716 15.935l2.721-7.927H.14l6.503-10.08-2.387 7.849z"
      ></path>
    </svg>
  );
}

export const Help = () => {
  const [openHelper, setOpenHelper] = useState(false);
  return (
    <div className="relative">
      {/* button */}
      <div className="fixed bottom-24 right-24">
        <button
          type="button"
          className="px-4 py-4 flex justify-center bg-nav-links-hover rounded-full shadow-help-button hover:bg-help-button-hover focus:outline-none"
          onClick={() => setOpenHelper(!openHelper)}
        >
          <span className="w-6 h-6">
            {!openHelper ? <IconSVG /> : <XOutline className="text-white " />}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {openHelper && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed bottom-100 right-24 max-w-sm-- rounded-lg border-t-8 border-nav-links-hover px-4 py-4 bg-white"
          >
            <div className="relative">
              <div className="absolute -mt-10">
                <img
                  className="w-15 h-15 rounded-full border-2 border-white"
                  src={avatar}
                  alt=""
                />
              </div>
              <div className="ml-16+ -mt-1 text-xs-+ text-gray-600">
                Evgeniya Sitnikova from Burning Buttons
              </div>
            </div>
            <div className="mt-4 text-xs+ text-help-button-cont">
              Feel free to ask me anything about Burning Buttons. I am here to
              help you!
            </div>

            <div className="mt-3 relative w-full flex justify-end">
              <textarea
                className="form-textarea resize-none w-full placeholder-gray-600"
                type="text"
                rows="1"
                placeholder="Reply to Evgeniya Sitnikova"
              />
              <span className="absolute right-0 flex items-center h-full mr-3">
                <EmojiSVG />
              </span>
            </div>
            <div className="mt-4 flex justify-center space-x-1 items-center text-xs- hover:text-blue-drift cursor-pointer">
              <span>Chat</span>
              <DriftSVG />
              <div>
                by <span className="text-blue-drift">Drift</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
