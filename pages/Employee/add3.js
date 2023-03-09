/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "../Component/header";
import styles from "/styles/Employee/add3.module.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/joy/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddEmployee() {
  const BasicSalary = () => {
    return (
      <>
        <label
          style={{
            position: "relative",
            right: "33px",
          }}
        >
          Basic salary*
        </label>
        <label
          style={{
            backgroundColor: "#e9ecef",
            fontWeight: "normal",
            height: "38px",
            width: "35px",
            border: "1 solid grey",
            borderRadius: "6px 0 0 6px",
            textAlign: "center",
            float: "left",
            paddingRight: "5px",
            position: "relative",
            top: "24px",
            lineHeight: "33px",
          }}
        >
          Rp
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="0"
          style={{
            maxWidth: "300px",
            display: "inline",
            borderRadius: "0 0 3px 3px",
          }}
        />
      </>
    );
  };

  const SalaryType = () => {
    return (
      <FormControl>
        <FormLabel>Salary type</FormLabel>
        <RadioGroup row name="radio-buttons-group">
          <FormControlLabel value="month" control={<Radio />} label="Monthly" />
          <FormControlLabel value="daily" control={<Radio />} label="Daily" />
        </RadioGroup>
      </FormControl>
    );
  };

  const PaymentSchedule = () => {
    const [option, setOption] = React.useState("");

    const handleChange = (event) => {
      setOption(event.target.value);
    };
    return (
      <FormControl sx={{ mt: 0, minWidth: 334 }} size="small">
        <FormLabel>Payment Schedule</FormLabel>

        <Select
          value={option}
          placeholder="Select Status"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem disabled value="">
            <em style={{ color: "grey" }}>Select schedule</em>
          </MenuItem>
          <MenuItem value={"single"}>Single</MenuItem>
          <MenuItem value={"married"}>married</MenuItem>
          <MenuItem value={"widow"}>Widow</MenuItem>
          <MenuItem value={"widower"}>Widower</MenuItem>
        </Select>
      </FormControl>
    );
  };

  const ProrateSetting = () => {
    const [option, setOption] = React.useState("");

    const handleChange = (event) => {
      setOption(event.target.value);
    };
    return (
      <FormControl sx={{ mt: 0, minWidth: 334 }} size="small">
        <FormLabel>Prorate setting</FormLabel>

        <Select
          value={option}
          placeholder="Select Status"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem disabled value="">
            <em style={{ color: "grey" }}>Select prorate setting</em>
          </MenuItem>
          <MenuItem value={"single"}>Single</MenuItem>
          <MenuItem value={"married"}>married</MenuItem>
          <MenuItem value={"widow"}>Widow</MenuItem>
          <MenuItem value={"widower"}>Widower</MenuItem>
        </Select>
      </FormControl>
    );
  };

  const OvertimeRow1 = () => {
    const [option, setOption] = React.useState("");

    const handleChange = (event) => {
      setOption(event.target.value);
    };
    return (
      <div class="row">
        <div class="col">
          <FormControl>
            <FormLabel>Allowed for overtime</FormLabel>
            <RadioGroup row name="radio-buttons-group">
              <FormControlLabel value="y" control={<Radio />} label="Yes" />
              <FormControlLabel value="n" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
        <div class="col">
          <FormControl sx={{ mt: 0, minWidth: 334 }} size="small">
            <FormLabel>Overtime working by default</FormLabel>

            <Select value={option} onChange={handleChange} displayEmpty>
              <MenuItem disabled value="">
                <em style={{ color: "grey" }}>
                  Select overtime working day by default
                </em>
              </MenuItem>
              <MenuItem value={"single"}>Single</MenuItem>
              <MenuItem value={"married"}>married</MenuItem>
              <MenuItem value={"widow"}>Widow</MenuItem>
              <MenuItem value={"widower"}>Widower</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  };

  const OvertimeRow2 = () => {
    const OvertimeDayOff = () => {
      const [option, setOption] = React.useState("");

      const handleChange = (event) => {
        setOption(event.target.value);
      };
      return (
        <FormControl sx={{ mt: 0, minWidth: 334 }} size="small">
          <FormLabel>Overtime day off default</FormLabel>

          <Select
            value={option}
            placeholder="Select Status"
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem disabled value="">
              <em style={{ color: "grey" }}>Select overtime day off default</em>
            </MenuItem>
            <MenuItem value={"single"}>Single</MenuItem>
            <MenuItem value={"married"}>married</MenuItem>
            <MenuItem value={"widow"}>Widow</MenuItem>
            <MenuItem value={"widower"}>Widower</MenuItem>
          </Select>
        </FormControl>
      );
    };

    const OvertimeNatHoliday = () => {
      const [option, setOption] = React.useState("");

      const handleChange = (event) => {
        setOption(event.target.value);
      };
      return (
        <FormControl sx={{ mt: 0, minWidth: 334 }} size="small">
          <FormLabel>Overtime national day default</FormLabel>

          <Select
            value={option}
            placeholder="Select Status"
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem disabled value="">
              <em style={{ color: "grey" }}>
                Select overtime national holday default
              </em>
            </MenuItem>
            <MenuItem value={"single"}>Single</MenuItem>
            <MenuItem value={"married"}>married</MenuItem>
            <MenuItem value={"widow"}>Widow</MenuItem>
            <MenuItem value={"widower"}>Widower</MenuItem>
          </Select>
        </FormControl>
      );
    };

    return (
      <div class="row">
        <div class="col">
          <OvertimeDayOff />
        </div>
        <div class="col">
          <OvertimeNatHoliday />
        </div>
      </div>
    );
  };

  const BankName = () => {
    const [option, setOption] = React.useState("");

    const handleChange = (event) => {
      setOption(event.target.value);
    };
    return (
      <FormControl sx={{ mt: 0, minWidth: 334 }} size="small">
        <FormLabel>Bank name</FormLabel>

        <Select
          value={option}
          placeholder="Select Status"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem disabled value="">
            <em style={{ color: "grey", fontStyle: "normal" }}>Select bank</em>
          </MenuItem>
          <MenuItem value={"single"}>Single</MenuItem>
          <MenuItem value={"married"}>married</MenuItem>
          <MenuItem value={"widow"}>Widow</MenuItem>
          <MenuItem value={"widower"}>Widower</MenuItem>
        </Select>
      </FormControl>
    );
  };

  const Account = () => {
    return (
      <div class="row">
        <div class="col">
          <FormLabel>Account number</FormLabel>
          <input type="text" class="form-control" />
        </div>
        <div class="col">
          <FormLabel>Account holder name</FormLabel>
          <input type="text" class="form-control" />
        </div>
      </div>
    );
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
                3
              </h4>
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
              <label>Salary</label>
              <p>Input employee salary info</p>
              <div class="row">
                <div class="col">
                  <BasicSalary />
                </div>
                <div class="col">
                  <SalaryType />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <PaymentSchedule />
                </div>
                <div class="col">
                  <ProrateSetting />
                </div>
              </div>
              <br />
              <OvertimeRow1 />
              <br />
              <OvertimeRow2 />
              <br />
              <label>Bank Account</label>
              <p>The employee's bank account used to payroll</p>
              <BankName />
              <br />
              <Account />
              <br />
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
