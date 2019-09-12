import React from 'react';
import '../App.css';

class Appointment extends React.Component {
    render() {
        let active = this.props.available ? 'active' : 'unavailable';

        return (
            <div className={active}>
                    <div className="appointmentWrapper">
                        <span>{this.props.time}</span>
                    </div>
            </div>
        );
    }
}

export default Appointment;
