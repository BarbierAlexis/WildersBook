import React, { useState } from "react";
import { Button, NewButton, Error, Form, Input, Label } from "./style";
import axios from 'axios';

const AddWilder = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [skills, setSkills] = useState("");
    const [error, setError] = useState("");

    return (
      <Form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const result = await axios.post(
            "http://localhost:5000/api/wilder/create",
            {
              name,
              city,
            }
          );
          if (result.data.success) {
            setError("");
          }
        } catch (error) {
          if (error.response) {
            setError(error.response.data.message);
          } else {
            setError(error.message);
          }
        }
      }}
      >
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type the name"
          required
          type="text"
          id="name-input"
          label="Name"
          variant="outlined"
        />
        <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Type the city"
          required
          type="text"
          id="city-input"
          label="City"
          variant="outlined"
        />
        {error !== "" && <Error>{error}</Error>}
        <NewButton type="submit" variant="outlined">Add</NewButton>
      </Form>
    );
  }

  export default AddWilder;
  