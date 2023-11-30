import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faChartPie,
  faCube,
  faChartSimple,
  faUser,
  faMagnifyingGlassArrowRight,
  faCircleNodes,
  faPeopleRobbery,
  faFile,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { motion, AnimatePresence } from "framer-motion";

import { NavigateFunction, useNavigate } from "react-router-dom";
import { useState, Dispatch, SetStateAction, useEffect } from "react";

interface ChildProps {
  navigate: NavigateFunction;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

function DashboardConsultant() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <main className="w-full p-4 flex item-center justify-center flex-col gap-4 mt-[15vh]">
      <div className="w-full flex items-center justify-center gap-4">
        <SocialMedia
          navigate={navigate}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <CurrentJobs
          navigate={navigate}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>

      <div className="w-full flex items-center justify-center gap-4">
        <Profile
          navigate={navigate}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <Opportunities
          navigate={navigate}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <div className="w-1/3 h-[30rem] flex flex-col gap-4">
          <Chat
            navigate={navigate}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
          <Balances
            navigate={navigate}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>

      <div className="w-full flex item-center justify-center gap-4">
        <CorporateNetwork
          navigate={navigate}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <Friends
          navigate={navigate}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <Placeholder
          navigate={navigate}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </main>
  );
}

const SocialMedia = ({ navigate }: ChildProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      className="w-1/2 h-[30rem] bg-neutral-900 flex items-center justify-center flex-col gap-4 p-8 cursor-pointer group-hover:-translate-x-full transition-all duration-500"
    >
      <FontAwesomeIcon icon={faCommentDots} className="text-7xl" />
      <h2 className="text-4xl font-bold">Social Media</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea id
        sed. Voluptatem optio mollitia eius?
      </p>
    </motion.div>
  );
};

const CurrentJobs = ({ navigate }: ChildProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      className="w-1/2 h-[30rem] bg-neutral-900 flex items-center justify-center flex-col gap-4 p-8 cursor-pointer group-hover:-translate-x-full transition-all duration-500"
    >
      <FontAwesomeIcon icon={faChartPie} className="text-7xl" />
      <h2 className="text-4xl font-bold">Current Jobs</h2>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quam cum
        voluptate unde eaque ipsam architecto autem recusandae totam blanditiis!
      </p>
    </motion.div>
  );
};

const Profile = ({ navigate, isModalOpen, setIsModalOpen }: ChildProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.3 }}
      className="w-1/3 h-[30rem] bg-neutral-900 flex items-center justify-center flex-col gap-4 p-8 cursor-pointer"
    >
      <FontAwesomeIcon icon={faUser} className="text-7xl" />
      <h2 className="text-4xl font-bold">Profile</h2>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quam cum
        voluptate unde eaque ipsam architecto autem recusandae totam blanditiis!
      </p>
    </motion.div>
  );
};

const Opportunities = ({
  navigate,
  isModalOpen,
  setIsModalOpen,
}: ChildProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.35 }}
      className="w-1/3 h-[30rem] bg-neutral-900 flex items-center justify-center flex-col gap-4 p-8 cursor-pointer"
    >
      <FontAwesomeIcon
        icon={faMagnifyingGlassArrowRight}
        className="text-7xl"
      />
      <h2 className="text-4xl font-bold">Opportunities</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        dicta rem culpa laboriosam capitate eos amet dolor.
      </p>
    </motion.div>
  );
};

const Chat = ({ navigate, isModalOpen, setIsModalOpen }: ChildProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.4 }}
      className="h-[calc(50%-0.5rem)] bg-neutral-900 flex items-center justify-center flex-col gap-4 p-8 cursor-pointer"
    >
      <FontAwesomeIcon icon={faCube} className="text-7xl" />
      <h2 className="text-4xl font-bold">Chat</h2>
      <p className="text-center">Lorem ipsum dolor sit amet.</p>
    </motion.div>
  );
};

const Balances = ({ navigate, isModalOpen, setIsModalOpen }: ChildProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.45 }}
      className="h-[calc(50%-0.5rem)] bg-neutral-900 flex items-center justify-center flex-col gap-4 p-8 cursor-pointer"
    >
      <FontAwesomeIcon icon={faChartSimple} className="text-7xl" />
      <h2 className="text-4xl font-bold">Balances</h2>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ipsum?
      </p>
    </motion.div>
  );
};

const CorporateNetwork = ({ navigate }: ChildProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="w-5/12 h-[30rem] bg-neutral-900 flex items-center justify-center flex-col gap-4 p-8 cursor-pointer"
    >
      <FontAwesomeIcon icon={faCircleNodes} className="text-7xl" />
      <h2 className="text-4xl font-bold">Corporate Network</h2>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quam cum
        voluptate unde eaque ipsam architecto autem recusandae totam blanditiis!
      </p>
    </motion.div>
  );
};

const Friends = ({ navigate }: ChildProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.55 }}
      className="w-3/12 h-[30rem] bg-neutral-900 flex items-center justify-center flex-col gap-4 p-8 cursor-pointer"
    >
      <FontAwesomeIcon icon={faPeopleRobbery} className="text-7xl" />
      <h2 className="text-4xl font-bold">Friends</h2>
      <p className="text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor?
      </p>
    </motion.div>
  );
};

const Placeholder = ({ navigate }: ChildProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6 }}
      className="w-4/12 h-[30rem] bg-neutral-900 flex items-center justify-center flex-col gap-4 p-8 cursor-pointer"
    >
      <FontAwesomeIcon icon={faFile} className="text-7xl" />
      <h2 className="text-4xl font-bold">Placeholder</h2>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi non
        atque quod?
      </p>
    </motion.div>
  );
};

export default DashboardConsultant;
