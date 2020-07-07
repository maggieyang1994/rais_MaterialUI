import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { EditingState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Button,
  TextField
} from '@material-ui/core/';
import Autocomplete from "@material-ui/lab/Autocomplete";
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';


const getRowId = row => row.id;

export default () => {
  const [columns] = useState([
    {
      name: 'name', title: 'Name',
    },
    {
      name: 'gender', title: 'Gender'
    },
    {
      name: 'city', title: 'City'
    },
    {
      name: 'car', title: 'Car'
    },
    {
      name: 'combox', title: "combox"
    }
  ]);
  const [top100Films] = useState([
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
    { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    { title: "The Lord of the Rings: The Two Towers", year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
    { title: "Casablanca", year: 1942 },
    { title: "City Lights", year: 1931 },
    { title: "Psycho", year: 1960 },
    { title: "The Green Mile", year: 1999 },
    { title: "The Intouchables", year: 2011 },
    { title: "Modern Times", year: 1936 },
    { title: "Raiders of the Lost Ark", year: 1981 },
    { title: "Rear Window", year: 1954 },
    { title: "The Pianist", year: 2002 },
    { title: "The Departed", year: 2006 },
    { title: "Terminator 2: Judgment Day", year: 1991 },
    { title: "Back to the Future", year: 1985 },
    { title: "Whiplash", year: 2014 },
    { title: "Gladiator", year: 2000 },
    { title: "Memento", year: 2000 },
    { title: "The Prestige", year: 2006 },
    { title: "The Lion King", year: 1994 },
    { title: "Apocalypse Now", year: 1979 },
    { title: "Alien", year: 1979 },
    { title: "Sunset Boulevard", year: 1950 },
    {
      title:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964
    },
    { title: "The Great Dictator", year: 1940 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
    { title: "Grave of the Fireflies", year: 1988 },
    { title: "Paths of Glory", year: 1957 },
    { title: "Django Unchained", year: 2012 },
    { title: "The Shining", year: 1980 },
    { title: "WALL·E", year: 2008 },
    { title: "American Beauty", year: 1999 },
    { title: "The Dark Knight Rises", year: 2012 },
    { title: "Princess Mononoke", year: 1997 },
    { title: "Aliens", year: 1986 },
    { title: "Oldboy", year: 2003 },
    { title: "Once Upon a Time in America", year: 1984 },
    { title: "Witness for the Prosecution", year: 1957 },
    { title: "Das Boot", year: 1981 },
    { title: "Citizen Kane", year: 1941 },
    { title: "North by Northwest", year: 1959 },
    { title: "Vertigo", year: 1958 },
    { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
    { title: "Reservoir Dogs", year: 1992 },
    { title: "Braveheart", year: 1995 },
    { title: "M", year: 1931 },
    { title: "Requiem for a Dream", year: 2000 },
    { title: "Amélie", year: 2001 },
    { title: "A Clockwork Orange", year: 1971 },
    { title: "Like Stars on Earth", year: 2007 },
    { title: "Taxi Driver", year: 1976 },
    { title: "Lawrence of Arabia", year: 1962 },
    { title: "Double Indemnity", year: 1944 },
    { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
    { title: "Amadeus", year: 1984 },
    { title: "To Kill a Mockingbird", year: 1962 },
    { title: "Toy Story 3", year: 2010 },
    { title: "Logan", year: 2017 },
    { title: "Full Metal Jacket", year: 1987 },
    { title: "Dangal", year: 2016 },
    { title: "The Sting", year: 1973 },
    { title: "2001: A Space Odyssey", year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 }
  ])
  const [changedRowId, setChangeRowId] = useState("")
  const [rows, setRows] = useState([{
    car: "car1",
    city: "beijing",
    gender: "female",
    id: 0,
    name: "maggie",
    combox: null
  }, {
    car: "car2",
    city: "dongguan",
    gender: "mele",
    id: 1,
    name: "gongwei",
    combox: null
  }]);
  const [showDialog, setDialogShow] = useState(false)
  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      // console.log(changed)
      changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter(row => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };
  var EditingRow = null
  const handleEditWithDialog = (row) => {
    // console.log(row)
    setDialogShow(true);
  }
  const cellComponent = (props) => {
    const { children, row } = props;
    // console.log(children, row)
    return (
      <TableEditColumn.Cell row={row} {...props} >
        <EditLocationOutlinedIcon onClick={() => handleEditWithDialog(row)} />
        {children}
      </TableEditColumn.Cell>
    )
  }

  const confirm = () => {

  }
  
  const handleChange = (row, option) => {
    console.log("handleChange", option, row);
    rows.splice(rows.find(x => x.id === row.id), 1 , {...row, combox: option})
    setRows(rows);
    setChangeRowId(row.id)
    console.log(rows)
  }
  
  const editCellComponent = (props) => {
    let { row, column, value, editingEnabled, onValueChange } = props
    // console.log(props);
    switch (column.name) {
      case "combox": {
        return (<div>
          <TableEditRow.Cell name={`${column.name}`} {...props} onValueChange={value => console.log(value)}>

            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              value={row.combox}
              onChange={(event, option) => handleChange(row, option)}
              getOptionLabel={option => option.title}
              style={{ width: 300 }}
              renderInput={params => (
                <TextField {...params} label="Combo box" variant="outlined" />
              )}
            />
          </TableEditRow.Cell>

        </div>

        )
      }
      default: return <TableEditRow.Cell name={`${column.name}`} {...props} />;
    }
  }
  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
      >
        <EditingState
          onCommitChanges={commitChanges}
        />
        <Table />
        <TableHeaderRow />
        <TableEditRow cellComponent={editCellComponent} />
        <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
          cellComponent={cellComponent}
        />
      </Grid>
      <Dialog
        name="dialogConfirmation"
        onClose={() => setDialogShow(false)}
        open={showDialog}
      >
        <DialogTitle name='dialog-title'>Edit in Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText name='dialog-text'>
            hahaha
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button name="noButton" onClick={() => setDialogShow(false)} color="primary">no</Button>
          <Button name="yesButton" onClick={confirm} color="secondary">yes</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};
