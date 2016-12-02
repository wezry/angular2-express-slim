import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`h1 {
	color: white;
	background: darkgray;
	padding: 20px;
}
`],
    templateUrl: 'app.component.html',
})
export class AppComponent {
    name: string = "Angular 2 on Express";

    constructor() {}
}
