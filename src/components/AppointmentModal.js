import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class AppointmentModal extends React.Component {
    render() {
        let modalTime = this.props.selectedAppointment.time ? this.props.selectedAppointment.time : '',
            modalName = this.props.selectedAppointment.name ? this.props.selectedAppointment.name : '',
            modalPhone = this.props.selectedAppointment.phone ? this.props.selectedAppointment.phone : '',
            isEnabled = (modalName !== '' && modalPhone !== '') || (modalName === '' && modalPhone === '');

        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleClose}
                >
                <DialogTitle>Appointment</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {modalTime}
                    </DialogContentText>
                    <TextField
                        value={modalName}
                        onChange={this.props.handleChange}
                        id="name"
                        label="Name"
                        type="text"
                    />
                    <TextField
                        value={modalPhone}
                        onChange={this.props.handleChange}
                        id="phone"
                        label="Phone Number"
                        type="text"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={this.props.handleUpdate} variant="outlined" disabled={!isEnabled}>
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        );
    }
}

export default AppointmentModal;