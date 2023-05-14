import "./following.css";

export default function WatchlistFollowing() {
  return (
    <div className="FRE__Watchlist__Following">
      <h2>Following</h2>

      <WatchlistFollowingProfile
        img="https://images.unsplash.com/photo-1600354587397-681c16c184bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        name="Rick Astley"
        description="Never gonna give you up, Never gonna give you up, Never gonna give you up, Never gonna give you up, Never gonna give you up, Never gonna give you up"
      />
    </div>
  );
}

function WatchlistFollowingProfile({
  img,
  name,
  description,
}: {
  [key: string]: string;
}) {
  let desc =
    description.split(" ").length > 21
      ? description.replace(",", " ").split(" ").slice(0, 21).join(" ") + "..."
      : description;

  return (
    <div className="FRE__Watchlist__Following__Profile">
      <div className="FRE__Watchlist__Following__Profile__Img">
        <img src={img} alt="Profile Picture" />
      </div>

      <div className="FRE__Watchlist__Following__Profile__Text">
        <div>
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>

        <div>
          <button>Following</button>
        </div>
      </div>
    </div>
  );
}
