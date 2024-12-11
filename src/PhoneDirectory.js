import React, { Component } from 'react'
import ShowSubscriber from './ShowSubscriber';
import AddSubscriber from './AddSubscriber';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: "Ganesh",
                phone: "9381283038"
            }, {
                id: 2,
                name: "Mahesh",
                phone: "9397803139"
            }]
        }
    }

    deleteScubscriberHandler = (subscriberId) => {
        const newSubscribers = this.state.subscribersList.filter(
            (subscriber) => subscriber.id !== subscriberId
        );
        this.setState({ subscribersList: newSubscribers });
    };
    

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList })
    }

    render() {
        return (
            <Router>
                <div className="main-container">
                    <Routes>
                        <Route  path="/" element={<ShowSubscriber subscribersList={this.state.subscribersList} deleteScubscriberHandler={this.deleteScubscriberHandler} />} />
                        <Route  path="/add" element={<AddSubscriber  addSubscriberHandler={this.addSubscriberHandler} />} />
                    </Routes>
                </div>
            </Router>
        )
    }
} 