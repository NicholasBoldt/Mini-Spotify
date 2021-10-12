import classes from "./PlaylistForm.module.css";
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';


interface PlaylistForm {
    onSubmit: any;
}

interface SelectorState {
  playlists: any[]
  current: any
}


const PlaylistForm = (props:PlaylistForm) => {
  const playlists = useSelector((state: SelectorState) => state.playlists);
  const current = useSelector((state: SelectorState) => state.current);
  console.log(playlists)

  const selected = {value: current.id, label: current.name}

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
      <div>{current.description}</div>
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
