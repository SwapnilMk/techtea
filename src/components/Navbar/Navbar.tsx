// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// const Navbar = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//     console.log("clicked");
//   };

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link
//           to="/"
//           className="flex items-center space-x-3 rtl:space-x-reverse"
//         >
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Techtea
//           </span>
//         </Link>
//         <div className="flex md:order-2">
//           <button
//             onClick={toggleSearch}
//             type="button"
//             data-collapse-toggle="navbar-search"
//             aria-controls="navbar-search"
//             aria-expanded="false"
//             className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
//           >
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//             <span className="sr-only">Search</span>
//           </button>
//           <div className="relative hidden md:block">
//             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//               <svg
//                 className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                 />
//               </svg>
//               <span className="sr-only">Search icon</span>
//             </div>
//             <input
//               type="text"
//               id="search-navbar"
//               className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Search..."
//             />
//           </div>
//           <button
//             data-collapse-toggle="navbar-search"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-search"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//           <div className="ml-4">
//             <DropdownMenu>
//               <Avatar className="w-auto h-9">
//                 <DropdownMenuTrigger>
//                   <AvatarImage src="https://github.com/shadcn.png" />
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <Link to="/loginPage">
//                     <DropdownMenuItem>Login</DropdownMenuItem>
//                   </Link>
//                   <Link to="/registerPage">
//                     <DropdownMenuItem>Register</DropdownMenuItem>
//                   </Link>
//                 </DropdownMenuContent>
//               </Avatar>
//             </DropdownMenu>
//           </div>
//         </div>
//         <div
//           className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//           id="navbar-search"
//         >
//           <div className="relative mt-3 md:hidden">
//             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//               <svg
//                 className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                 />
//               </svg>
//             </div>
//             <input
//               type="text"
//               id="search-navbar"
//               className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Search..."
//             />
//           </div>
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <Link
//                 to="/"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                 aria-current="page"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BlogLogo } from "../../assets";
import { BiSearch } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { SiBloglovin } from "react-icons/si";
import { toast } from "react-toastify";

const Navbar = ({ handleSearch }) => {
  const navigation = useNavigate();
  const [loginUser, setLoginUser] = useState(null);
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth && auth.data) {
      setLoginUser(auth.data);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setLoginUser(null);
    toast.success("Logout successfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    navigation("/login");
  };

  return (
    <>
      <div className=" fixed top-0 backdrop-blur-xl w-full  m-auto shadow-sm z-10">
        <div className="container m-auto h-[75px] md:h-[65px] flex items-center py-1">
          <div className="left flex-1 w-full flex items-center justify-start">
            <div className=" w-full h-[60px] overflow-hidden flex items-center justify-start">
              <Link to="/" className=" flex gap-2 items-center">
                {/* <img
                  className=" w-[70px] h-[70px] object-contain"
                  src={BlogLogo}
                  alt="logo"
                /> */}

                <SiBloglovin className="text-2xl md:text-xl text-gray-800" />
                <p className="logo font-bold text-3xl md:hidden text-gray-800">log.</p>
              </Link>
            </div>
          </div>
          <div className="center flex-[5] w-full flex items-center justify-center px-1">
            <div className=" w-[50%] md:w-full flex items-center p-1 px-2 gap-1 border border-gray-800 rounded-md">
              <BiSearch className=" text-2xl text-gray-800" />
              <input
                className=" w-full bg-transparent placeholder:text-gray-700 h-full text-black "
                type="search"
                placeholder="Search here..."
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="right flex-1">
            <div className="center flex-1 flex items-center justify-end">
              <div className="flex items-center gap-3">
                {loginUser ? (
                  <div title="profile" className="group relative">
                    <button className="flex items-center gap-2 md:gap-0">
                      <img
                      loading="lazy"
                        title={loginUser?.others?.username}
                        alt="photos"
                        className="w-8 h-8 object-cover rounded-full border border-gray-500 "
                        src={
                          loginUser &&
                          loginUser.others &&
                          loginUser.others.profilePic
                            ? loginUser.others.profilePic
                            : "https://img.icons8.com/color/48/null/circled-user-male-skin-type-7--v1.png"
                        }
                      />

                      {loginUser &&
                      loginUser.others &&
                      loginUser.others.username ? (
                        <p className="font-medium md:hidden text-gray-800">
                          {loginUser.others.username}
                        </p>
                      ) : (
                        <p className="font-medium text-gray-800">Unknown</p>
                      )}
                      <MdArrowDropDown className=" md:hidden text-gray-800" size={25} />
                    </button>
                    <nav
                      tabIndex="0"
                      className="border bg-white invisible border-gray-300 rounded w-fit absolute right-2 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1"
                    >
                      <ul className="py-1 space-y-3">
                        <li className=" w-full px-2">
                          <Link
                            className=" p-2 font-semibold text-gray-800"
                            title="profile"
                            to="/user-details"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className=" w-full px-2">
                          <Link
                            className=" p-2 font-semibold text-gray-800"
                            title="logout"
                            to="/login"
                            onClick={handleLogout}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                ) : (
                  <Link
                    className=" p-2 font-semibold"
                    title="login"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
