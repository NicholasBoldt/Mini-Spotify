import Card from "../UI/Card";
import classes from "./CreatePlaylistForm.module.css";
import { cleanCommonProps } from "react-select/dist/declarations/src/utils";

const CreatePlaylistForm = (props: any) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <div>create playlist</div>
        <button onClick={props.onConfirm}>
            Submit
        </button>
      </Card>
    </div>
  );
};

export default CreatePlaylistForm;
