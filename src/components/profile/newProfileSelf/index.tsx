import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLink,
  faLocationDot,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import { store } from "../../../core/state/store";
import { fetchSelf } from "../../../core/requets/fetchSelf";
import { HashLoader } from "react-spinners";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { convertDateFromString } from "../../../core/utils/convertDate";
import type {
  Post,
  SuccessTypeClient,
  SuccessTypeConsultant,
  User,
} from "../../../core/types/fetchUserself";
import { getPostAuthorData } from "../../../core/requets/getPost";

const override: CSSProperties = {
  display: "block",
  margin: "12rem auto",
};

export default function ProfileSelf() {
  const token = store.getState().auth.accessToken || "";

  const { isLoading, isError, data } = useQuery({
    queryKey: ["getUserDataForProfile"],
    queryFn: () => fetchSelf(token),
  });

  if (isLoading) {
    return <HashLoader cssOverride={override} color="#d35f12" size={150} />;
  }

  if (isError || data === undefined) {
    return (
      <h2>
        Some Unknown Error has occoured{" "}
        <Link to={"/dashboard"}>return to dashboard</Link>
      </h2>
    );
  }

  const userData = data.data.profile as User;

  if (!userData.consultantProfile) {
    return <ClientProfile userData={userData} />;
  }

  return <ConsultantProfile userData={userData} />;
}

function ConsultantProfile({ userData }: { userData: SuccessTypeConsultant }) {
  return (
    <main className="Profile__Self">
      <div className="General">
        <div className="Images">
          <ProfileImages
            profilePicture={userData.profilePicture}
            banner={userData.banner}
          />
        </div>

        <div className="Info">
          <GeneralProfileData
            firstname={userData.firstname}
            lastname={userData.lastname}
            location={userData.consultantProfile.location}
            createdAt={userData.createdAt}
            followers={userData.followers}
            following={userData.followers}
            connections={userData.connections}
            description={userData.consultantProfile.description}
            tier={userData.consultantProfile.tier}
          />
        </div>
      </div>

      <div className="Data">
        <h2>User Data</h2>

        <div className="Data__Wrapper">
          <ProfileGrid
            values={userData.consultantProfile.values}
            skills={userData.consultantProfile.skills}
            education={userData.consultantProfile.education}
            ambitions={userData.consultantProfile.ambitions}
            awards={userData.consultantProfile.awards}
            hobbies={userData.consultantProfile.hobbies}
          />
        </div>
      </div>

      <div className="Posts">
        <h2>Posts</h2>

        <ProfilePosts posts={userData.post} />
      </div>

      <div className="TimeLine"></div>
    </main>
  );
}

function ClientProfile({ userData }: { userData: SuccessTypeClient }) {
  return (
    <main className="Profile__Self">
      <div className="General">
        <div className="Images">
          <div
            className="Banner"
            style={{
              backgroundImage: `url("${"data:image/jpeg;base64,"}${
                userData.banner
              }")`,
            }}
          ></div>
          <div
            className="ProfilePicture"
            style={{
              backgroundImage: `url("${"data:image/jpeg;base64,"}${
                userData.profilePicture
              }")`,
            }}
          ></div>
        </div>

        <div className="Info">
          <h2>{`${userData.firstname} ${userData.lastname}`}</h2>
          <div className="Info__Inner">
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> Auckland
            </p>
            <p>
              <FontAwesomeIcon icon={faLink} /> dhruvrayat.com
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarDays} /> Joined October 2021
            </p>
          </div>

          <div className="FollowersFollowingConnections">
            <p>8 Followers</p>
            <p>10 Following</p>
            <p>10 Connections</p>
          </div>
        </div>
      </div>

      <div className="TimeLine"></div>

      {/* <div className="Data"></div>
  <div className="Posts"></div> */}
    </main>
  );
}

function ProfileImages({
  profilePicture,
  banner,
}: {
  profilePicture: string;
  banner: string;
}) {
  return (
    <>
      <div
        className="Banner"
        style={{
          backgroundImage: `url("${"data:image/jpeg;base64,"}${banner}")`,
        }}
      ></div>
      <div
        className="ProfilePicture"
        style={{
          backgroundImage: `url("${"data:image/jpeg;base64,"}${profilePicture}")`,
        }}
      ></div>
    </>
  );
}

function GeneralProfileData({
  firstname,
  lastname,
  location,
  createdAt,
  followers,
  following,
  connections,
  description,
  tier,
}: {
  firstname: string;
  lastname: string;
  location: string;
  createdAt: Date;
  followers: string[];
  following: string[];
  connections: string[];
  description: string;
  tier: string;
}) {
  return (
    <>
      <h2>{`${firstname} ${lastname}`}</h2>

      <p>{description}</p>

      <div className="Info__Inner">
        <p>
          <FontAwesomeIcon icon={faLocationDot} /> {location}
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendarDays} /> Joined{" "}
          {convertDateFromString(createdAt)}
        </p>
        <p>
          <FontAwesomeIcon icon={faShieldAlt} /> {tier.toLocaleLowerCase()}
        </p>
      </div>

      <div className="FollowersFollowingConnections">
        <Link to={"/profile/self/followers"}>{followers.length} Followers</Link>
        <Link to={"/profile/self/following"}>{following.length} Following</Link>
        <Link to={"/profile/self/connections"}>
          {connections.length} Connections
        </Link>
      </div>
    </>
  );
}

function ProfileGrid({
  values,
  skills,
  education,
  ambitions,
  hobbies,
  awards,
}: {
  values: string[];
  skills: string[];
  education: string[];
  ambitions: string[];
  hobbies: string[];
  awards: string[];
}) {
  return (
    <>
      <div className="Data__Grid__Values">
        <h3>Values</h3>

        {values.map((value) => {
          return <li>{value}</li>;
        })}
      </div>

      <div className="Data__Grid__Skills">
        <h3>Skills</h3>

        {skills.map((skill) => {
          return <li>{skill}</li>;
        })}
      </div>

      <div className="Data__Grid__Education">
        <h3>Education</h3>

        {education.map((edu) => {
          return <li>{edu}</li>;
        })}
      </div>

      <div className="Data__Grid__Ambitions">
        <h3>Ambitions</h3>

        {ambitions.map((ambition) => {
          return <li>{ambition}</li>;
        })}
      </div>

      <div className="Data__Grid__Hobbies">
        <h3>Hobbies</h3>

        {hobbies.map((hobby) => {
          return <li>{hobby}</li>;
        })}
      </div>

      <div className="Data__Grid__Awards">
        <h3>Awards</h3>

        {awards.map((award) => {
          return <li>{award}</li>;
        })}
      </div>
    </>
  );
}

function ProfilePosts({ posts }: { posts: Post[] | null }) {
  if (posts === null) {
    return <div>This user has no Posts</div>;
  }

  return (
    <div className="Posts__Wrapper">
      {posts.map((post) => (
        <ProfilePost post={post} key={post.postId} />
      ))}
    </div>
  );
}

interface PostAuthorData {
  profilePicture: string;
  firstname: string;
  lastname: string;
}

function ProfilePost({ post }: { post: Post }) {
  const token = store.getState().auth.accessToken || "";

  const { isLoading, isError, data } = useQuery({
    queryKey: ["posts", post.postId],
    queryFn: () => getPostAuthorData(post.userId, token),
  });

  if (isLoading) {
    return (
      <HashLoader
        cssOverride={{ display: "block", margin: "1rem auto" }}
        color="#d35f12"
        size={150}
      />
    );
  }

  if (isError || data === undefined) {
    return (
      <h2>
        Some Unknown Error has occoured{" "}
        <Link to={"/dashboard"}>return to dashboard</Link>
      </h2>
    );
  }

  const authorData = data.data.user as PostAuthorData;

  return (
    <div className="Post">
      <div className="Post__Top">
        <div
          style={{
            backgroundImage: `url("${"data:image/jpeg;base64,"}${
              authorData.profilePicture
            }")`,
          }}
        ></div>
        <span>⋅</span>
        <h3>
          {authorData.firstname} {authorData.lastname}
        </h3>
        <span>⋅</span>
        <p>{convertDateFromString(post.postTime)}</p>
      </div>

      <div className="Post__Data">
        <p>{post.postText}</p>

        <div className="Post__Data__Images">
          {post.postImages.map((image) => {
            if (image !== "") {
              return (
                <img src={`data:image/jpeg;base64,${image}`} alt="Some Image" />
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
}
