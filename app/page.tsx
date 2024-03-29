"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.scss";
import UserLoader from "./components/Loader";
import CardLoader from "./components/CardLoader";

const Page = () => {
  const [data, setData] = useState<any>();
  const [user, setUser] = useState<any>();

  const fetchData = async () => {
    const res = await axios.get(
      "https://602e7c2c4410730017c50b9d.mockapi.io/users"
    );

    setData(res?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (username: any) => {
    setUser(
      data?.filter((user: any) => user?.profile?.username === username)?.[0]
    );
  };

  return (
    <main className={styles.main}>
      {data ? (
        <>
          <div className={styles.userList}>
            {data?.map((userDetails: any) => (
              <div
                key={userDetails?.profile?.firstName}
                className={`${styles.user} ${
                  userDetails?.profile?.username === user?.profile?.username &&
                  styles.active
                }`}
                onClick={() => handleClick(userDetails?.profile?.username)}
              >
                <img
                  src={userDetails?.avatar}
                  alt=""
                  onError={(e: any) =>
                    (e.target.src =
                      "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg")
                  }
                />
                <div className={styles.userInfo}>
                  <h3>{userDetails?.profile?.username}</h3>
                  <p>{userDetails?.jobTitle}</p>
                </div>
              </div>
            ))}
          </div>
          <section className={styles.cardSection}>
            {user ? (
              <div className={styles.card}>
                <img
                  src={
                    user?.avatar ||
                    "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                  }
                  alt=""
                  onError={(e: any) =>
                    (e.target.src =
                      "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg")
                  }
                  className={styles.avatar}
                />
                <div className={styles.userInfo}>
                  <h2>
                    {user?.profile?.firstName} {user?.profile?.lastName}
                  </h2>
                  <h4>{user?.jobTitle}</h4>
                  <p>{user?.Bio}</p>
                  <p>
                    <span>Email:</span> {user?.profile?.email?.toLowerCase()}
                  </p>
                  <p>
                    <span>Username:</span>{" "}
                    {user?.profile?.username?.toLowerCase()}
                  </p>
                </div>
              </div>
            ) : (
              <h1>Selected details will be shown here </h1>
            )}
          </section>
        </>
      ) : (
        <>
          <div className={styles.userList}>
            <UserLoader />
          </div>
          <section className={styles.cardSection}>
            <CardLoader />
          </section>
        </>
      )}
    </main>
  );
};

export default Page;
