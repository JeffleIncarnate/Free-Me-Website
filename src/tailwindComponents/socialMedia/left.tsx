import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faCalendar,
  faIdCardClip,
  faPeopleGroup,
  faShop,
  faTv,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const SocialLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.2 }}
      className="w-[26%] h-full bg-neutral-900 flex items-center justify-start flex-col"
    >
      {/* Profile TOP LEFT */}
      <div className="w-full flex items-center gap-4 p-4">
        <div className="rounded-full w-16 h-16">
          <img
            className="rounded-full"
            src={`${"data:image/jpeg;base64,"}${sessionStorage.getItem(
              "profilePicture"
            )}`}
            alt=""
          />
        </div>
        <h2 className="font-bold capitalize text-2xl">{`${sessionStorage.getItem(
          "firstname"
        )} ${sessionStorage.getItem("lastname")}`}</h2>
      </div>

      {/* Icons */}
      <div className="w-full">
        {/* Friends */}
        <div className="flex gap-4 p-4 cursor-pointer">
          <FontAwesomeIcon icon={faUserGroup} className="text-2xl w-8" />
          <h2 className="font-bold">Friends</h2>
        </div>

        {/* Calender */}
        <div className="flex gap-4 p-4 cursor-pointer">
          <FontAwesomeIcon icon={faCalendar} className="text-2xl w-8" />
          <h2 className="font-bold">Events</h2>
        </div>

        {/* Most Recent */}
        <div className="flex gap-4 p-4 cursor-pointer">
          <FontAwesomeIcon icon={faIdCardClip} className="text-2xl w-8" />
          <h2 className="font-bold">Most Recent</h2>
        </div>

        {/* Groups */}
        <div className="flex gap-4 p-4 cursor-pointer">
          <FontAwesomeIcon icon={faPeopleGroup} className="text-2xl w-8" />
          <h2 className="font-bold">Groups</h2>
        </div>

        {/* Marketplace */}
        <div className="flex gap-4 p-4 cursor-pointer">
          <FontAwesomeIcon icon={faShop} className="text-2xl w-8" />
          <h2 className="font-bold">Marketplace</h2>
        </div>

        {/* Watch */}
        <div className="flex gap-4 p-4 cursor-pointer">
          <FontAwesomeIcon icon={faTv} className="text-2xl w-8" />
          <h2 className="font-bold">Watch</h2>
        </div>

        {/* See More */}
        <div className="flex gap-4 p-4 cursor-pointer">
          <FontAwesomeIcon icon={faAngleDown} className="text-2xl w-8" />
          <h2 className="font-bold">See More</h2>
        </div>
      </div>

      {sessionStorage.getItem("type") === "client" ? (
        <RecentlyViewedClient />
      ) : (
        <RecentlyViewedConsultant />
      )}
    </motion.div>
  );
};

const RecentlyViewedClient = () => {
  return (
    <div className="w-full p-4 overflow-y-scroll no-scrollbar">
      <h2 className="font-bold text-2xl">Recently Visited Consultants</h2>

      {/* Henrietta Hanson */}
      <div className="w-full my-2 cursor-pointer border-t-2 border-b-2 border-gray-400 py-4">
        <div className="w-full flex items-center gap-4">
          <div
            className="rounded-full w-20 h-20 overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg')",
            }}
          ></div>

          <h2 className="font-bold text-2xl">Henrietta Hanson</h2>
        </div>
      </div>

      {/* Juan Hunt */}
      <div className="w-full my-2 cursor-pointer border-t-2 border-b-2 border-gray-400 py-4">
        <div className="w-full flex items-center gap-4">
          <div
            className="rounded-full w-20 h-20 overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJ-L3t3md2dFuiWghVdwCEr_Ru6AzKQ2hX0fiNQrn&s')",
            }}
          ></div>

          <h2 className="font-bold text-2xl">Juan Hunt</h2>
        </div>
      </div>

      {/* Steve Martinez */}
      <div className="w-full my-2 cursor-pointer border-t-2 border-b-2 border-gray-400 py-4">
        <div className="w-full flex items-center gap-4">
          <div
            className="rounded-full w-20 h-20 overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80')",
            }}
          ></div>

          <h2 className="font-bold text-2xl">Steve Martinez</h2>
        </div>
      </div>
    </div>
  );
};

const RecentlyViewedConsultant = () => {
  return (
    <div className="w-full p-4 overflow-y-scroll no-scrollbar">
      <h2 className="font-bold text-2xl">Recently Visited Consultants</h2>

      {/* Henrietta Hanson */}
      <div className="w-full my-2 cursor-pointer border-t-2 border-b-2 border-gray-400 py-4">
        <div className="w-full flex items-center gap-4">
          <div
            className="rounded-full w-20 h-20 overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://www.techjunkie.com/wp-content/uploads/2020/11/How-to-Change-the-Google-Logo.jpg')",
            }}
          ></div>

          <h2 className="font-bold text-2xl">Google</h2>
        </div>
      </div>

      {/* Juan Hunt */}
      <div className="w-full my-2 cursor-pointer border-t-2 border-b-2 border-gray-400 py-4">
        <div className="w-full flex items-center gap-4">
          <div
            className="rounded-full w-20 h-20 overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg')",
            }}
          ></div>

          <h2 className="font-bold text-2xl">Apple</h2>
        </div>
      </div>

      {/* Steve Martinez */}
      <div className="w-full my-2 cursor-pointer border-t-2 border-b-2 border-gray-400 py-4">
        <div className="w-full flex items-center gap-4">
          <div
            className="rounded-full w-20 h-20 overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456')",
            }}
          ></div>

          <h2 className="font-bold text-2xl">Netflix</h2>
        </div>
      </div>
    </div>
  );
};

export default SocialLeft;
