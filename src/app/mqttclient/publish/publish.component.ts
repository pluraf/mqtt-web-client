import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-publish',
  standalone: true,
  imports: [FormsModule, InputTextareaModule, ButtonModule, TabViewModule, CommonModule, RouterModule],
  templateUrl: './publish.component.html',
  styleUrl: './publish.component.css'
})
export class PublishComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  topic = ""

  activeIndex: number = 0;

  scrollableTabs: any[] = Array.from({ length: 3 }, (_, i) => ({ title: `Tab ${i + 1}`, content: "Content" }));
  addPublisher() {
    this.router.navigateByUrl('edit-publisher');
  }
}
