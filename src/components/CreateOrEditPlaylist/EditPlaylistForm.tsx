import Card from "../UI/Card";
import classes from "./CreatePlaylistForm.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const EditPlaylistForm = (props: any) => {
    const dispatch = useDispatch();

    const current = useSelector((state: any) => state.current)
    const access_token = useSelector((state: any) => state.access_token)

    const [playlistName, setPlaylistName] = useState(current.name);
    const [playlistDescription, setPlaylistDescription] = useState(current.description);


    const onNameChange = (event: any) => {
        setPlaylistName(event.target.value)
    }

    const onDescriptionChange = (event: any) => {
        setPlaylistDescription(event.target.value)
    }

    const submitHandler = (event: any) => {
        event.preventDefault();
        if (playlistName.trim().length !== 0) {
            console.log("submitted", playlistName, playlistDescription);
            const submitData = {
                name: playlistName,
                description: playlistDescription,
                public: false,
            }
            const data = { access_token, id: current.id, submitData };
            dispatch({type:'EDIT_FETCH_REQUESTED', payload: data})
            props.onConfirm();
        }

    };

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>
            <Card className={classes.modal}>
            <header className={classes.header}><h2>Edit {current.name}</h2></header>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Playlist Name</label>
                        <input value={playlistName} onChange={onNameChange}></input>
                    </div>
                    <div>
                        <label>Playlist Description</label>
                        <input value={playlistDescription} onChange={onDescriptionChange}></input>
                    </div>
                    <div>
                        <Button type="submit">
                            Submit
            </Button>
                    </div>

                </form>
            </Card>
        </div>
    );
};

export default EditPlaylistForm;
