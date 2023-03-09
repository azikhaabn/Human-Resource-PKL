import Head from "next/head";
import React, { useMemo } from "react";
import styles from "/styles/Payroll.module.css";
import Header from "../Component/header";
import { useState } from "react";
import Image from "next/image"; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Employee() {
  const [show, setShow] = useState(false);


  return (
    <div className={styles.container}>
      {/* <Head>
        <title> Payroll </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Header />

      <main >
        <h2  className={styles.title}>Welcome To Easy Handler Payroll Software</h2>
        <h4 className={styles.name}>Nama Perusahaan</h4>

        <div className={styles.grid}>
        <a className={styles.locationTitle} href="#">Update Payroll Component</a>
          <div className={styles.locationImage}>
            <a href="#">
              <img src="/UpdatePayrollC.png" alt="san francisco" className={styles.img}/>
            </a>
          </div>

          <a className={styles.locationTitle} href="#">Run Payroll</a>
          <div className={styles.locationImage}>
            <Button onClick={() => setShow(!show)} className={styles.bg} id="bga">
              <img src="/runP.png" alt="san francisco" className={styles.img}/>
              
            </Button>
      <Modal  show={show}
            onHide={() => setShow(!show)}
            backdrop="static"
            keyboard={false}>
           <Modal.Header closeButton>
             <Modal.Title>Run Payroll</Modal.Title>
           </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
             <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(!show)}>
                Continue
                </Button>
                <Button variant="primary" onClick={() => setShow(!show)}>
                Cancel
                </Button>
             </Modal.Footer>
      </Modal>
          </div>

          <a className={styles.locationTitle} href="#">View Reports</a>
          <div className={styles.locationImage}>
            <a href="#">
              <img src="/viewR.png" alt="san francisco" className={styles.img}/>
            </a>
          </div>

          <a className={styles.locationTitle} href="#">Settings</a>
          <div className={styles.locationImage}>
            <a href="#">
              <img src="/settings.png" alt="san francisco" className={styles.img}/>
            </a>
          </div>

          <a className={styles.locationTitle} href="#">Import Payroll</a>
          <div className={styles.locationImage}>
            <a href="#">
              <img src="/importP.png" alt="san francisco" className={styles.img}/>
            </a>
          </div>

          <a className={styles.locationTitle} href="#">Run THR</a>
          <div className={styles.locationImage}>
            <a href="#">
              <img src="/RunThr.png" alt="san francisco" className={styles.img}/>
            </a>
          </div>

          <a className={styles.locationTitle} href="#">Ex Employee Allowence</a>
          <div className={styles.locationImage}>
            <a href="#">
              <img src="/ExEmployee.png" alt="san francisco" className={styles.img}/>
            </a>
          </div>
          
          <a className={styles.locationTitle} href="#">Salary Tax Calculator</a>
          <div className={styles.locationImage}>
            <a href="#">
              <img src="/SalaryT.png" alt="san francisco" className={styles.img}/>
            </a>
          </div>

          <a className={styles.locationTitle} href="#">NPP Transaction History</a>
          <div className={styles.locationImage}>
            <a href="#">
              <img src="/npp.png" alt="san francisco" className={styles.img}/>
            </a>
          </div>

          <a className={styles.locationTitle} href="#">Tax Recalculate</a>
          <div className={styles.locationImage}>
            <a href="#">
              <img src="/taxRec.png" alt="san francisco" className={styles.img}/>
            </a>
          </div>

          <a className={styles.locationTitle} href="#">Pph21 DTP</a>
          <div className={styles.locationImage}>
            <a href="#">
              <img src="/pph21.png" alt="san francisco" className={styles.img}/>
            </a>
          </div>

          <a className={styles.locationTitle} href="#">BPJS New Rate</a>
          <div className={styles.locationImage}>
            <a href="#">
              <img src="/Bpjs.png" alt="san francisco" className={styles.img}/>
            </a>
          </div>
        </div>

        {/* <div className={styles.image}>
        <h2>Update Payroll Component</h2> 
        <img src="/UpdatePayrollC.png"/>
       
        <img src="/runP.png"/>
        <img src="/viewR.png"/>
        <img src="/settings.png"/>
        <img src="/importP.png"/>
        <img src="/RunThr.png"/>
        <img src="/ExEmployee.png"/>
        <img src="/SalaryT.png"/>
        <img src="/npp.png"/>
        <img src="/pph21.png"/>
        <img src="/Bpjs.png"/>
        <img src="/taxRec.png"/>  

        </div> */}
      </main>
      
    </div>
  );
}
