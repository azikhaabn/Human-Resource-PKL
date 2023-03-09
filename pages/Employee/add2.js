import React from "react";
import Header from "../Component/header";
import styles from "/styles/Employee/add2.module.css";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { grey } from "@mui/material/colors";

export default function AddEmployee() {
  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.wrapper}>
          <h2>Employees</h2>
          <h2>Add Employees</h2>
          <div className={styles.content}>
            <div className={styles.sectionNum}>
              <FontAwesomeIcon
                className={styles.num}
                icon={faCheck}
                style={{ color: "red", backgroundColor: "white" }}
              />
              <div className={styles.line}></div>
              <h4
                className={styles.num1}
                style={{
                  color: "white",
                  backgroundColor: "#c02a34",
                  borderColor: "#c02a34",
                }}
              >
                2
              </h4>
              <div className={styles.line}></div>
              <h4 className={styles.num1}>3</h4>
              <div className={styles.line}></div>
              <h4 className={styles.num1}>4</h4>
            </div>
            <div className={styles.label}>
              <label className={styles.label1}>Personal Data</label>
              <label className={styles.label2}>Employment Data</label>
              <label className={styles.label3}>Payroll</label>
              <label className={styles.label4}>Invite Employee</label>
            </div>
            <form className={styles.form}>
              <label>Employment Data</label>
              <p>Fill all employee data related to company</p>

              <div class="row">
                <div class="col">
                  <label style={{marginTop: 2}}>Employee ID*</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col">
                  <label>Barcode</label>
                  <Tooltip title="Barcode number will be use for the employee when absent at the fingerprint machine, this number will affect the attendance upload process." placement="top-start">
                  <InfoIcon sx={{color : grey[700], marginLeft: 0.5}}/>
                  </Tooltip>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <br />
              <FormControl sx={{ mt: 0, maxWidth: 334 }} size="small">
                <FormLabel>Employment Status*</FormLabel>
                <Select
                  value={option}
                  placeholder="Select Status"
                  onChange={handleChange}
                  displayEmpty
                >
                  <MenuItem disabled value="">
                    <em style={{ color: "grey" }}>Select employement status</em>
                  </MenuItem>
                  <MenuItem value={"single"}>Single</MenuItem>
                  <MenuItem value={"married"}>married</MenuItem>
                  <MenuItem value={"widow"}>Widow</MenuItem>
                  <MenuItem value={"widower"}>Widower</MenuItem>
                </Select>
              </FormControl>
              <br />
              <div class="row">
                <div class="col">
                  <label>Join Date*</label>
                  <input type="date" class="form-control" />
                </div>
                <div class="col">
                  <label>End status date*</label>
                  <input type="date" class="form-control" />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <FormControl sx={{ mt: 0, minWidth: 334 }} size="small">
                    <FormLabel>Branch</FormLabel>
                    <Select
                      value={option}
                      placeholder="Pusat"
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem disabled value="">
                        <em style={{ color: "grey" }}>Pusat</em>
                      </MenuItem>
                      <MenuItem value={"noBranch"}>No Branch</MenuItem>
                      <MenuItem value={"pusat"}>Pusat</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div class="col">
                  <FormControl sx={{ mt: 0, minWidth: 334 }} size="small">
                    <FormLabel>Organization*</FormLabel>
                    <Select value={option} onChange={handleChange} displayEmpty>
                      <MenuItem disabled value="">
                        <em style={{ color: "grey" }}>Select organization</em>
                      </MenuItem>
                      <MenuItem value={"acc"}>Accounting</MenuItem>
                      <MenuItem value={"it"}>IT Division</MenuItem>
                      <MenuItem value={"sales"}>Sales</MenuItem>
                      <MenuItem value={"marketing"}>Marketing</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <FormControl sx={{ mt: 0, minWidth: 334 }} size="small">
                    <FormLabel>Job position*</FormLabel>

                    <Select value={option} onChange={handleChange} displayEmpty>
                      <MenuItem disabled value="">
                        <em style={{ color: "grey" }}>Select job position</em>
                      </MenuItem>
                      <MenuItem value={"nojob"}>No job position</MenuItem>
                      <MenuItem value={"ceo"}>CEO</MenuItem>
                      <MenuItem value={"managerHrd"}>Manager HRD & GA</MenuItem>
                      <MenuItem value={"superHrd"}>
                        Supervisor HRD & GA
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div class="col">
                  <FormControl sx={{ mt: 0, minWidth: 334 }} size="small">
                    <FormLabel>Job level*</FormLabel>
                    <Select value={option} onChange={handleChange} displayEmpty>
                      <MenuItem disabled value="">
                        <em style={{ color: "grey" }}>Select job level</em>
                      </MenuItem>
                      <MenuItem value={"nj"}>No job level</MenuItem>
                      <MenuItem value={"ceo"}>CEO</MenuItem>
                      <MenuItem value={"manager"}>Manager</MenuItem>
                      <MenuItem value={"supervisor"}>Supervisor</MenuItem>
                      <MenuItem value={"Staff"}>Staff</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <FormControl sx={{ mt: 0, minWidth: 334 }} size="small">
                    <FormLabel>Grade</FormLabel>
                    <Select value={option} onChange={handleChange} displayEmpty>
                      <MenuItem disabled value="">
                        <em style={{ color: "grey" }}>Select grade</em>
                      </MenuItem>
                      <MenuItem value={"nog"}>No grade</MenuItem>
                      <MenuItem value={"a"}>A</MenuItem>
                      <MenuItem value={"b"}>B</MenuItem>
                      <MenuItem value={"c"}>C</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div class="col">
                  <FormControl sx={{ mt: 0, minWidth: 334 }} size="small">
                    <FormLabel>Class</FormLabel>
                    <Select value={option} onChange={handleChange} displayEmpty>
                      <MenuItem disabled value="">
                        <em style={{ color: "grey" }}>Select class</em>
                      </MenuItem>
                      <MenuItem value={"noc"}>No class</MenuItem>
                      <MenuItem value={"1"}>1</MenuItem>
                      <MenuItem value={"2"}>2</MenuItem>
                      <MenuItem value={"3"}>3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <br />
              <FormControl sx={{ mt: 0, maxWidth: 334 }} size="small">
                <FormLabel>Schedule*</FormLabel>
                <Select value={option} onChange={handleChange} displayEmpty>
                  <MenuItem disabled value="">
                    <em style={{ color: "grey" }}>Select schedule</em>
                  </MenuItem>
                  <MenuItem value="2">No schedule</MenuItem>
                  <MenuItem value={"of"}>OFFICE SCHEDULE</MenuItem>
                </Select>
              </FormControl>
              <br />
              <FormControl sx={{ mt: 0, maxWidth: 334 }} size="small">
                
                <FormLabel>Approval Line
                <Tooltip title="Select the employee name to use as an approval." placement="top-start">
                  <InfoIcon sx={{color : grey[700], marginLeft: 0.5}}/>
                  </Tooltip>
                </FormLabel>
                
                <Select value={option} onChange={handleChange} displayEmpty>
                  <MenuItem disabled value="">
                    <em style={{ color: "grey" }}>Select approval line</em>
                  </MenuItem>
                  <MenuItem value="2">No schedule</MenuItem>
                  <MenuItem value={"of"}>OFFICE SCHEDULE</MenuItem>
                </Select>
              </FormControl>
            </form>
            <div class="row" style={{ position: "relative", left: "17.5%" }}>
              <div class="col">
                <Button style={{ color: "grey" }}>Back</Button>
              </div>
              <div class="col">
                <Button
                  variant="outlined"
                  style={{
                    color: "grey",
                    borderColor: "#f2f4f7",
                    backgroundColor: "#f2f4f7",
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
            <br />
          </div>
        </div>
      </main>
    </div>
  );
}
