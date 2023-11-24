import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <section className="h-screen flex container mx-auto">
      <div className="h-screen p-5 flex flex-col">
        <img src="assets/images/logo.svg" alt="" />
        <Link to="/profile">
          <div className="flex items-center gap-1.5 my-3">
            <img src="assets/images/profile.png" alt="" className="h-10 w-10" />
            <div>
              <p className="text-gray-400 text-sm">Tamacti Jun</p>
              <p className="text-gray-400 text-xs">@tamactijun</p>
            </div>
          </div>
        </Link>
        <div className="flex flex-col flex-1 justify-between">
          <div className="my-10">
            <ul className="flex flex-col gap-10">
              <li>
                <Link to="/">
                  <div className="flex items-center gap-2">
                    <img
                      src="assets/icons/home.svg"
                      alt=""
                      className="h-5 w-5"
                    />
                    <p className="text-gray-400">Home</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/saved">
                  <div className="flex items-center gap-2">
                    <img
                      src="assets/icons/save.svg"
                      alt=""
                      className="h-5 w-5"
                    />
                    <p className="text-gray-400">Saved</p>
                  </div>
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <img
                    src="assets/icons/gallery-add.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  <p className="text-gray-400">Reels</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <img src="assets/icons/chat.svg" alt="" className="h-5 w-5" />
                  <p className="text-gray-400">Chat</p>
                </div>
              </li>
              <li>
                <Link to="/create">
                  <div className="flex items-center gap-2">
                    <img
                      src="assets/icons/gallery-add.svg"
                      alt=""
                      className="h-5 w-5"
                    />
                    <p className="text-gray-400">Create Post</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-10">
              <li>
                <div className="flex items-center gap-2">
                  <img
                    src="assets/icons/logout.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  <p className="text-gray-400">Logout</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-5 flex-1 overflow-y-scroll">
        <Outlet />
      </div>
    </section>
  );
}

export default MainLayout;
