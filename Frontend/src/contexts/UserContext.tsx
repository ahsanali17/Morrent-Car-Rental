import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";

const UserContextObj = createContext({});

function UserContextProvider(props: any) {
  const [userObject, setUserObject] = useState<any>();

  useEffect(() => {
    const fetchUserData = () => {
      try {
        axios
          .get("http://localhost:9090/users/getCurrentUser", {
            withCredentials: true,
          })
          .then((res: AxiosResponse) => {
            if (res.data) {
              setUserObject(res.data);
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <UserContextObj.Provider value={userObject}>
      {props.children}
    </UserContextObj.Provider>
  );
}

export { UserContextProvider, UserContextObj };
