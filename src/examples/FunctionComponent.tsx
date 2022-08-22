import React, { useState } from "react";

interface IProps {
  propsIn: string;
}

interface IForm {
  firstName: string;
  lastName: string;
  marks: number;
  attendance: number;
}

export const FunctionComponent: React.FC<IProps> = ({ propsIn }) => {
  // const [firstName, setFirstName] = useState("Abhishek");
  // const [lastName, setLastName] = useState("Raj");
  const [form, setForm] = useState<IForm>({
    firstName: "",
    lastName: "",
    marks: 0,
    attendance: 0,
  });
  const [result, setResult] = useState("");
  const [eligibleForExam, setEligibleForExam] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleFormChange = (event: any) => {
    switch (event.target.name) {
      case "marks":
        setResult(event.target.value > 40 ? "Pass" : "Fail");
        break;

      case "attendance":
        setEligibleForExam(
          event.target.value > 80 ? "Eligible" : "Not Eligible"
        );
        break;
    }

    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      {/* <h1>FunctionComponent</h1>
      <h2>Name: {name}</h2>
      <p>Props in : {propsIn}</p> */}

      {/* <form>
        <label>Name</label>
        <input
          name="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          name="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form> */}

      {/* 2nd method to use form */}

      {/* <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          name="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form> */}

      {/* 3rd method to use form to handle multiple data */}

      <p>Eligible for exam: {eligibleForExam}</p>
      <p>Exam result: {result}</p>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="firstName"
          type="text"
          value={form.firstName}
          onChange={(e) => handleFormChange(e)}
        />

        <input
          name="lastName"
          type="text"
          value={form.lastName}
          onChange={(e) => handleFormChange(e)}
        />

        <input
          name="marks"
          type="text"
          value={form.marks}
          onChange={(e) => handleFormChange(e)}
        />

        <input
          name="attendance"
          type="text"
          value={form.attendance}
          onChange={(e) => handleFormChange(e)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
