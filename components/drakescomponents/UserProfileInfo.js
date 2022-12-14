import styles from "../../styles/Profile.module.css";
import React, { useState, useEffect } from "react";

//top portion of user page, provides user information (username, join date, pic etc..)
const UserProfileInfo = ({ user }) => {
  return (
    <>
      <div className={styles.profileInfoContainer}>
        <div className={styles.leftProfileInfo}>
          <div className={styles.leftProfileTop}>
            <div className={styles.leftProfileTopPic}>
              <img src={user.picture} className={styles.profilePic} />
            </div>
            <div className={styles.leftProfileTopUser}>
              <div className={styles.profileText}>
                <p>
                  <b>{user.username}</b>
                </p>
                <p>Joined {user.account_age}</p>
                <p>
                  {user.city}, {user.state}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.leftProfileBot}>
            <div className={styles.boughtSoldFollowers}>
              <div className={styles.bsfContainer}>
                <p>
                  <b>0</b>
                </p>
                <p>Bought</p>
              </div>
              <div className={styles.bsfContainer}>
                <p>
                  <b>0</b>
                </p>
                <p>Sold</p>
              </div>
              <div className={styles.bsfContainer}>
                <p>
                  <b>0</b>
                </p>
                <p>Followers</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightProfileInfo}>
          <div className={styles.rightProfileTop}>
            <p>
              <b>Responds within a few hours</b>
            </p>
            <div className={styles.rightProfileTopAwards}>
              <ul className={styles.awardContents}>
                <li className={styles.awardList}>
                  <img
                    className={styles.awardImage}
                    src={
                      "https://cdn-icons-png.flaticon.com/512/724/724664.png"
                    }
                  />
                  <p>
                    Confirmed <br></br> phone
                  </p>
                </li>
                <li className={styles.awardList}>
                  <img
                    className={styles.awardImage}
                    src={
                      "https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                    }
                  />
                  <p>
                    Confirmed <br></br> Facebook
                  </p>
                </li>
                <li className={styles.awardList}>
                  <img
                    className={styles.awardImage}
                    src={
                      "https://cdn-icons-png.flaticon.com/512/7718/7718904.png"
                    }
                  />
                  <p>
                    Confirmed <br></br> email
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.rightProfileBot}>
            <hr className={styles.hr} aria-hidden="true"></hr>
            <div className={styles.rightProfileBotCompliments}>
              <p className={styles.complimentHead}>
                <b>Compliments</b>
              </p>
              <div className={styles.compliments}>
                <p>
                  <b>0</b> Item as described
                </p>
                <p>
                  <b>0</b> Friendly
                </p>
                <p>
                  <b>0</b> On time
                </p>
                <p>
                  <b>0</b> Communicative
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hr} aria-hidden="true"></hr>
    </>
  );
};

export default UserProfileInfo;
