function WatchListDashboard() {
  return (
    <>
      {/* SOW Section */}
      <div className="w-1/2 flex items-center flex-col">
        <h1 className="font-bold text-5xl">Jobs [1]</h1>

        <div className="w-full my-4 p-8">
          <p className="text-2xl font-medium">
            <span className="font-bold">acme@gmail.com</span> - Website
          </p>
        </div>
      </div>

      {/* Following Section */}
      <div className="w-1/2 flex items-center flex-col h-28">
        <h1 className="font-bold text-5xl">Following</h1>

        <div className="w-full my-8 p-4 border-t-2 border-b-2 border-neutral-500">
          {/* Following */}
          <div className="w-full flex gap-4">
            {/* IMAGE */}
            <div className="w-28 h-full overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1600354587397-681c16c184bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
            </div>

            {/* Text */}
            <div className="flex-grow flex">
              {/* User Text */}
              <div className="flex-grow flex flex-col justify-center">
                <h2 className="text-3xl mb-4 font-bold">Rick Astley</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
              </div>

              {/* Following */}
              <div className="flex-grow h-full flex items-center justify-center">
                <button className="w-full rounded-full border-2 border-white p-2">
                  Following
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchListDashboard;
