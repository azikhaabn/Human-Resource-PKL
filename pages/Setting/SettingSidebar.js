import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "/styles/Setting/SettSidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBuilding,
  faCircleUser,
  faClock,
  faFileLines,
  faIdBadge,
  faIdCard,
} from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";

export default function SettingSidebar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.container}>
      <Head>
        <title>Company Name</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        <h2 className={`${styles.h2} ps-2 mb-3`}>Settings</h2>
        <div className={`d-flex flex-column`}>
          <Link href="#">
            <a
              className={
                currentRoute === ""
                  ? `${styles["btn-sett"]} ${styles["btn-sett-active"]} py-2 px-2`
                  : `${styles["btn-sett"]} py-2 px-1 mt-1`
              }
            >
              <div className="d-flex justify-content-between">
                <div className={styles["icon-sidebar"]}>
                  <FontAwesomeIcon icon={faCircleUser} /> &nbsp;
                  <span>Account Preference</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a
              className={
                currentRoute === ""
                  ? `${styles["btn-sett"]} ${styles["btn-sett-active"]} py-2 px-2`
                  : `${styles["btn-sett"]} py-2 px-1 mt-1`
              }
            >
              <div className="d-flex justify-content-between">
                <div className={styles["icon-sidebar"]}>
                  <FontAwesomeIcon icon={faBuilding} /> &nbsp;
                  <span>Company</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a
              className={
                currentRoute === ""
                  ? `${styles["btn-sett"]} ${styles["btn-sett-active"]} py-2 px-2`
                  : `${styles["btn-sett"]} py-2 px-1 mt-1`
              }
            >
              <div className="d-flex justify-content-between">
                <div className={styles["icon-sidebar"]}>
                  <FontAwesomeIcon icon={faClock} /> &nbsp;
                  <span>Time Management</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a
              className={
                currentRoute === ""
                  ? `${styles["btn-sett"]} ${styles["btn-sett-active"]} py-2 px-2`
                  : `${styles["btn-sett"]} py-2 px-1 mt-1`
              }
            >
              <div className="d-flex justify-content-between">
                <div className={styles["icon-sidebar"]}>
                  <FontAwesomeIcon icon={faBuilding} /> &nbsp;
                  <span>Payroll</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </a>
          </Link>

          <Link href="/SettingSidebar">
            <a
              className={
                currentRoute === ""
                  ? `${styles["btn-sett"]} ${styles["btn-sett-active"]} py-2 px-1`
                  : `${styles["btn-sett"]} py-2 px-1`
              }
            >
              <div className="d-flex justify-content-between">
                <div className={styles["icon-sidebar"]}>
                  <FontAwesomeIcon icon={faClock} /> &nbsp;
                  <span>Finance</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </a>
          </Link>

          <Link href="#">
            <a
              className={
                currentRoute === ""
                  ? `${styles["btn-sett"]} ${styles["btn-sett-active"]} py-2 px-2`
                  : `${styles["btn-sett"]} py-2 px-1 mt-1`
              }
            >
              <div className="d-flex justify-content-between">
                <div className={styles["icon-sidebar"]}>
                  <FontAwesomeIcon icon={faFileLines} /> &nbsp;
                  <span>ESS</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a
              className={
                currentRoute === ""
                  ? `${styles["btn-sett"]} ${styles["btn-sett-active"]} py-2 px-2`
                  : `${styles["btn-sett"]} py-2 px-1 mt-1`
              }
            >
              <div className="d-flex justify-content-between">
                <div className={styles["icon-sidebar"]}>
                  <FontAwesomeIcon icon={faIdBadge} /> &nbsp;
                  <span>Users</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a
              className={
                currentRoute === ""
                  ? `${styles["btn-sett"]} ${styles["btn-sett-active"]} py-2 px-2`
                  : `${styles["btn-sett"]} py-2 px-1 mt-1`
              }
            >
              <div className="d-flex justify-content-between">
                <div className={styles["icon-sidebar"]}>
                  <FontAwesomeIcon icon={faDiagramProject} /> &nbsp;
                  <span>Integration</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
