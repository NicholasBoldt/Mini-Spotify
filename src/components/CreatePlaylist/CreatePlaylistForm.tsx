import Card from "../UI/Card";
import classes from "./CreatePlaylistForm.module.css";
import { cleanCommonProps } from "react-select/dist/declarations/src/utils";
import Button from "../UI/Button";

const CreatePlaylistForm = (props: any) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <div>create playlist</div>
        <Button onClick={props.onConfirm}>
            Submit
        </Button>
      </Card>
    </div>
  );
};

export default CreatePlaylistForm;
