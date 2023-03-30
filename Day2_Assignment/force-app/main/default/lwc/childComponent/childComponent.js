import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api mydata;
    @api updatedata;
    handleUpdate(){
        const updatedata = new CustomEvent('updatedata',{
            detail:{
                newage: "20"
            }
        })
        this.dispatchEvent(updatedata);
        console.log("button clicked child");
    }
};