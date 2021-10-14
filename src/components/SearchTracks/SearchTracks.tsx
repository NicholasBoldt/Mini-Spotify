import Card from "../UI/Card"
import { searchTracks } from "../../utiles/spotifyAPI";
import { useSelector } from "react-redux";
import SearchList from "./SearchList";
import classes from './SearchTracks.module.css'
import Button from "../UI/Button";
import { useState } from "react";




const SearchTrack = (props: any) => {
    const [trackName, setTrackName] = useState('');
    const [results, setResults] = useState('');
    const access_code = useSelector((state: any) => state.access_code)
    console.log(access_code)

    const onChange = (event: any) => {
        setTrackName(event.target.value)
    }

    const submitHandler = async (event: any) => {
        event.preventDefault();
        if (trackName.trim().length !== 0) {
            console.log("submitted", );
            console.log(trackName)
            const searchData = await searchTracks(access_code, trackName)
            console.log(searchData)
            setResults(searchData);
        }

    };

    return <div>
          <div className={classes.backdrop} onClick={props.onConfirm}></div>
        <Card className={classes.modal}>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Track Name</label>
                    <input value={trackName} onChange={onChange}></input>
                </div>
                <div>
                    <Button type="submit">
                        Search
                    </Button>
                </div>
                <div>
                    <Button onClick={props.onConfirm}>
                        Close
                    </Button>
                </div>

            </form>
            {results && <SearchList results={results}/>}
    </Card></div>
}

export default SearchTrack;