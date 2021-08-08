import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#424242',
        color: '#fff',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const leaderboardStyle = {
    width: '98%',
    margin: '10px auto'
}

export default function Leaderboard({ headers, datas }) {

    const classes = useStyles();

    return (
        <div className="leaderboard" style={leaderboardStyle}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (                          
                                <StyledTableCell align="center">{header}</StyledTableCell>                           
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.map((tableDatas, index) => (
                            <StyledTableRow key={index}>
                                {tableDatas.map((data) => (
                                    <StyledTableCell align="center" component="th" scope="row">{data}</StyledTableCell>
                                ))}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}