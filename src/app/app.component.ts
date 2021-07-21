import { Component } from '@angular/core';
import { NgModel } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { Contacts } from "./ContactDetails";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor()
  { }

  title = 'phonebook';
  public hasValue: boolean = false;
  public firstName:any
  public lastName:any
  public phoneNumber:any
  public searchResult!: string;
  public searchField:any
  public deleteResult!: string;
  public deleteField:any
  public updateResult!: string;
  public updateField:any
  public updateValue:any
  public contactDetails:any[]=[]
  public hasContact: boolean = false;
  public result!: string;

  click()
  {
    var contact= new Contacts(this.firstName, this.lastName, this.phoneNumber);

    var prev:number
    var next:number
    prev=this.contactDetails.length
    next=this.contactDetails.push(contact)
    if(next>prev)
    {
       this.result="The contact has been added successfully!"
       this.hasValue=true
    }
    else
    {
      this.result="The operation has been failed!"
    }


  }

  search()
  {

    var index=this.contactDetails.findIndex(obj=>


      obj.lastName==this.searchField);
    if(index>-1)
    {

         this.searchResult="The contact that you've searched is "+this.contactDetails[index].firstName+" and the phone number is "+this.contactDetails[index].phoneNumber+"!"
    }
  }

  delete()
  {
    var index=this.contactDetails.findIndex(obj=>obj.lastName===this.deleteField);


    if(index>-1)
    {
      this.contactDetails[index]=null
      this.deleteResult="The contact has been deleted successfully!"
    }
    else
    {
      this.deleteResult="there is no contact with this name"
    }

  }

  update()
  {
    var index=this.contactDetails.findIndex(obj=>obj.firstName===this.updateField);
    this.contactDetails[index].phoneNumber=this.updateValue;
    if(this.contactDetails[index].phoneNumber==this.updateValue)
    {
      this.updateResult="The contact has been updated successfully!"
    }
    else
    {
      this.updateResult="The operation has been failed!"
    }

  }



  ngOnInit(): void {
  }


}




