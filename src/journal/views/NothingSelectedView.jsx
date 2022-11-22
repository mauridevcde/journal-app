import { StarOutline, StartOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { purpleTheme } from "./../../theme/purpleTheme";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 110px)' ,
        backgroundColor: 'primary.main',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
      }}
    >
      <Grid item xs={12}>
        <StarOutline  />
      </Grid>
      <Grid item xs={12}>
        <Typography color='black' variant="h5">
            Selecciona o crea una Entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
