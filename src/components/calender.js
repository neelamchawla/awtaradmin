import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myEvents: []
        };
        
        mobiscroll.util.getJson('https://trial.mobiscroll.com/events/', (events) => {
            this.setState({ myEvents: events });
        }, 'jsonp');
    }
    render() {
        return (
            <mobiscroll.Eventcalendar
                theme="ios" 
                themeVariant="light"
                display="inline"
                calendarHeight={513}
                view={{
                    calendar: {
                        labels: true,
                        popover: true
                    }
                }}
                data={this.state.myEvents}
            />
        );
    }    
}
