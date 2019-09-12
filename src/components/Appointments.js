import React from 'react';
import Appointment from './Appointment'
import AppointmentModal from './AppointmentModal';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/actions';
import '../App.css';

class Appointments extends React.Component {
	openModal = (appointment) => {
		this.props.action.toggleDialog();
		this.props.action.selectAppointment(appointment);
	}
	
	closeModal = () => {
		this.props.action.toggleDialog();
	}

    handleChange = (e) => {
		let newSelectedAppointment = {
			...this.props.selectedAppointment,
			[e.target.id]: e.target.value
		};
		this.props.action.updateForm(newSelectedAppointment);
    }

	handleUpdate = () => {
		let updatedAppointment;
		if (this.props.selectedAppointment.name !== '' || this.props.selectedAppointment.phone !== '') {
			updatedAppointment = {
	            ...this.props.selectedAppointment,
		    	available: false
			};
		} else {
			updatedAppointment = {
		    	...this.props.selectedAppointment,
		    	available: true
			};
		};

		let newAppointmentDataArray = this.props.appointmentData.map(appointment => {
			if (appointment.time === this.props.selectedAppointment.time) {
		    	return updatedAppointment;
			} else {
		    	return appointment;
			};
		});

		this.props.action.updateAppointment(newAppointmentDataArray);
		this.props.action.toggleDialog();
	};

	render() {
		let appointmentsArray = this.props.appointmentData.map(appointment => {
			return (
				<div onClick={() => this.openModal(appointment)} key={appointment.time}>
					<Appointment 
						time={appointment.time} 
						name={appointment.name} 
						phone={appointment.phone}
						available={appointment.available} 
					/>
				</div>
			)
		});

		return (
			<div className="appointmentsWrapper">
				<div>
					{appointmentsArray}
				</div>
				<AppointmentModal
					open={this.props.open}
					handleClose={this.closeModal}
					selectedAppointment={this.props.selectedAppointment}
					handleChange={this.handleChange}
					handleUpdate={this.handleUpdate}
				>
				</AppointmentModal>
			</div>
		);
	};
};

const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

const mapStateToProps = (state) => ({
	appointmentData: state.appointmentData,
	open: state.open,
	selectedAppointment: state.selectedAppointment
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
