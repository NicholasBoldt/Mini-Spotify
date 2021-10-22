import React from "react";
import Card from "../UI/Card";
import { searchTracks } from "../../utiles/spotifyAPI";
import { useSelector, useDispatch } from "react-redux";
import SearchList from "./SearchList";
import classes from "./SearchTracks.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import { rootState } from "../../redux/reducers";

const SearchTrack = () => {
  const dispatch = useDispatch();
  const [trackName, setTrackName] = useState("");
  const [results, setResults] = useState("");
  const access_token = useSelector(
    (state: rootState) => state.playlists.access_token
  );
  const dark = useSelector((state: rootState) => state.ui.dark);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrackName(event.target.value);
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();
    if (trackName.trim().length !== 0) {
      const searchData = await searchTracks(access_token, trackName);
      setResults(searchData);
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
          <h2>Search for a Title</h2>
        </header>
        <form
          onSubmit={submitHandler}
          className={
            !dark ? classes.content : `${classes.content} ${classes.dark}`
          }
        >
          <div className={classes.inputs}>
            <input
              value={trackName}
              placeholder={"Search for a Track"}
              onChange={onChange}
            ></input>
            <Button className="search" type="submit">
              Search
            </Button>
          </div>
          <div className={classes.return}>
            <Button className={"remove"} onClick={closeHandler}>
              Go Back
            </Button>
          </div>
        </form>
        <div className={ !dark ? classes.results : `${classes.results} ${classes.results}`}>
          {results && <SearchList results={results} />}
        </div>
      </Card>
    </div>
  );
};

export default SearchTrack;
