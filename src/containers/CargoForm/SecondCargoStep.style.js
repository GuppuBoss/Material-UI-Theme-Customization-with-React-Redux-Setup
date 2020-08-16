import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  root: {
    padding:theme.spacing(3)
  },
  formControlLabel:{
    color: theme.palette.color.LIGHT_GREY,
  },
  addIcon:{
    margin: "0px 10px 0px 0px",
  },
  removeIcon:{
    margin: "0px 10px 0px 0px",
  },
  divider:{
    margin:"32px 115px",
    backgroundColor: theme.palette.color.LIGHT_GREY,
    height: 2,
  },
  dangerButton: {
    color: 'white',
    background: theme.palette.error.main,
    "&:hover": {
      color: 'white',
      background: theme.palette.error.main,
    }
  }
}));