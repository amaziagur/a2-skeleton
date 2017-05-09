import {Component, OnInit} from '@angular/core';
import {GreetService} from "./GreetService";

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>`,
    providers : [GreetService]
})
export class AppComponent implements OnInit {
    private name : string ;

    constructor (private greetService : GreetService) {}

    ngOnInit() : void {
        this.greetService.greet().subscribe(
            data => this.name = data
        )
    }

}
