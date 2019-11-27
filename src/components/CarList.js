import React, { Component } from 'react';
import ReactTable from 'react-table';
import'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import AddCar from './AddCar';
import Snackbar from '@material-ui/core/Snackbar';
import EditCar from './EditCar';

class CarList extends Component {
    constructor(props) {
        super(props);
        this.state = { customers: [], message: "" };
    }
    //To fetch the cars
     componentDidMount() {
        this.loadCars();
    }

    loadCars = () => {
        fetch("https://customerrest.herokuapp.com/api/customers")
        .then(response => response.json())
        .then(jsondata => this.setState({ customers: jsondata._embedded.content }))
        .catch(err => console.error(err));
    };


      deleteCar = carLink => {
        fetch(carLink.original._links.self.href, { method: "DELETE" })
        .then(this.loadCars())
  
        .catch(err => console.error(err));
      console.log(carLink.original._links.self.href);
    };

  
      updateCar = (link, updatedCar) => {
        fetch(link, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(updatedCar)
        })
          .then(res => this.loadCars())
          .then(res => this.setState({ open: true, message: "Updated new car" }))
          .catch(err => console.error(err));
      };


 saveCar = car => {
    fetch("https://customerrest.herokuapp.com/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(car)
    })
      .then(res => this.loadCars())
      .then(res => this.setState({ open: true, message: "Added new  customer" }))
      .catch(err => console.error(err));
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const columns = [
      { Header: "Firstname", accessor: "firstname" },
      { Header: "Lastname", accessor: "lastname" },
      { Header: "Streetaddress", accessor: "streetaddress" },
      { Header: "Postcode", accessor: "postcode" },
      { Header: "City", accessor: "city" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },

      {
        Header: "",
        accessor: "_links.self.href",
        filterable: "false",
        sortable: "false",
        width: 100,
        Cell: ({ value, row }) => (
            <EditCar updateCar={this.updateCar} link={value} car={row} />
          )
        },
        {
          Header: "",
          accessor: "_links.self.href",
          filterable: "false",
          sortable: "false",
          width: 100,
          Cell: value => (
            <Button color="secondary" onClick={() => this.deleteCar(value)}>
              Delete
            </Button>
          )
        }
      ];
      return (
        <div>
          <AddCar saveCar={this.saveCar} />
          <ReactTable
            data={this.state.cars}
            columns={columns}
            filterable={true}
          />
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={this.state.open}
            autoHideDuration={3000}
            onClose={this.handleClose}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message="Customer added successfully"
            message={this.state.message}
          />
        </div>
      );
    }
  }

export default CarList;
