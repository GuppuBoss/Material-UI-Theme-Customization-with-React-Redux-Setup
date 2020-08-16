import React from "react";
import Grid from "@material-ui/core/Grid";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Chip,
  Input,
  Avatar,
} from "@material-ui/core";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import MenFace from "../../images/men-face.png";
import UsIcon from "../../images/us-flag.svg";
import RussiaIcon from "../../images/russia-flag.svg";
import { useStyles } from "./FirstEditCargoStep.style";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function FirstEditCargoStep() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <Grid container className={classes.firstCargoContainer} spacing={4}>
          <Grid item sm={5}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="organization">Organization</InputLabel>
              <Select
                labelId="organization"
                id="organization"
                label="Organization"
              >
                <MenuItem value={1} className={classes.selectOptions}>
                  OAO Baltic Sea
                </MenuItem>
                <MenuItem value={2} className={classes.selectOptions}>
                  OAO Baltic Sea
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={7} className={classes.gridItem2}>
            <Grid container spacing={2}>
              <Grid item sm={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="type">Type</InputLabel>
                  <Select labelId="type" id="type" label="Type">
                    <MenuItem value={1}>Order</MenuItem>
                    <MenuItem value={2}>Work</MenuItem>
                    <MenuItem value={3}>Home</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={9}>
                <Grid
                  container
                  wrap="nowrap"
                  alignItems="flex-start"
                  justify="space-between"
                >
                  <TextField
                    className="form-input-phone"
                    required
                    id="phone"
                    label="Phone"
                    variant="outlined"
                    className={classes.formControl}
                  />
                  <IconButton className={classes.addButton}>
                    <AddCircleIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.firstCargoContainer} spacing={4}>
          <Grid item sm={5}>
            <Grid
              container
              wrap="nowrap"
              alignItems="flex-start"
              justify="space-between"
            >
              <TextField
                className="form-input-name"
                id="name"
                label="Name"
                variant="outlined"
                className={classes.formControl}
              />
            </Grid>
          </Grid>
          <Grid item sm={7} className={classes.gridItem2}>
            <Grid container spacing={2}>
              <Grid item sm={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="type">Type</InputLabel>
                  <Select labelId="type" id="type" label="Types">
                    <MenuItem value={1}>Order</MenuItem>
                    <MenuItem value={2}>Work</MenuItem>
                    <MenuItem value={3}>Home</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={9}>
                <Grid
                  container
                  wrap="nowrap"
                  alignItems="flex-start"
                  justify="space-between"
                >
                  <TextField
                    className="form-input-reserve-email"
                    required
                    id="contact-reserve-email"
                    label="Reserve E-mail"
                    variant="outlined"
                    className={classes.formControl}
                  />
                  <IconButton className={classes.dangerButton}>
                    <RemoveCircleIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.firstCargoContainer} spacing={4}>
          <Grid item sm={5}>
            <Grid
              container
              wrap="nowrap"
              alignItems="flex-start"
              justify="space-between"
            >
              <TextField
                className="form-input-display-name"
                id="display-name"
                label="Display Name"
                variant="outlined"
                className={classes.formControl}
              />
            </Grid>
          </Grid>
          <Grid item sm={7} className={classes.gridItem2}>
            <Grid container spacing={2}>
              <Grid item sm={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="type">Type</InputLabel>
                  <Select labelId="type" id="type" label="Types">
                    <MenuItem value={1}>Order</MenuItem>
                    <MenuItem value={2}>Work</MenuItem>
                    <MenuItem value={3}>Home</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={9}>
                <Grid
                  container
                  wrap="nowrap"
                  alignItems="flex-start"
                  justify="space-between"
                >
                  <TextField
                    className="form-input-reserve-email"
                    required
                    id="contact-reserve-email"
                    label="Reserve E-mail"
                    variant="outlined"
                    className={classes.formControl}
                  />
                  <IconButton className={classes.addButton}>
                    <AddCircleIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.firstCargoContainer} spacing={4}>
          <Grid item sm={5}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label">
                Account Manager
              </InputLabel>
              <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <div className={classes.allChips}>
                    {selected.map((value) => (
                      <Chip
                        avatar={<Avatar alt="Natacha" src={MenFace} />}
                        label={value}
                        value={value}
                        onDelete={handleDelete}
                        className={classes.singleChip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={7}>
            <Grid container spacing={2}>
              <Grid item sm={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="type">Type</InputLabel>
                  <Select labelId="type" id="type" label="Types">
                    <MenuItem value={1}>Order</MenuItem>
                    <MenuItem value={2}>Work</MenuItem>
                    <MenuItem value={3}>Home</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="country">Country</InputLabel>
                  <Select labelId="country" id="country" label="Country">
                    <MenuItem value={1}>
                      <span className={classes.customListItem}>
                        <img
                          className={classes.mr5}
                          src={RussiaIcon}
                          alt="country icon"
                        />
                        <span> +7</span>
                      </span>
                    </MenuItem>
                    <MenuItem value={2}>
                      <span className={classes.customListItem}>
                        <img
                          className={classes.mr5}
                          src={UsIcon}
                          alt="country icon"
                        />
                        <span> +5</span>
                      </span>
                    </MenuItem>
                    <MenuItem value={3}>
                      <span className={classes.customListItem}>
                        <img
                          className={classes.mr5}
                          src={RussiaIcon}
                          alt="country icon"
                        />
                        <span> +5</span>
                      </span>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={6}>
                <Grid
                  container
                  wrap="nowrap"
                  alignItems="flex-start"
                  justify="space-between"
                >
                  <TextField
                    className="form-input-phone"
                    required
                    id="cphone"
                    label="Phone"
                    variant="outlined"
                    className={classes.formControl}
                  />
                  <IconButton className={classes.addButton}>
                    <AddCircleIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.firstCargoContainer} spacing={4}>
          <Grid item sm={5}></Grid>
          <Grid item sm={7}>
            <Grid container spacing={2}>
              <Grid item sm={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="type">Type</InputLabel>
                  <Select labelId="type" id="type" label="Types">
                    <MenuItem value={1}>Order</MenuItem>
                    <MenuItem value={2}>Work</MenuItem>
                    <MenuItem value={3}>Home</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="country">Country</InputLabel>
                  <Select labelId="country" id="country" label="Country">
                    <MenuItem value={1}>Order</MenuItem>
                    <MenuItem value={2}>Work</MenuItem>
                    <MenuItem value={3}>Home</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={6}>
                <Grid
                  container
                  wrap="nowrap"
                  alignItems="flex-start"
                  justify="space-between"
                >
                  <TextField
                    className="form-input-whats-app"
                    required
                    id="whats-app"
                    label="WhatsApp"
                    variant="outlined"
                    className={classes.formControl}
                  />
                  <IconButton className={classes.addButton}>
                    <AddCircleIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.firstCargoContainer} spacing={4}>
          <Grid item sm={5}></Grid>
          <Grid item sm={7}>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Grid
                  container
                  wrap="nowrap"
                  alignItems="flex-start"
                  justify="space-between"
                >
                  <TextField
                    className="form-input-skype"
                    id="skype"
                    label="Skype"
                    variant="outlined"
                    className={classes.formControl}
                  />
                  <IconButton className={classes.addButton}>
                    <AddCircleIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.firstCargoContainer} spacing={4}>
          <Grid item sm={5}></Grid>
          <Grid item sm={7}>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Grid
                  container
                  wrap="nowrap"
                  alignItems="flex-start"
                  justify="space-between"
                >
                  <TextField
                    className="form-input-website"
                    id="website"
                    label="Website if exist"
                    variant="outlined"
                    className={classes.formControl}
                  />
                  <IconButton className={classes.addButton}>
                    <AddCircleIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
