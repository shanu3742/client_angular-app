import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AboutCardComponent } from "../about-card/about-card.component";
import { AboutComponent } from "./about.component";


@NgModule({

    imports: [
        CommonModule,
        FormsModule


    ],
    declarations: [
        AboutComponent,
        AboutCardComponent

    ]

})

export class aboutModule { }
