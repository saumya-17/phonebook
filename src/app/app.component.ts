import { Component } from '@angular/core';
import contactdata from '../_JSONdata/contactdata.json';

interface Contact{
  firstname: String;
  lastname: String;
  mobile_no: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phonebook';
  index : any;
  
  contact: Contact[] = contactdata;

}
