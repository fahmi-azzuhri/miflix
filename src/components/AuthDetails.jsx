import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useState, useEffect } from "react";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out success");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user) : setAuthUser(null);
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <div>
      {auth.user ? (
        <div>
          <p>{`Signed in as ${authUser.email} `}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </div>
      ) : (
        <p onClick={userSignOut}>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
