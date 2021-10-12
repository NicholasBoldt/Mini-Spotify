import classes from "./PlaylistForm.module.css";
import Select from 'react-select';
import { useState } from "react";


interface PlaylistForm {
    playlists: any[];
    current: any;
    onSubmit: any;
}


const PlaylistForm = (props:PlaylistForm) => {
  const selected = {value: props.current.id, label: props.current.name}

    const handleChange = (selected: any) => {
        props.onSubmit(selected.value);
    }

    const options: Array<any> = props.playlists.map((playlist) => (
        {value: playlist.id, label: playlist.name}
    ))
  

  return (
    <div>
        <Select
        className={classes.selector}
        value={selected}
        onChange={handleChange}
        options={options}
      />
      <div>{props.current.description}</div>
    </div>
    
    // <form>
    //   <label>
    //     Select a Playlist:
    //     <select onChange={handleChange}>
    //         {props.playlists.map((playlist) => (
    //              <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
    //         ))}
    //     </select>
    //   </label>
     
    // </form>
  );
};

export default PlaylistForm;
