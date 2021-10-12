import classes from "./PlaylistForm.module.css";
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';


interface PlaylistForm {
    current: any;
    onSubmit: any;
}

interface SelectorState {
  playlists: any[]
}


const PlaylistForm = (props:PlaylistForm) => {
  const playlists = useSelector((state: SelectorState) => state.playlists);
  console.log(playlists)

  const selected = {value: props.current.id, label: props.current.name}

    const handleChange = (selected: any) => {
        props.onSubmit(selected.value);
    }

    const options: Array<any> = playlists.map((playlist) => (
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
