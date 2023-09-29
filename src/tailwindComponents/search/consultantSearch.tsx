import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faComment,
  faMagnifyingGlass,
  faMedal,
  faShield,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

/* 
    This is for clients to search for consultants
*/

// Consultant Search: Industry, Regions
// Opportunities: Regions, Tier Level (bronze, silver, gold, platinum)
// Feature to like, unlike, and to initate a chat

const SearchConsultant = () => {
  const skills = [
    "Software Development",
    "Market Analysis",
    "Business Analysis",
    "Accounting",
    "Business Intelligence",
    "Leadership Development",
    "Leadership",
  ].sort();

  const countries = [
    "North Island",
    "South Island",
    "Northland",
    "Auckland",
    "Waikato",
    "Bay of Plenty",
    "Taranaki",
    "Manawatu",
    "Hawke's Bay",
    "Horowhenua",
    "Wellington",
    "Nelson",
    "Westcoast",
    "Canterbury",
    "Otago",
    "Southland",
  ];

  const results = [
    {
      clientName: "Lorem",
      stars: [
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
      ],
      country: "🇦🇺 Australia",
      comments: 100,
      shortDescription: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat corporis doloremque reprehenderit sint? Dolores, at! Facere iste cumque ea!",
    },
    {
      clientName: "Lorem",
      stars: [
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
      ],
      country: "🇦🇺 Australia",
      comments: 100,
      shortDescription: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat corporis doloremque reprehenderit sint? Dolores, at! Facere iste cumque ea!",
    },

    {
      clientName: "Lorem",
      stars: [
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
      ],
      country: "🇦🇺 Australia",
      comments: 100,
      shortDescription: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat corporis doloremque reprehenderit sint? Dolores, at! Facere iste cumque ea!",
    },

    {
      clientName: "Lorem",
      stars: [
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
      ],
      country: "🇦🇺 Australia",
      comments: 100,
      shortDescription: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat corporis doloremque reprehenderit sint? Dolores, at! Facere iste cumque ea!",
    },

    {
      clientName: "Lorem",
      stars: [
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
      ],
      country: "🇦🇺 Australia",
      comments: 100,
      shortDescription: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat corporis doloremque reprehenderit sint? Dolores, at! Facere iste cumque ea!",
    },

    {
      clientName: "Lorem",
      stars: [
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
      ],
      country: "🇦🇺 Australia",
      comments: 100,
      shortDescription: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat corporis doloremque reprehenderit sint? Dolores, at! Facere iste cumque ea!",
    },
    {
      clientName: "Lorem",
      stars: [
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
      ],
      country: "🇦🇺 Australia",
      comments: 100,
      shortDescription: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat corporis doloremque reprehenderit sint? Dolores, at! Facere iste cumque ea!",
    },
    {
      clientName: "Lorem",
      stars: [
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
      ],
      country: "🇦🇺 Australia",
      comments: 100,
      shortDescription: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat corporis doloremque reprehenderit sint? Dolores, at! Facere iste cumque ea!",
    },
  ];

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  return (
    <main className="h-[85vh] w-[98%] mt-[15vh] mx-[1%] flex gap-4 ">
      <div className="flex flex-col w-9/12 bg-neutral-900 p-4 ">
        {/* Search  */}
        <div className="h-1/5">
          <h1 className="text-5xl font-bold">Browse</h1>
          <div className="w-full my-4 flex justify-center items-center gap-2 relative">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-3 text-neutral-900 text-xl"
            />
            <input
              className="w-11/12 p-3 placeholder:text-neutral-900 text-neutral-900 pl-10"
              type="search"
              placeholder="Lorem Ipsum dolor sit"
            />
            <button className="w-1/12 bg-blue-500 p-3 font-bold">Search</button>
          </div>
        </div>

        {/* Items */}
        <div className="h-4/5 flex gap-4 overflow-y-scroll">
          {/* Filters */}
          <div className="w-1/3">
            <h2 className="text-3xl font-bold">Filters</h2>

            {/* Tier Filter */}
            <div className="relative w-full my-4">
              <h3 className="text-xl font-bold">Tier Status</h3>
              <button className="absolute right-0 top-0 text-blue-500">
                Clear
              </button>
              <div className="w-full flex items-center justify-center">
                <input
                  className="w-[47%] text-neutral-900 placeholder:text-neutral-500 p-1"
                  type="text"
                  placeholder="Lorem"
                />
                <p className="w-[6%] m-4 text-center">to</p>
                <input
                  className="w-[47%] text-neutral-900 placeholder:text-neutral-500 p-1"
                  type="text"
                  placeholder="Lorem"
                />
              </div>
            </div>

            {/* Skills */}
            <div className="relative w-full my-4">
              <h3 className="text-xl font-bold">Skills</h3>
              <button
                onClick={() => {
                  setSelectedSkills([]);
                }}
                className="absolute right-0 top-0 text-blue-500"
              >
                Clear
              </button>
              <div className="w-full first:mt-4">
                <input
                  type="text"
                  className="w-full p-1 placeholder:text-neutral-500 text-neutral-900"
                  placeholder="Lorem"
                />
                <div className="w-full flex flex-wrap">
                  {selectedSkills.map((skill) => (
                    <p
                      className="m-2 px-3 py-2 rounded-lg bg-blue-500 font-bold"
                      key={crypto.randomUUID()}
                    >
                      {skill}
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="ml-3 cursor-pointer"
                        onClick={() => {
                          setSelectedSkills((prevSkills) =>
                            prevSkills.filter(
                              (prevSkill) => prevSkill !== skill
                            )
                          );
                        }}
                      />
                    </p>
                  ))}
                </div>
                {skills.map((skill) => (
                  <div
                    className="flex items-center mb-4 my-2"
                    key={crypto.randomUUID()}
                  >
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      checked={selectedSkills.includes(skill)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onClick={() => {
                        setSelectedSkills((prev: string[]) => {
                          if (!prev.includes(skill)) {
                            return [...prev, skill];
                          } else {
                            return prev.filter(
                              (prevSkill) => prevSkill !== skill
                            );
                          }
                        });
                      }}
                    />
                    <label
                      onClick={() => {
                        setSelectedSkills((prev: string[]) => {
                          if (!prev.includes(skill)) {
                            return [...prev, skill];
                          } else {
                            return prev.filter(
                              (prevSkill) => prevSkill !== skill
                            );
                          }
                        });
                      }}
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {skill}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries */}
            <div className="relative w-full my-4">
              <h3 className="text-xl font-bold">Regions</h3>
              <button
                onClick={() => {
                  setSelectedCountries([]);
                }}
                className="absolute right-0 top-0 text-blue-500"
              >
                Clear
              </button>
              <div className="w-full first:mt-4">
                <input
                  type="text"
                  className="w-full p-1 placeholder:text-neutral-500 text-neutral-900"
                  placeholder="Lorem"
                />
                <div className="w-full flex flex-wrap">
                  {selectedCountries.map((country) => (
                    <p
                      className="m-2 px-3 py-2 rounded-lg bg-blue-500 font-bold"
                      key={crypto.randomUUID()}
                    >
                      {country}
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="ml-3 cursor-pointer"
                        onClick={() => {
                          setSelectedCountries((prevSkills) =>
                            prevSkills.filter(
                              (prevSkill) => prevSkill !== country
                            )
                          );
                        }}
                      />
                    </p>
                  ))}
                </div>
                {countries.map((country) => (
                  <div
                    className="flex items-center mb-4 my-2"
                    key={crypto.randomUUID()}
                  >
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      checked={selectedCountries.includes(country)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onClick={() => {
                        setSelectedCountries((prev: string[]) => {
                          if (!prev.includes(country)) {
                            return [...prev, country];
                          } else {
                            return prev.filter(
                              (prevSkill) => prevSkill !== country
                            );
                          }
                        });
                      }}
                    />
                    <label
                      onClick={() => {
                        setSelectedCountries((prev: string[]) => {
                          if (!prev.includes(country)) {
                            return [...prev, country];
                          } else {
                            return prev.filter(
                              (prevCountry) => prevCountry !== country
                            );
                          }
                        });
                      }}
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {country}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Searches */}
          <div className="w-2/3 ">
            {/* Top */}
            <div className="w-full flex items-center justify-between">
              <div className="flex items-end gap-6">
                <h2 className="text-2xl font-bold">Top Results</h2>
                <p>1-20 of 20 Results</p>
              </div>

              <div className="flex items-center justify-center gap-6">
                <p>Sort By</p>
                <select className="text-slate-900 w-40 p-2">
                  <option value="Lorem">Lorem</option>
                  <option value="Ipsum">Ipsum</option>
                  <option value="Dolor">Dolor</option>
                  <option value="Sit">Sit</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="w-full flex items-center justify-center flex-col">
              {results.map((result) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className="w-full m-4 bg-neutral-800 rounded-lg p-4"
                  >
                    <div className="w-full flex justify-between ">
                      <h3 className="text-xl font-bold">{result.clientName}</h3>
                      <div>
                        <FontAwesomeIcon
                          icon={faShield}
                          className="mx-2 text-2xl"
                        />
                        <FontAwesomeIcon
                          icon={faChartBar}
                          className="mx-2 text-2xl"
                        />
                        <FontAwesomeIcon
                          icon={faMedal}
                          className="mx-2 text-2xl"
                        />
                      </div>
                    </div>

                    <div className="w-full flex justify-between items-center my-4">
                      <div className="text-orange-600">
                        {result.stars.map((star) => star)}
                      </div>
                      <div className="flex gap-6">
                        <p className="flex items-center justify-center gap-2 text-xl font-bold">
                          <FontAwesomeIcon
                            className="text-orange-600"
                            icon={faComment}
                          />
                          {result.comments}
                        </p>
                        <p className="text-xl font-bold">{result.country}</p>
                      </div>
                    </div>

                    <div className="w-full flex flex-col">
                      <h3 className="text-xl font-bold">
                        {result.shortDescription}
                      </h3>
                      <p>{result.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/12 bg-neutral-900 p-4">
        <h2 className="text-3xl font-bold">Advertisements</h2>
        <div className="w-full bg-neutral-700 rounded-lg flex gap-4 my-6">
          <img
            src="https://avatars.githubusercontent.com/u/82592?s=200&v=4"
            className="w-3/12"
          />
          <div className="flex-grow flex flex-col justify-center">
            <h3 className="text-xl font-bold">Square</h3>
            <a href="#" className="text-blue-500 underline">
              Learn More
            </a>
          </div>
        </div>

        <div className="w-full bg-neutral-700 rounded-lg flex gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/82592?s=200&v=4"
            className="w-3/12"
          />
          <div className="flex-grow flex flex-col justify-center">
            <h3 className="text-xl font-bold">Square</h3>
            <a href="#" className="text-blue-500 underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchConsultant;
