import "./advertisment.css";

export default function WatchlistAdvertisment() {
  return (
    <div
      className="FRE__Watchlist__Advertisment"
      onClick={() => {
        window.open("https://www.pbtech.co.nz/", "_blank");
      }}
      title="PB Tech"
    ></div>
  );
}
