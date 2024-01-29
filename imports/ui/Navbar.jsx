import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
const Navbar = () => {
  const { pathname } = useLocation();
  const menu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "My Wallet",
    },
    {
      id: 3,
      name: "Activity",
    },
    {
      id: 4,
      name: "Account",
    },
    {
      id: 5,
      name: "Setting",
    },
  ];

  return (
    <nav className="w-[90%] mx-auto h-[80px]  flex items-center justify-around">
      <div className="flex min-w-[220px] justify-around items-center">
        <img src="./loanpay.svg" alt="logo" height={40} width={40} />
        <h1 className=" font-rubik font-extrabol text-3xl">LoanPay</h1>
      </div>
      <div className="min-w-[600px] overflow-hidden bg-[#ebe9e9] rounded-full h-[60px] flex ">
        <ul className="flex justify-around cursor-pointer items-center w-full h-[60px]">
          {menu.map((item) => {
            const isActive =
              pathname.slice(1) === item.name.replace(" ", "").toLowerCase();
            return (
              <Link
                key={item.id}
                className=" overflow-hidden"
                to={`/${
                  item.name === "Home"
                    ? ""
                    : item.name.replace(" ", "").toLowerCase()
                }`}
              >
                <li
                  className={`font-bullet text-center font-medium hover:text-[#59db86] hover:border-1 hover:border-[#fd5656] w-[150px] hover:rounded-[20px] h-[60px] flex items-center justify-center text-base ${
                    isActive
                      ? "bg-[black] text-white rounded-[20px]"
                      : "bg-[#ebe9e9] hover:scale-105 transition-scale duration-500"
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div>
        <Link to="/login">
          <button
            className="bg-[#F8F8F8] border-2 border-[#191010] rounded-[10px] px-4 py-2 font-rubik font-bold hover:bg-[#000000] hover:text-white hover:border-[#e6dcec] hover:border-2 w-[130px] transition duration-500 text-base"
            onClick={() => Meteor.logout()}
          >
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
