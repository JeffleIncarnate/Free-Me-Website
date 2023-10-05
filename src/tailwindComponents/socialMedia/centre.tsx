import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faImage,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

import Reel1 from "../../assets/reels/1.png";
import Reel2 from "../../assets/reels/2.png";
import Reel3 from "../../assets/reels/3.png";
import Reel4 from "../../assets/reels/4.png";

interface Reel {
  img: string;
  name: string;
  views: number;
}

const REELS: Reel[] = [
  {
    img: Reel1,
    name: "Lorem Ipsum Dolor Sit",
    views: 420,
  },
  {
    img: Reel2,
    name: "Lorem Ipsum Dolor Sit",
    views: 540,
  },
  {
    img: Reel3,
    name: "Lorem Ipsum Dolor Sit",
    views: 123,
  },
  {
    img: Reel4,
    name: "Lorem Ipsum Dolor Sit",
    views: 892,
  },
];

const SocialCentre = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.25 }}
      className="w-[48%] h-full bg-neutral-900 flex flex-col"
    >
      {/* Post Modal */}
      <div className="w-[calc(100%-2rem)] p-4 bg-neutral-800 m-4 rounded-xl">
        {/* Input && Image */}
        <div className="w-full flex gap-4">
          <div className="rounded-full w-14 h-14">
            <img
              className="rounded-full"
              src={`${"data:image/jpeg;base64,"}${sessionStorage.getItem(
                "profilePicture"
              )}`}
              alt=""
            />
          </div>
          <input
            className="flex-grow rounded-[2rem] px-4 bg-neutral-700"
            type="text"
            placeholder="Start a Post..."
          />
        </div>

        {/* Buttons */}
        <div className="w-full flex justify-evenly item-center mt-4">
          <div className="flex items-center gap-2 text-xl">
            <FontAwesomeIcon icon={faImage} />
            <p>Photo</p>
          </div>

          <div className="flex items-center gap-2 text-xl">
            <FontAwesomeIcon icon={faYoutube} />
            <p>Video</p>
          </div>

          <div className="flex items-center gap-2 text-xl">
            <FontAwesomeIcon icon={faCalendar} />
            <p>Audio Event</p>
          </div>

          <div className="flex items-center gap-2 text-xl">
            <FontAwesomeIcon icon={faNewspaper} />
            <p>Write Article</p>
          </div>
        </div>
      </div>

      {sessionStorage.getItem("type") === "client" ? (
        <PostsClient />
      ) : (
        <PostsConsultant />
      )}
    </motion.div>
  );
};

interface SocialCentreReelProps {
  img: string;
  name: string;
  views: number;
}

const SocialCentreReel = ({ img, name, views }: SocialCentreReelProps) => {
  return (
    <div className=" w-1/4 cursor-pointer">
      <div className="w-full flex item-center justify-center h-[23rem] rounded-lg">
        <img src={img} className="w-full rounded-lg" />
      </div>
      <h2 className="font-bold my-2">{name}</h2>
      <p className="text-gray-500">{views}K Views</p>
    </div>
  );
};

const PostsClient = () => {
  return (
    <div className="overflow-y-scroll h-[90%] no-scrollbar">
      {/* Post 1 */}
      <div className="w-[calc(100%-2rem)] p-4 bg-neutral-800 m-4 rounded-xl">
        {/* Profile Picture Top */}
        <div className="w-full flex items-center gap-4">
          <div
            className="rounded-full w-14 h-14 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://scontent.fakl3-1.fna.fbcdn.net/v/t39.30808-6/349722956_269481755547426_1298941489967979467_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=puizAW3VO2EAX9Wf3NK&_nc_ht=scontent.fakl3-1.fna&oh=00_AfBw6PNNS292-oD9QEdngBh3utl9M-ocES3E6Iu1D925Qg&oe=651F8940')",
            }}
          ></div>
          <h2 className="font-bold">Tiaki Engineering Consultants Limited</h2>
          <p className="text-gray-500">@tiakiengineering · 4hr</p>
        </div>

        {/* Text and Images */}
        <div className="w-full flex flex-col gap-4">
          <p className="mt-4">
            Here at Tiaki we would like to welcome back Philip Kruis as our
            Managing Director. All the best Phil!!
          </p>

          <img
            src="https://www.tecl.co.nz/wp-content/uploads/phil-tiaki-staff-pic.jpg"
            className="w-72 rounded-md"
          />
        </div>
      </div>

      {/* Reels */}
      <div className="w-[calc(100%-2rem)] p-4 bg-neutral-800 m-4 rounded-xl flex gap-4">
        {REELS.map((reel: Reel) => (
          <SocialCentreReel
            img={reel.img}
            name={reel.name}
            views={reel.views}
          />
        ))}
      </div>

      {/* Community Network */}
      <div className="w-[calc(100%-2rem)] p-4 bg-neutral-800 m-4 rounded-xl">
        {/* Profile Picture Top */}
        <div className="w-full flex items-center gap-4">
          <div
            className="rounded-full w-14 h-14 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://scontent.fakl3-1.fna.fbcdn.net/v/t39.30808-1/354042778_312490451103314_2945759761315236592_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=1&ccb=1-7&_nc_sid=5fac6f&_nc_ohc=ZKjw3p6u9s0AX9pQp_e&_nc_ht=scontent.fakl3-1.fna&oh=00_AfBnvIhEnwTdDwzkLaYYYbbtOLUw9e9zoUuwrTPx5Bf9Zw&oe=65228F80')",
            }}
          ></div>
          <h2 className="font-bold">Z Energy</h2>
          <p className="text-gray-500">@zenergynz · 420hr</p>
        </div>

        {/* Text and Images */}
        <div className="w-full flex flex-col gap-4">
          <p className="mt-4">
            Use Z for you next petrol purchase and not only get FreeMe rates, a
            complimentary coffee, you’ll also go into the draw to win an awesome
            price.
          </p>
        </div>
      </div>

      {/* Last Post */}
      <div className="w-[calc(100%-2rem)] p-4 bg-neutral-800 m-4 rounded-xl">
        {/* Profile Picture Top */}
        <div className="w-full flex items-center gap-4">
          <div
            className="rounded-full w-14 h-14 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://lh5.googleusercontent.com/_QR0AGIQi_iT8P2OMnNifVY82k_Si7qfDv8QUFv6tX0htU2l_sEYSqRPJV7IzLKLqRT-Xb9JIl0iHOsbjIZrnC4mJCQWdfV8P9wajVN_C7zAHTCDdnOA24sdnqYxjmub2QM00TaxzuPlUofwjEQ1HA=s2048')",
            }}
          ></div>
          <h2 className="font-bold">Name of Company</h2>
          <p className="text-gray-500">@nameofcompanyhandle · 420hr</p>
        </div>

        {/* Text and Images */}
        <div className="w-full flex flex-col gap-4">
          <p className="mt-4">
            For my Tauranga Branch I’m looking for a legal underwriter
          </p>
        </div>
      </div>
    </div>
  );
};

const PostsConsultant = () => {
  return (
    <div className="overflow-y-scroll h-[90%] no-scrollbar">
      {/* Post 1 */}
      <div className="w-[calc(100%-2rem)] p-4 bg-neutral-800 m-4 rounded-xl">
        {/* Profile Picture Top */}
        <div className="w-full flex items-center gap-4">
          <div
            className="rounded-full w-14 h-14 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/sgYronYizsk6IpIPW7ESAjIhbzSod0vusbWIjtSLTRQWxQkoYn7Ng7JogaFIhg2yDokHBBaC2QLkh_pbVRbrJodB39q3K1sUfeHXYPgmZDBaaKVZ-iBEyiMAfba4rMsGU9f725Of-Y6B0b0SWIPGkw=s2048')",
            }}
          ></div>
          <h2 className="font-bold">Indeevar Duhan</h2>
          <p className="text-gray-500">@indeevarDuhan · 6hr</p>
        </div>

        {/* Text and Images */}
        <div className="w-full flex flex-col gap-4">
          <p className="mt-4">
            Hi FreeMe, I would like to share that We are now available in The
            Netherlands. I would like to welcome all our Dutch consultants,
            Clients and partners
          </p>
        </div>
      </div>

      {/* Reels */}
      <div className="w-[calc(100%-2rem)] p-4 bg-neutral-800 m-4 rounded-xl flex gap-4">
        {REELS.map((reel: Reel) => (
          <SocialCentreReel
            img={reel.img}
            name={reel.name}
            views={reel.views}
          />
        ))}
      </div>

      {/* Community Network */}
      <div className="w-[calc(100%-2rem)] p-4 bg-neutral-800 m-4 rounded-xl">
        {/* Profile Picture Top */}
        <div className="w-full flex items-center gap-4">
          <div
            className="rounded-full w-14 h-14 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://scontent.fakl3-1.fna.fbcdn.net/v/t39.30808-1/354042778_312490451103314_2945759761315236592_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=1&ccb=1-7&_nc_sid=5fac6f&_nc_ohc=ZKjw3p6u9s0AX9pQp_e&_nc_ht=scontent.fakl3-1.fna&oh=00_AfBnvIhEnwTdDwzkLaYYYbbtOLUw9e9zoUuwrTPx5Bf9Zw&oe=65228F80')",
            }}
          ></div>
          <h2 className="font-bold">Z Energy</h2>
          <p className="text-gray-500">@zenergynz · 420hr</p>
        </div>

        {/* Text and Images */}
        <div className="w-full flex flex-col gap-4">
          <p className="mt-4">
            Use Z for you next petrol purchase and not only get FreeMe rates, a
            complimentary coffee, you’ll also go into the draw to win an awesome
            price.
          </p>
        </div>
      </div>

      <div className="w-[calc(100%-2rem)] p-4 bg-neutral-800 m-4 rounded-xl">
        {/* Profile Picture Top */}
        <div className="w-full flex items-center gap-4">
          <div
            className="rounded-full w-14 h-14 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://lh6.googleusercontent.com/-Y_aYJG2tZEWrFESKvMpQvjXGOtBoCNtwrZXMsDpaT3H1cGR2xNDIpYbVKCpkjNoaVArv7JuZrWaxY6a4HhWJFWUJlOlxqx6CdwzyYIhYPLE9pzgDkNMrP5it0heDC6DlFDcOg2aXhRs8w0hqW6p4Q=s2048')",
            }}
          ></div>
          <h2 className="font-bold">Ferd Swinkles</h2>
          <p className="text-gray-500">@ferdSwinkles · 6hr</p>
        </div>

        {/* Text and Images */}
        <div className="w-full flex flex-col gap-4">
          <p className="mt-4">
            I would like to share that I just graduated for my 5th-degree black
            belt in the martial art of Origami
          </p>

          <img
            className="w-72 rounded-md"
            src="https://lh4.googleusercontent.com/65rwF-QPYWp9YGrJJ1L8PVZrivtap1UmP4tWV20niqd20wVqp9JF-6LEFXX9Fg9rGPLMNJEA3JtKrXKFgAaGXJ4Mi19HEuWknTL0iSGA4Y2Zmf6Iak-a3D9hNmhiefLJUA0uXocufGhlJPqe_FkEgg=s2048"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SocialCentre;
