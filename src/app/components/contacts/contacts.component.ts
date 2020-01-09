import { Component, OnInit } from '@angular/core';
import {CaptchaModule} from 'primeng/captcha';
import {MessageService} from 'primeng/api';
import {ButtonModule} from 'primeng/button';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  
})
export class ContactsComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
    

  }

}
export class CaptchaDemo {
    
  constructor(private messageService: MessageService) {}
  
  showResponse(event) {
      this.messageService.add({severity:'info', summary:'Success', detail: 'User Responsed',sticky: true});
  }
}