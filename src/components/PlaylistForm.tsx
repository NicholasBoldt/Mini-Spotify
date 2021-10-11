


interface Playlists {
    playlists: any[]

    onSubmit: any
}






const PlaylistForm = (props:Playlists) => {
    const handleChange = (event: any) => {
        props.onSubmit(event.target.value);
    }

  return (
    <form>
      <label>
        Select a Playlist:
        <select onChange={handleChange}>
            {props.playlists.map((playlist) => (
                 <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
            ))}
        </select>
      </label>
    </form>
  );
};

export default PlaylistForm;
