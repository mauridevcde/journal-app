import { IconButton, Typography } from "@mui/material";
import { AddOutlined, MailOutline, Opacity } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}

    <IconButton
      size="large"
      sx={{
        color: "white",
        backgroundColor: "black",
        ':hover': { backgroundColor: "red", opacity: 0.9 },
        position: "fixed",
        right: 50,
        bottom: 50
      }}
    >
      <AddOutlined sx={{fontSize: 30}}/>
    </IconButton>

    </JournalLayout>
  );
};
