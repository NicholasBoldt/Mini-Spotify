import Card from "../UI/Card";
import classes from "./CreatePlaylistForm.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import React from "react";

const CreatePlaylistForm = (props: any) => {
  const [playlistName, setPlaylistName] = useState('');
  const [playlistDescription, setPlaylistDescription] = useState('');


  const onNameChange = (event: any) => {
    setPlaylistName(event.target.value)
  }

  const onDescriptionChange = (event: any) => {
    setPlaylistDescription(event.target.value)
}

  const submitHandler = (event: any) => {
    event.preventDefault();
    if(playlistName.trim().length !== 0) {
        console.log("submitted", playlistName, playlistDescription);
    props.onSubmitPlaylist({
      name: playlistName,
      description: playlistDescription,
      public: false,
    });
        props.onConfirm();
    }
    
  };



  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
      <header className={classes.header}><h2>Create a Playlist</h2></header>
        <form onSubmit={submitHandler}>
          <div>
            <label>Playlist Name</label>
            <input onChange={onNameChange}></input>
          </div>
          <div>
            <label>Playlist Description</label>
            <input onChange={onDescriptionChange}></input>
          </div>
          <div>
            <Button  type="submit">
                Submit
            </Button>
          </div>
         
        </form>
      </Card>
    </div>
  );
};

export default CreatePlaylistForm;
