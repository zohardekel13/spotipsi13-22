import useStyles from "./DialogAddPlaylistStyle";
import { Dialog,DialogTitle,Button,DialogActions,TextField } from "@mui/material";
import React from "react";

interface DialogAddPlaylistProps {
    open: boolean;
    handleClose: () => void;
    handleAddPlaylistClick: () => string | undefined,
    inputRef: React.RefObject<HTMLInputElement | null>
}

const DialogAddPlaylist = ({open,handleClose,handleAddPlaylistClick,inputRef}:DialogAddPlaylistProps) =>
{
  const {classes} = useStyles();
    return (
        <React.Fragment>
                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                  <div className={classes.dialogContainer}>
                    <DialogTitle className={classes.input} id="alert-dialog-title">
                    {"יצירת פלייליסט חדש"}
                    </DialogTitle>
                     <DialogActions className={classes.actionsContainer}>
                        <TextField inputRef={inputRef} className={classes.input} id="standard-basic" label="הכנס שם פלייליסט" variant="standard" />
                        <div>
                            <Button className={classes.btnBack} onClick={handleClose} >חזור</Button>
                            <Button className={classes.btnAdd} onClick={handleAddPlaylistClick}>אישור</Button>
                        </div>
                    </DialogActions>
                  </div>
                </Dialog>

        </React.Fragment>
    );
}

export default DialogAddPlaylist;