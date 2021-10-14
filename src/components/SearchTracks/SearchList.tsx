import Track from "../Tracks/Track";
import classes from "./SearchList.module.css";


const SearchList = (props: any) => {
    
  
    return (
      <div className={classes.tracklist}>
        {props.results && props.results.tracks.items.map((track: any) => (
          <Track key={track.id} name={track.name} album={track.album} artists={track.artists}/>
        ))}
      </div>
    );
  };
  
  export default SearchList;