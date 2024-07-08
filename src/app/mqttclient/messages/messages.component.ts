import { Component } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [InputTextareaModule, FormsModule, MenubarModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  topic = "";

}
