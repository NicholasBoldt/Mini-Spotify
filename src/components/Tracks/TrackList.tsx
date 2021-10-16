import Track from './Track';
import classes from './TrackList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../UI/Button';
import { useState } from 'react';

interface SelectorState {
  tracks: any[];
  current: any,
  access_token: string
}

const TrackList = (props: any) => {
  const dispatch = useDispatch();
  const current = useSelector((state: SelectorState) => state.current);
  const access_token = useSelector((state: SelectorState) => state.access_token);

  const tracks = useSelector((state: SelectorState) => state.tracks);


  const onSortTitleHandler = () => {
    function sortTitle( a: any, b: any ) {
      if ( a.track.name < b.track.name ){
        return -1;
      }
      if ( a.track.name > b.track.name ){
        return 1;
      }
      return 0;
    }
    const sortedTracks = [...tracks]
    sortedTracks.sort( sortTitle )
    console.log(tracks)
    dispatch({type: 'setTracks', payload: sortedTracks})
  }

  const onSortAlbumHandler = () => {
    function sortAlbum( a: any, b: any ) {
      if ( a.track.album.name < b.track.album.name ){
        return -1;
      }
      if ( a.track.album.name > b.track.album.name ){
        return 1;
      }
      return 0;
    }
    const sortedTracks = [...tracks]
    sortedTracks.sort( sortAlbum )
    console.log(tracks)
    dispatch({type: 'setTracks', payload: sortedTracks})
  }

  const onSortIndexHandler = () => {
    function sortIndex( a: any, b: any ) {
      if ( a.added_at < b.added_at ){
        return -1;
      }
      if ( a.added_at > b.added_at ){
        return 1;
      }
      return 0;
    }
    const sortedTracks = [...tracks]
    sortedTracks.sort( sortIndex )
    console.log(tracks)
    dispatch({type: 'setTracks', payload: sortedTracks})
  }

  const onSortReleaseHandler = () => {
    function sortRelease( a: any, b: any ) {
      if ( a.track.album.release_date < b.track.album.release_date ){
        return -1;
      }
      if ( a.track.album.release_date > b.track.album.release_date ){
        return 1;
      }
      return 0;
    }
    const sortedTracks = [...tracks]
    sortedTracks.sort( sortRelease )
    console.log(tracks)
    dispatch({type: 'setTracks', payload: sortedTracks})
  }


  return (
    <table className={classes.tracklist}>
  
      <tr className={classes.header}>
        <th><Button className='selector' onClick={onSortIndexHandler}>#</Button></th>
        <th></th>
        <th align='left'><Button className='selector' onClick={onSortTitleHandler}>Title</Button></th>
        <th><Button className='selector' onClick={onSortAlbumHandler}>Album</Button></th>
        <th><Button className='selector' onClick={onSortIndexHandler}>Added</Button></th>
        <th><Button className='selector' onClick={onSortReleaseHandler}>Release</Button></th>
        <th><Button className='selector' onClick={onSortReleaseHandler}>Time</Button></th>
        <th></th>
      </tr>
      {tracks.map((track, index) => (
        <Track key={index} index={index} uri={track.track.uri} added={track.added_at} name={track.track.name} album={track.track.album} artists={track.track.artists} time={track.track.duration_ms} add={false}/>
      ))}
    </table>
  );
};

export default TrackList;
