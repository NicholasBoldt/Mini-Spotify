import Card from "../UI/Card";
import { searchTracks } from "../../utiles/spotifyAPI";
import { useSelector, useDispatch } from "react-redux";
import SearchList from "./SearchList";
import classes from "./SearchTracks.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const SearchTrack = (props: any) => {
  const dispatch = useDispatch();
  const [trackName, setTrackName] = useState("");
  const [results, setResults] = useState("");
  const access_token = useSelector((state: any) => state.playlists.access_token);
  const dark = useSelector((state: any) => state.ui.dark);

  console.log(access_token);

  const onChange = (event: any) => {
    setTrackName(event.target.value);
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();
    if (trackName.trim().length !== 0) {
      console.log("submitted");
      console.log(trackName);
      const searchData = await searchTracks(access_token, trackName);
      console.log(searchData);
      setResults(searchData);
    }
  };

  const closeHandler = () => {
    dispatch({ type: 'setClose' });
  }

  return (
    <div>
      <div className={classes.backdrop} onClick={closeHandler}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Search for a Title</h2>
        </header>
        <form onSubmit={submitHandler} className={!dark ? classes.content : `${classes.content} ${classes.dark}`}>
          <div className={classes.inputs}>
            <input value={trackName} placeholder={'Search for a Track'} onChange={onChange}></input>
            <Button className='search' type="submit">Search</Button>
          </div>  
          <div className={classes.return}>
          <Button className={'remove'}onClick={closeHandler}>Go Back</Button>
          </div>
        </form>
        {results && (
          <SearchList
            results={results}
          />
        )}
      </Card>
    </div>
  );
};

export default SearchTrack;
