import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import DataTable from "./DataTable";
import useDataApi from "../data/useDataApi";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  paper: {
    paddingTop: theme.spacing(2)
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  },
  button: {
    display: "block",
    marginTop: theme.spacing(1)
  }
}));

export default function People() {
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `https://services.odata.org/TripPinRESTierService/People`,
    {
      value: []
    }
  );

  const [query, setQuery] = useState("");

  const styles = useStyles();

  return (
    <Fragment>
      <Paper className={styles.paper}>
        <form
          onSubmit={event => {
            let url = query
              ? `https://services.odata.org/TripPinRESTierService/People?$filter=FirstName eq '${query}'`
              : `https://services.odata.org/TripPinRESTierService/People`;
            doFetch(url);
            event.preventDefault();
          }}
        >
          <TextField
            label="First Name"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <Button
            className={styles.button}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Search
          </Button>
        </form>
      </Paper>

      <Snackbar open={isError} autoHideDuration={6000}>
        <Alert severity="error">Something went wrong!</Alert>
      </Snackbar>

      <Backdrop className={styles.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <DataTable data={data.value} />
    </Fragment>
  );
}
