import {
    TOGGLE_DIALOG,
    SELECT_APPOINTMENT,
    UPDATE_APPOINTMENT,
    UPDATE_FORM
} from './actionTypes';

export const updateAppointment = (appointmentData) => ({
    type: UPDATE_APPOINTMENT,
    payload : {
        appointmentData
    },
    appointmentData
});

export const updateForm = (appointment) => ({
    type: UPDATE_FORM,
    payload: {
        time: appointment.time,
        name: appointment.name,
        phone: appointment.phone,
        available: appointment.available,
    }
});

export const selectAppointment = appointment => ({
    type: SELECT_APPOINTMENT,
    payload: {
        time: appointment.time,
        name: appointment.name,
        phone: appointment.phone,
        available: appointment.available,
    }
});

export const toggleDialog = () => ({
    type: TOGGLE_DIALOG,
});
