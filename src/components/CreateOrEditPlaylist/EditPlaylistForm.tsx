import Card from "../UI/Card";
import classes from "./CreatePlaylistForm.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const EditPlaylistForm = (props: any) => {
  const dispatch = useDispatch();

  const current = useSelector((state: any) => state.playlists.current);
  const access_token = useSelector(
    (state: any) => state.playlists.access_token
  );

  const dark = useSelector((state: any) => state.ui.dark);

  const [playlistName, setPlaylistName] = useState(current.name);
  const [playlistDescription, setPlaylistDescription] = useState(
    current.description
  );

  const onNameChange = (event: any) => {
    setPlaylistName(event.target.value);
  };

  const onDescriptionChange = (event: any) => {
    setPlaylistDescription(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (playlistName.trim().length !== 0) {
      console.log("submitted", playlistName, playlistDescription);
      const submitData = {
        name: playlistName,
        description: playlistDescription,
        public: false,
      };
      const data = { access_token, id: current.id, submitData };
      dispatch({ type: "EDIT_FETCH_REQUESTED", payload: data });
      dispatch({ type: "setClose" });
    }
  };

  const closeHandler = () => {
    dispatch({ type: "setClose" });
  };

  return (
    <div>
      <div className={classes.backdrop} onClick={closeHandler}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Edit {current.name}</h2>
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
          <div className={classes.actions}>
            <Button className="remove" onClick={closeHandler}>Go Back</Button>
            <Button type="submit" >Submit</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default EditPlaylistForm;
