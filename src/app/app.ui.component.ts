import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: 'app.ui.component.html',
    styleUrls: ['./app.ui.component.css']
})
export class AppUiComponent {
    page = 1;
    name = 'World';
    items = ["1","2","3"];
}
