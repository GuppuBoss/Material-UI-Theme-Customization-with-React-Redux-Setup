import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Container,
  Chip,
  Avatar,
  Input,
  TextField,
  Grid,
  Paper,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Divider
} from "@material-ui/core";
import {
  CloudUploadOutlined,
  AddCircleOutlined,
  HighlightOffOutlined,
  ClearOutlined,
  ChevronRight,
  ChevronLeft,
  AddRounded,
  RemoveRounded
} from "@material-ui/icons";
import { useStyles } from "./EditAddressForm.style";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export default function EditAddressForm() {
  const classes = useStyles();
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
              <Typography variant="h6">Edit Addresses</Typography>
            </Grid>
            <Grid item xs={5} className={classes.textRight}>
              <ClearOutlined className={classes.dangerFill} />
            </Grid>
          </Grid>
        </Paper>
        <Grid className={classes.root}>
          <Grid container spacing={4}>
            <Grid item sm={6}>
              <TextField
                className="form-input-region"
                id="region"
                label="Region"
                variant="outlined"
                className={classes.formControl}
              />
            </Grid>
            <Grid item sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="Type">Type</InputLabel>
                <Select labelId="Type" id="Type" label="Type">
                  <MenuItem value={1}>Billing</MenuItem>
                  <MenuItem value={2}>Shipping</MenuItem>
                  <MenuItem value={3}>Cash on Delivery</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="country">Country</InputLabel>
                <Select labelId="country" id="country" label="Country">
                  <MenuItem value={1}>Russia</MenuItem>
                  <MenuItem value={2}>Pakistan</MenuItem>
                  <MenuItem value={3}>Canada</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControlLabel
                className={classes.formControlLabel}
                control={<Checkbox style={{ width: 19, height: 19, marginRight: 4 }} name="checkedB" />}
                label="Use this address as default"
              />
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="city">City</InputLabel>
                <Select labelId="city" id="city" label="City">
                  <MenuItem value={1}>Moscow</MenuItem>
                  <MenuItem value={2}>Islamabad</MenuItem>
                  <MenuItem value={3}>New York</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddRounded />}
              >
                Add Another Address
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item sm={6}>
              <TextField
                className="form-input-street"
                id="street"
                label="Street"
                variant="outlined"
                className={classes.formControl}
              />
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item sm={6}>
              <TextField
                className="form-input-zip-code"
                id="zip-code"
                label="Zip code"
                variant="outlined"
                className={classes.formControl}
              />
            </Grid>
          </Grid>

          <Divider variant="middle" className={classes.divider} />

          <Grid container className={classes.firstCargoContainer} spacing={4}>
            <Grid item sm={6}>
              <TextField
                className="form-input-region"
                id="region"
                label="Region"
                variant="outlined"
                className={classes.formControl}
              />
            </Grid>
            <Grid item sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="Type">Type</InputLabel>
                <Select labelId="Type" id="Type" label="Type">
                  <MenuItem value={1}>Billing</MenuItem>
                  <MenuItem value={2}>Shipping</MenuItem>
                  <MenuItem value={3}>Cash on Delivery</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container className={classes.firstCargoContainer} spacing={4}>
            <Grid item sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="country">Country</InputLabel>
                <Select labelId="country" id="country" label="Country">
                  <MenuItem value={1}>Russia</MenuItem>
                  <MenuItem value={2}>Pakistan</MenuItem>
                  <MenuItem value={3}>Canada</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControlLabel
                className={classes.formControlLabel}
                control={<Checkbox name="checkedB" />}
                label="Use this address as default"
              />
            </Grid>
          </Grid>

          <Grid container className={classes.firstCargoContainer} spacing={4}>
            <Grid item sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="city">City</InputLabel>
                <Select labelId="city" id="city" label="City">
                  <MenuItem value={1}>Moscow</MenuItem>
                  <MenuItem value={2}>Islamabad</MenuItem>
                  <MenuItem value={3}>New York</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <Button
                variant="contained"
                color="default"
                startIcon={<RemoveRounded />}
                className={classes.dangerButton}
              >
                Delete Address
              </Button>
            </Grid>
          </Grid>

          <Grid container className={classes.firstCargoContainer} spacing={4}>
            <Grid item sm={6}>
              <TextField
                className="form-input-street"
                id="street"
                label="Street"
                variant="outlined"
                className={classes.formControl}
              />
            </Grid>
            <Grid item sm={6}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddRounded />}
              >
                Add Another Address
              </Button>
            </Grid>
          </Grid>

          <Grid container className={classes.firstCargoContainer} spacing={4}>
            <Grid item sm={6}>
              <TextField
                className="form-input-zip-code"
                id="zip-code"
                label="Zip code"
                variant="outlined"
                className={classes.formControl}
              />
            </Grid>
            <Grid item sm={6}></Grid>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="baseline"
          justify="space-between"
          className={classes.buttonsContainer}
        >
          <Grid item xs={4}>
            <Button variant="contained" color="secondary" size="medium">
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
