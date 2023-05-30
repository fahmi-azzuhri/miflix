import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        My Profile
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Hello, My name is {user?.name}
      </p>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {user?.email}
      </p>
    </div>
  );
};

export default Profile;
