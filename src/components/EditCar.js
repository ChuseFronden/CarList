import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from '@material-ui/core/DialogTitle';

class EditCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      streetaddress: "",
      postcode: "",
      city: "",
      email: "",
      phone: ""
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true 
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };


  updateCar = () => {
    const newCar = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      streetaddress: this.state.streetaddress,
      postcode: this.state.postcode,
      city: this.state.city,
      email: this.state.email,
      phone: this.state.phone
    };

    this.props.updateCar(this.props.link, newCar);
    this.handleClose();
  };


  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
     <DialogTitle id="form-dialog-title">Edit Customer</DialogTitle>
          <DialogContent>
          <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="firstname"
              label="Firstname"
              value={this.state.firstname}
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="lastname"
              label="Lastname"
              value={this.state.lastname}
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="streetaddress"
              label="Address"
              value={this.state.streetaddress}
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="postcode"
              label="Postcode"
              type="number"
              value={this.state.postcode}
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="city"
              label="City"
              value={this.state.city}
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="email"
              label="Email"
              value={this.state.email}
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="phone"
              label="Phone number"
              type="number"
              value={this.state.phone}
              fullWidth

            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.updateCar} color="primary">
              Save
            </Button>
          </DialogActions>
    </Dialog>
    <Button onClick={this.handleClickOpen} color="primary">
          EDIT
        </Button>
      </div>
    );
  }
}

export default EditCar;