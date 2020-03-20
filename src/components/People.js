import React, { Fragment } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import DataTable from "./DataTable";
import useDataApi from "../data/useDataApi";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function People() {
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `https://services.odata.org/TripPinRESTierService/People`,
    {
      value: []
    }
  );

  return (
    <Fragment>
      {isError && (
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity="error">Something went wrong!</Alert>
        </Snackbar>
      )}
      {isLoading ? (
        <LinearProgress variant="query" />
      ) : (
        <DataTable data={data.value} />
      )}
    </Fragment>
  );
}
