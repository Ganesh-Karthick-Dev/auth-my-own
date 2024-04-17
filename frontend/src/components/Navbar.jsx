import React, { useContext } from "react";
import "../style.css";
import navLogo from "../assest/icons/main-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../hooks/userContext";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { removeUser } = useContext(userContext);

  const navigate = useNavigate();
  // const history = useHistory();

  const handleLogout = () => {
    removeUser();
    navigate("/");
    // history.replace('')
  };
  return (
    <>
      <nav id="navbar">
        {/* mobile screens */}

        <div className=" md:hidden" id="nav-mobile">
          <div id="nav-mobile-left"></div>

          <div id="nav-mobile-right"></div>
        </div>

        {/* desktop screens */}

        <div
          className=" hidden md:block md:flex md:w-full border justify-between"
          id="nav-desktop"
        >
          <div className=" flex" id="nav-left">
            <img src={navLogo} width={100} alt="yummy-navabr-logo" />
            <div className=" flex flex-col ">
              <p className=" text-xs font-logo">sweets</p>
              <p className=" text-xs font-logo self-center">&</p>
              <p className=" text-xs font-logo">snacks</p>
            </div>
          </div>

          <div id="nav-center" className=" flex gap-3">

            <NavLink className={' self-center'}>
                Home
            </NavLink>

            <div className=" self-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50">
                    Sweets
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#jksd"
                            className={classNames(
                              active
                                ? "text-white bg-amber-400"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Kaju Sweets
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#gdr"
                            className={classNames(
                              active
                                ? "text-white bg-amber-400"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Mysore Pak
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#sdrsg"
                            className={classNames(
                              active
                                ? "text-white bg-amber-400"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Laddu
                          </a>
                        )}
                      </Menu.Item>
                      
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "text-white bg-amber-400"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Soan Papdi
                            </button>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "text-white bg-amber-400"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                                Halwa
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "text-white bg-amber-400"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Milk Sweets
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "text-white bg-amber-400"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Karupatti & Sugarfree
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "text-white bg-amber-400"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Traditional Sweets
                            </button>
                          )}
                        </Menu.Item>
                      
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <div className=" self-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50">
                    Savouries
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#jksd"
                            className={classNames(
                              active
                                ? "text-white bg-amber-400"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Mixtures
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#gdr"
                            className={classNames(
                              active
                                ? "text-white bg-amber-400"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Murukkus
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#sdrsg"
                            className={classNames(
                              active
                                ? "text-white bg-amber-400"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Sev & Seedai
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "text-white bg-amber-400"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Boondhi
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? " text-white bg-amber-400"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Masala Nuts
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <NavLink className={' self-center'}>
                About Us
            </NavLink>

            <NavLink className={' self-center'}>
                Contact Us 
            </NavLink>

            <NavLink className={' self-center'}>
                Blog
            </NavLink>

          </div>

          <div className=" flex gap-3" id="nav-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <button
              className=" border border-red-500 px-3 rounded-md hover:bg-red-500 hover:text-white hover:border-red-700 py-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
