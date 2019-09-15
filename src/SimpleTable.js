import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(firstname, surname, gender, DOB, nationality, highestedulevel, eduinstitution, employeerole, employeegrade) {
  return { firstname, surname, gender, DOB, nationality, highestedulevel, eduinstitution, employeerole, employeegrade };
}

const rows = [
  createData('Praskovya','	Dubinina',	'F',	'14/07/1953',	'Crotian'	,'College Graduate',	'Crossroads School of Fine Arts','IT Manager',	'A'),
  createData('Jaquon',	'Hart',	'M','24/01/1975',	'Indian',	'A Level',	'White Mountain Institute',	'Developer'	,'A'),
  createData('Vivienne','	Dubinina',	'Cisgender',	'14/07/1937',	'Crotian'	,'High School graduate',	'Crossroads School of Fine Arts','UI Designer',	'A'),
  createData('James',	'Peters',	'genderqueer','24/01/1975',	'Spanish',	'Post Graduate Degree',	'White Mountain Institute',	'Developer'	,'A'),
  createData('Matthew',	'Billington',	'Other','24/01/1975',	'French',	'PHD',	'White Mountain Institute',	'DevOps Engineer'	,'A'),
  createData('Mary',	'Black',	'Non-binary','24/01/1975',	'African',	'A Level',	'White Mountain Institute',	'Developer'	,'A'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Nationality</TableCell>
            <TableCell align="right">Highest Edu Level</TableCell>
            <TableCell align="right">Edu Institution</TableCell>
            <TableCell align="right">Employee Role	</TableCell>
            <TableCell align="right">Employee Grade
</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.firstname}>
              <TableCell component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell align="right">{row.surname}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.DOB}</TableCell>
              <TableCell align="right">{row.nationality}</TableCell>
              <TableCell align="right">{row.highestedulevel}</TableCell><TableCell align="right">{row.eduinstitution}</TableCell>
              <TableCell align="right">{row.employeerole}</TableCell>
              <TableCell align="right">{row.employeegrade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
