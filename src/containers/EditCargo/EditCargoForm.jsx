import React from "react";
import {
  Paper,
  IconButton,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import {
  CloudUploadOutlined,
  ClearOutlined,
  ChevronRight,
  ChevronLeft,
  Save,
} from "@material-ui/icons";
import clsx from "clsx";

import FirstCargoStep from "./FirstEditCargoStep";
import SecondCargoStep from "./SecondEditCargoStep";
import { useStyles, AntSwitch } from "./EditCargoForm.styles";
import ExcelIcon from "../../images/xls.svg";
const steps = ["Cargo info", "Address"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FirstCargoStep />;
    case 1:
      return <SecondCargoStep />;
    default:
      throw new Error("Unknown step");
  }
}

export default function EditCargoForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const [state, setState] = React.useState({
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container maxWidth="md">
      <Paper className={classes.paper} elevation={3}>
        <Paper className={classes.titlePaper} elevation={3}>
          <Grid
            container
            wrap="nowrap"
            alignItems="center"
            justify="space-between"
            className={classes.stepsGrid}
          >
            <Grid item xs={7}>
              <div className={classes.logo}>
                <CloudUploadOutlined />
                <Typography variant="h6">Edit Cargo</Typography>
                <Save />
              </div>
            </Grid>
            <Grid item xs={5}>
              <Grid
                container
                wrap="nowrap"
                alignItems="center"
                justify="flex-end"
              >
                <FormControl
                  variant="outlined"
                  className={clsx(classes.formControlStatus, classes.mr20)}
                >
                  <InputLabel id="Status">Status</InputLabel>
                  <Select labelId="Status" id="Status" label="Status">
                    <MenuItem value={1} className={classes.selectOptions}>
                      Approved
                    </MenuItem>
                    <MenuItem value={2} className={classes.selectOptions}>
                      Rejected
                    </MenuItem>
                  </Select>
                </FormControl>
                <AntSwitch
                  checked={state.checkedC}
                  name="checkedC"
                  onChange={handleChange}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  className={classes.ml8}
                >
                  <img src={ExcelIcon} />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  className={classes.mlMinus6}
                >
                  <ClearOutlined className={classes.dangerFill} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        {getStepContent(activeStep)}
        <Grid
          container
          alignItems="center"
          justify="center"
          spacing={2}
          className={classes.btnContainer}
        >
          <Grid item>
            <Button variant="contained" color="primary" size="medium">
              Addresses
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="medium">
              Clients
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="medium">
              Fights
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="baseline"
          justify="space-between"
          className={classes.buttonsContainer}
        >
          <Grid item xs={4}>
            <Button
              onClick={handleBack}
              variant="contained"
              color="secondary"
              size="medium"
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.textRight}>
            <Button variant="contained" color="primary" size="medium">
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
