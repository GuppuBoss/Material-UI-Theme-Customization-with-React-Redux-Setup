import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  titlePaper: {
    boxShadow: "0px 1px 2px rgba(120, 120, 133, 0.7), 0px 3px 5px rgba(120, 120, 133, 0.2)"
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: "0px 2px 3px rgba(34, 100, 209, 0.4), 0px 5px 8px rgba(34, 100, 209, 0.2)",
    '& .MuiTypography-h6': {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    '& .MuiStepConnector-root': {
      width: "32px",
      margin: "0 16px",
      border: "2px",
    },
    '& .MuiStepIcon-root.MuiStepIcon-active': {
      color: '#2979FF',
    },
  },
  stepper: {
    marginLeft: 63,
    padding: 0
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  stepsGrid: {
    padding: 13
  },
  dangerFill: {
    fill: theme.palette.error.main,
  },
  buttonsContainer: {
    padding: theme.spacing(0, 3, 3, 3)
  },
  singleStepLabel: {
    "& .MuiStepLabel-label.MuiStepLabel-active": {
      color: theme.palette.color.DARK_GREY,
      fontWeight: 'normal'
    },
    "& .MuiStepLabel-label": {
      color: theme.palette.color.LIGHT_GREY,
      fontWeight: 'normal'
    }
  },
  textRight: {
    textAlign: 'right'
  },
  backButton: {
    marginRight: theme.spacing(2)
  },
  stepsComplete: {
    padding: theme.spacing(3)
  },
  formControl: {
    width: '100%',
  },
  root: {
    padding:theme.spacing(3)
  },
  formControlLabel:{
    color: theme.palette.color.LIGHT_GREY,
    marginLeft: 0
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