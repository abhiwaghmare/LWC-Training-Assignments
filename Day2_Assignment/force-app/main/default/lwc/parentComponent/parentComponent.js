import { LightningElement,track } from 'lwc';
import ChildComponent from 'c/childComponent';


export default class ParentComponent extends LightningElement {
    @track showChild = false;

    @track mydata = [
        {
            "Name": "John",
            "Age": "10",
        }, {
            "Name": "Jane",
            "Age": "15",
        }, {
            "Name": "Jacob",
            "Age": "17",
        }
    ]

    toggleChild(){
        this.showChild = !this.showChild;
    }

    handleChildComponentRemove(){
        this.showChild = false;
    }

    handleUpdate(event){
       console.log(event.detail.newage);
        this.mydata[0].Age = event.detail.newage;
    }
}