import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
    },
    tableHeader: {
      position: "sticky"
    }
  });

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  }))(TableCell);

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        stickyHeader={true}
        aria-label="People Data Table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Middle Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell>Emails</StyledTableCell>
            <StyledTableCell>Favorite Feature</StyledTableCell>
            <StyledTableCell>Features</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
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
