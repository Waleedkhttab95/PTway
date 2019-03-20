import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideComponent } from './side.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SideComponent ],
    exports: [ SideComponent ]
})

export class SideModule {}
