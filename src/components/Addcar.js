import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddCar = (props) => {

  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
      brand: '', model: '', color: '', fuel: '', year: '', price: ''
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInputChange = (event) => {
    setCar({...car, [event.target.name]: event.target.value})
  }

  const addCar = () => {
      props.saveCar(car);
      handleClose()
  }

    return (
        <div>
          <Button style={{margin: 10 }}variant="outlined" color="primary" onClick={handleClickOpen}>
            Add Car
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Car</DialogTitle>
            <DialogContent>
          
            <TextField
                autoFocus
                margin="dense"
                name="brand"
                value={car.brand}
                label="Brand"
                onChange={e => handleInputChange(e)}
                fullWidth
            />
            <TextField
                margin="dense"
                name="model"
                value={car.model}
                label="Model"
                onChange={e => handleInputChange(e)}
                fullWidth
            />
            <TextField
                margin="dense"
                name="color"
                value={car.color}
                label="Color"
                onChange={e => handleInputChange(e)}
                fullWidth
            />
            <TextField
                margin="dense"
                name="year"
                value={car.year}
                label="Year"
                onChange={e => handleInputChange(e)}
                fullWidth
            />
            <TextField
                margin="dense"
                name="fuel"
                value={car.fuel}
                label="Fuel"
                onChange={e => handleInputChange(e)}
                fullWidth
            />
            <TextField
                margin="dense"
                name="price"
                value={car.price}
                label="Price"
                onChange={e => handleInputChange(e)}
                fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={addCar} color="primary">
                Save
            </Button>
            </DialogActions>
          </Dialog>  
        </div>
    )
}

export default AddCar;