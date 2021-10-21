import Card from "../UI/Card";
import classes from "./CreatePlaylistForm.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../redux/reducers";

const CreatePlaylistForm = (props: any) => {
  const dispatch = useDispatch();

  const userId = useSelector((state: rootState) => state.playlists.userId);
  const access_token = useSelector(
    (state: rootState) => state.playlists.access_token
  );
  const dark = useSelector((state: rootState) => state.ui.dark);

  const [playlistName, setPlaylistName] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");
  const [error, setError] = useState("");

  const onNameChange = (event: any) => {
    setPlaylistName(event.target.value);
  };

  const onDescriptionChange = (event: any) => {
    setPlaylistDescription(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (playlistName.trim().length === 0) {
      setError("Playlist name must not be empty!");
      return;
    }
    if (playlistDescription.trim().length > 200) {
      setError("Description must be less than 200 characters!");
      return;
    }
    const submitData = {
      name: playlistName,
      description: playlistDescription,
      public: false,
    };
    const data = { access_token, userId, submitData };

    dispatch({ type: "CREATE_FETCH_REQUESTED", payload: data });
    dispatch({ type: "setClose" });
  };

  const closeHandler = () => {
    dispatch({ type: "setClose" });
  };

  return (
    <div>
      <div className={classes.backdrop} onClick={closeHandler}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Create a Playlist</h2>
        </header>
        <form
          className={
            !dark ? classes.content : `${classes.content} ${classes.dark}`
          }
          onSubmit={submitHandler}
        >
          <div className={classes.inputs}>
            <div>
              <label>Playlist Name:</label>
              <input onChange={onNameChange}></input>
            </div>
            <div>
              <label>Playlist Description:</label>
              <input onChange={onDescriptionChange}></input>
            </div>
          </div>
          <p className={classes.error}>{error}</p>
          <div className={classes.actions}>
            <Button className="remove" onClick={closeHandler}>
              Go Back
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreatePlaylistForm;
