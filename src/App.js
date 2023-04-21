import React from "react";
import { useFormik } from "formik";
import "./App.css";
import * as yup from "yup";
import axios from "axios";
import Button from "@mui/material/Button";
import apiConfig from "./server";
function App() {
  const [a, b] = React.useState("");
  const [set, get] = React.useState({
    _id: "",
    movie: "",
    year: "",
    Genre: "",
    url: "",
  });
  function submitBaby(aa) {
    axios.get(`${apiConfig.moviesapi}/getMovie/${aa}`).then((values) => {
      get((set) => ({
        ...set,
        ...values.data,
      }));
    });
    b("");
  }
  const handleChange = (e) => {
    b(e.target.value);
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <nav className="navbar">
        <div className="logo">
          <img src="mpr.png" className="imgg" />
          <h1 style={{ color: "black" }}>Update movies </h1>
        </div>
      </nav>
      <div style={{ marginTop: 10 }}>
        <form>
          <label for="fname">Id :</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={a}
            onChange={handleChange}
          />
          <Button onClick={submitBaby.bind(this, a)}>Submit</Button>
        </form>
      </div>
      <div style={{ marginTop: 10 }}>
        <form>
          <label for="id">Id :</label>
          <input
            type="text"
            id="id"
            name="id"
            value={set._id}
            onChange={handleChange}
          />
          <label for="movie">Id :</label>
          <input
            type="text"
            id="movie"
            name="movie"
            value={set.movie}
            onChange={handleChange}
          />
          <label for="year">Id :</label>
          <input
            type="text"
            id="year"
            name="year"
            value={set.year}
            onChange={handleChange}
          />
          <label for="Genre">Id :</label>
          <input
            type="text"
            id="Genre"
            name="Genre"
            value={set.Genre}
            onChange={handleChange}
          />
          <label for="url">Id :</label>
          <input
            type="text"
            id="url"
            name="url"
            value={set.url}
            onChange={handleChange}
          />
          <Button variant="contained" color="success">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
