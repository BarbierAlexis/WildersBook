import React, { useState } from "react";
import { CustomButton, Error, Form, Input, Success } from "./style";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const AddWilder = ({onSuccess}) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  // const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [delayed, setDelayed] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSuccess = (newWilder) => {
    onSuccess(newWilder);
    setOpenModal(false);
    setSuccessMessage(`The wilder ${newWilder.name} has been successfully added`);
  };

  return (
    <>
      {successMessage !== "" && <Success>{successMessage}</Success>}
      <CustomButton width="12rem" type="button" onClick={handleOpen}>
        Add a wilder
      </CustomButton>
      <Modal
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div>
            <Form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  setDelayed(true);
                  setLoading(true);
                  setTimeout(() => setDelayed(false), 1000);
                  const result = await axios.post(
                    "http://localhost:5000/api/wilder/create",
                    {
                      name,
                      city,
                    }
                  );
                  if (result.data.success) {
                    setError("");
                    handleSuccess(result.data.result);
                  }
                } catch (error) {
                  if (error.response) {
                    setError(error.response.data.message);
                  } else {
                    setError(error.message);
                  }
                } finally {
                  setLoading(false);
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
              <CustomButton width="100%" type="submit" variant="outlined">
                {loading && !delayed ? <CircularProgress /> : "Add"}
              </CustomButton>
            </Form>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

  export default AddWilder;
  