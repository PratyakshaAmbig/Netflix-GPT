import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { toggleLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  useEffect(() => {
    //get the value from local storage and it will be the string value and we have to convert the string value to object and send it to the store
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(addUser(storedUser));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      navigate("/browse");
    } else {
      navigate("/");
    }
  }, [user]);

  const handleSignOut = () => {
    dispatch(removeUser());
  };

  const handleGptSerachClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(toggleLanguage(e.target.value));
  };
  return (
    <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center gap-1">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="cursor-pointer py-2 px-4 m-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSerachClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-9 h-9 rounded"
            alt="userIcon"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer "
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
