import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SplitterModule } from 'primeng/splitter';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from "primeng/sidebar";


@NgModule({
    exports: [InputTextModule, ButtonModule, SplitterModule, CheckboxModule, MenubarModule, InputTextareaModule, TabViewModule, DropdownModule, TooltipModule, SidebarModule],

})
export class ImportsModule { }