import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const SocialRight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.25 }}
      className="w-[26%] h-full bg-neutral-900 flex items-center justify-start flex-col"
    >
      {/* Person */}
      <div className="w-[calc(100%-2rem)] p-4 bg-neutral-800 m-4 rounded-xl flex justify-evenly items-center">
        <div className="rounded-full w-14 h-14 bg-neutral-700 flex flex-col items-center justify-center gap-1">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="rounded-full w-14 h-14 bg-neutral-700 flex items-center justify-center text-3xl">
          <FontAwesomeIcon icon={faCommentDots} />
        </div>
        <div className="rounded-full w-14 h-14 bg-neutral-700 flex items-center justify-center text-3xl">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="rounded-full w-14 h-14">
          <img
            className="rounded-full"
            src={`${"data:image/jpeg;base64,"}${sessionStorage.getItem(
              "profilePicture"
            )}`}
            alt=""
          />
        </div>
      </div>

      {/* Suggested Consultants */}
      {sessionStorage.getItem("type") === "client" ? (
        <SuggestedClient />
      ) : (
        <SuggestedConsultant />
      )}

      {/* Advertisements */}
      <div className="w-full p-4 overflow-y-scroll no-scrollbar">
        <h2 className="font-bold text-2xl">Advertisements</h2>

        {/* Pb Tech */}
        <div className="w-full my-2 cursor-pointer bg-neutral-800 flex items-center gap-4 p-3 rounded-xl">
          <div
            className="rounded-full w-20 h-20 overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://www.pbtech.com/pacific/imglib/articles/thumb-alt/news_20190219211832_PB-New-icon_Full-Colour_Blue.png')",
            }}
          ></div>

          <h2 className="font-bold text-2xl">PB Tech</h2>
        </div>

        {/* Square */}
        <div className="w-full mt-4 cursor-pointer bg-neutral-800 flex items-center gap-4 p-3 rounded-xl">
          <div
            className="rounded-full w-20 h-20 overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://cdn.lovesavingsgroup.com/logos/square.jpg')",
            }}
          ></div>

          <h2 className="font-bold text-2xl">Square</h2>
        </div>
      </div>
    </motion.div>
  );
};

const SuggestedClient = () => {
  return (
    <div className="w-full p-4 overflow-y-scroll no-scrollbar">
      <h2 className="font-bold text-2xl">Suggested Consultants</h2>

      {/* Henrietta Hanson */}
      <div className="w-full my-2 cursor-pointer border-t-2 border-b-2 border-gray-400 py-4 flex items-center gap-4">
        <div
          className="rounded-full w-20 h-20 overflow-hidden bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg')",
          }}
        ></div>

        <div>
          <h2 className="font-bold text-2xl">Juan Hunt</h2>
          <button className="border-2 py-2 px-4 rounded-3xl my-2 w-40">
            + Follow
          </button>
        </div>
      </div>

      {/* Juan Hunt */}
      <div className="w-full my-2 cursor-pointer border-t-2 border-b-2 border-gray-400 py-4 flex items-center gap-4">
        <div
          className="rounded-full w-20 h-20 overflow-hidden bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJ-L3t3md2dFuiWghVdwCEr_Ru6AzKQ2hX0fiNQrn&s')",
          }}
        ></div>

        <div>
          <h2 className="font-bold text-2xl">Juan Hunt</h2>
          <button className="border-2 py-2 px-4 rounded-3xl my-2 w-40">
            + Follow
          </button>
        </div>
      </div>
    </div>
  );
};

const SuggestedConsultant = () => {
  return (
    <div className="w-full p-4 overflow-y-scroll no-scrollbar">
      <h2 className="font-bold text-2xl">Suggested Consultants</h2>

      {/* Henrietta Hanson */}
      <div className="w-full my-2 cursor-pointer border-t-2 border-b-2 border-gray-400 py-4 flex items-center gap-4">
        <div
          className="rounded-full w-20 h-20 overflow-hidden bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg')",
          }}
        ></div>

        <div>
          <h2 className="font-bold text-2xl">Apple</h2>
          <button className="border-2 py-2 px-4 rounded-3xl my-2 w-40">
            + Follow
          </button>
        </div>
      </div>

      {/* Juan Hunt */}
      <div className="w-full my-2 cursor-pointer border-t-2 border-b-2 border-gray-400 py-4 flex items-center gap-4">
        <div
          className="rounded-full w-20 h-20 overflow-hidden bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456')",
          }}
        ></div>

        <div>
          <h2 className="font-bold text-2xl">Netflix</h2>
          <button className="border-2 py-2 px-4 rounded-3xl my-2 w-40">
            + Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialRight;
