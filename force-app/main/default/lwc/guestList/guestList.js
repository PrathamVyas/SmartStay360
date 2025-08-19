import { LightningElement, wire } from 'lwc';
import getGuests from '@salesforce/apex/GuestController.getGuests';

export default class GuestList extends LightningElement {
    guests;
    error;
    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Email', fieldName: 'Email__c' },
        { label: 'Nationality', fieldName: 'Nationality__c' },
    ];

    @wire(getGuests)
    wiredGuests({ error, data }) {
        if (data) {
            this.guests = data;
            this.error = undefined;
        } else if (error) {
            this.error = error.body.message;
            this.guests = undefined;
        }
    }
}