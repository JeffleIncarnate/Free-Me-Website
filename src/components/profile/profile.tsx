import "./profile.css";

import { useEffect, useState } from "react";
import { apiURL } from "../../core/data";

export default function Profile() {
  const [background, setBackground] = useState<any>(null);
  const [profileData, setProfileData] = useState<any>("Loading...");
  const [socialMedia, setSocialMedia] = useState<string[]>([]);
  const [companyHistory, setCompanyHistory] = useState<string[]>([]);

  let getProfileData = () => {
    var requestOptions: any = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${apiURL}/freeme/getUser?email=${sessionStorage.getItem("email")}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setProfileData(result.profile);

        if (sessionStorage.getItem("type") === "client") {
          setSocialMedia([
            profileData.socialMedia.twitter,
            profileData.socialMedia.facebook,
            profileData.socialMedia.instagram,
          ]);

          setCompanyHistory([
            profileData.companyHistory.global,
            profileData.companyHistory.founded,
            profileData.companyHistory.other.map((value: string) => {
              return value;
            }),
          ]);
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    setBackground(
      `${"data:image/jpeg;base64,"}${sessionStorage.getItem("banner")}`
    );

    getProfileData();
  });

  return (
    <>
      <main className="FRE__Profile">
        <div
          className="FRE__Profile__Images"
          style={{ backgroundImage: `url("${background}")` }}
        >
          {(() => {
            return (
              <img
                src={`${"data:image/jpeg;base64,"}${sessionStorage.getItem(
                  "profilePicture"
                )}`}
                alt=""
              />
            );
          })()}

          <div>
            <button>Add Background</button>
            <button>Upload Photo</button>
          </div>
        </div>

        <div className="FRE__Profile__Name">
          <p>{`${sessionStorage.getItem("firstname")} ${sessionStorage.getItem(
            "lastname"
          )}`}</p>
        </div>

        <div className="FRE__Profile__Grid">
          <div className="FRE__Profile__Grid-Values">
            <h2>Values</h2>

            <ul>
              {profileData !== "Loading..." ? (
                profileData.values.map((value: string) => {
                  return <li key={crypto.randomUUID()}>{value}</li>;
                })
              ) : (
                <li>Loading...</li>
              )}
            </ul>
          </div>
          <div className="FRE__Profile__Grid-Hobbies">
            <h2>Hobbies</h2>

            <ul>
              {profileData !== "Loading..." ? (
                profileData.hobbies.map((value: string) => {
                  return <li key={crypto.randomUUID()}>{value}</li>;
                })
              ) : (
                <li>Loading...</li>
              )}
            </ul>
          </div>
          <div className="FRE__Profile__Grid-Skills">
            <h2>
              {sessionStorage.getItem("type") === "client"
                ? "Speciality"
                : "Skills"}
            </h2>

            <ul>
              {profileData !== "Loading..." ? (
                sessionStorage.getItem("type") === "client" ? (
                  profileData.speciality.map((value: any) => {
                    return <li key={crypto.randomUUID()}>{value}</li>;
                  })
                ) : (
                  profileData.skills.map((value: any) => {
                    return <li key={crypto.randomUUID()}>{value}</li>;
                  })
                )
              ) : (
                <li>Loading...</li>
              )}
            </ul>
          </div>
          <div className="FRE__Profile__Grid-Education">
            <h2>
              {sessionStorage.getItem("type") === "client"
                ? "Social Media"
                : "Education"}
            </h2>

            <ul>
              {profileData !== "Loading..." ? (
                sessionStorage.getItem("type") === "client" ? (
                  socialMedia.map((value: any, index: number) => {
                    return (
                      <li key={crypto.randomUUID()}>
                        <strong>{`${
                          index === 0
                            ? "Twitter"
                            : index === 1
                            ? "Facebook"
                            : index === 2
                            ? "Instagram"
                            : null
                        }`}</strong>
                        {` -- ${value}`}
                      </li>
                    );
                  })
                ) : (
                  profileData.education.map((value: any) => {
                    return (
                      <li key={crypto.randomUUID()}>
                        <strong>{value.school}</strong>
                        {` -- ${value.startYear} - ${value.endYear}`}
                      </li>
                    );
                  })
                )
              ) : (
                <li>Loading...</li>
              )}
            </ul>
          </div>
          <div className="FRE__Profile__Grid-CV_Highlights">
            <h2>
              {sessionStorage.getItem("type") === "client"
                ? "Company History"
                : "CV Highlights"}
            </h2>

            <ul>
              {profileData !== "Loading..." ? (
                sessionStorage.getItem("type") === "client" ? (
                  companyHistory.map((value: any, index: number) => {
                    return (
                      <li key={crypto.randomUUID()}>
                        <strong>{`${
                          index === 0
                            ? "Global"
                            : index === 1
                            ? "Founded"
                            : "Other"
                        }`}</strong>
                        {` -- ${value}`}
                      </li>
                    );
                  })
                ) : (
                  profileData.cvHighlights.map((value: any) => {
                    return <li key={crypto.randomUUID()}>{value}</li>;
                  })
                )
              ) : (
                <li>Loading...</li>
              )}
            </ul>
          </div>
          <div className="FRE__Profile__Grid-Ambtions">
            <h2>Ambtions</h2>

            <ul>
              {profileData !== "Loading..." ? (
                profileData.ambitions.map((value: string) => {
                  return <li key={crypto.randomUUID()}>{value}</li>;
                })
              ) : (
                <li>Loading...</li>
              )}
            </ul>
          </div>
          <div className="FRE__Profile__Grid-Awards">
            <h2>Awards</h2>

            <ul>
              {profileData !== "Loading..." ? (
                profileData.awards.map((value: string) => {
                  return <li key={crypto.randomUUID()}>{value}</li>;
                })
              ) : (
                <li>Loading...</li>
              )}
            </ul>
          </div>

          <div className="FRE__Profile__Grid-Timeline">
            <h2>Timeline</h2>

            <ul>
              <div className="FRE__Profile__Grid-Timeline__Line"></div>
              <div>
                {profileData !== "Loading..." ? (
                  profileData.timeline.map((value: any) => {
                    return (
                      <li className="FRE__Profile__Grid-Timeline__Time">
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                        <span>{`${new Date(
                          value.time * 1000
                        ).toLocaleDateString("en-nz")}`}</span>
                      </li>
                    );
                  })
                ) : (
                  <li>Loading...</li>
                )}
              </div>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
