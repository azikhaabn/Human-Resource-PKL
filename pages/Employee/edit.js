import Head from "next/head";
import Image from "next/image";
import React, { useMemo } from "react";
// import MOCK_DATA from "./MOCK_DATA.json";
// import { Columns } from "./columns";
import styles from "/styles/Employee/edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Employee() {
  // const columns = useMemo(() => Columns, []);
  // const data = useMemo(() => MOCK_DATA, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Edit Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faBars}
            style={{ fontSize: 32, color: "white" }}
          />
          <div className={styles.logo}>
            <Image
              src="/EasyHandler_Hitam.png"
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          <div className={styles.headerRight}>
            <a href="#">
              <FontAwesomeIcon
                className={styles.icon2}
                icon={faEnvelope}
                style={{ fontSize: 29, color: "white" }}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className={styles.icon2}
                icon={faUser}
                style={{ fontSize: 29, color: "white" }}
              />
            </a>
          </div>
        </div>

       
      </main>
    </div>
  );
}
