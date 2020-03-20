import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function DataTable(props) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Middle Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell>Emails</TableCell>
            <TableCell>Favorite Feature</TableCell>
            <TableCell>Features</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(item => (
            <TableRow key={item.UserName}>
              <TableCell component="th" scope="row">
                {item.FirstName}
              </TableCell>
              <TableCell>{item.MiddleName}</TableCell>
              <TableCell>{item.LastName}</TableCell>
              <TableCell>{item.Gender}</TableCell>
              <TableCell align="right">{item.Age}</TableCell>
              <TableCell>{item.Emails.join(", ")}</TableCell>
              <TableCell>{item.Features.join(", ")}</TableCell>
              <TableCell>{item.FavoriteFeature}</TableCell>
              <TableCell>
                {item.AddressInfo.map(line => line.Address)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
