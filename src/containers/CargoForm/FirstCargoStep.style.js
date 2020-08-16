import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  addButton: {
    padding: 6,
    color: "#2979FF",
  },
  dangerButton: {
    color: theme.palette.error.main,
    padding: 6,
  },
  root: {
    padding: "24px",
  },
  selectOptions: {
    fontSize: 16,
    color: "#333333",
    "& .Mui-selected": {
      background: "#EBF2FF"
    },
    "&:hover": {
      background: "#EBF2FF"
    }
  },
  customListItem: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center'
  },
  mr5: {
    marginRight: 5
  }
}));
