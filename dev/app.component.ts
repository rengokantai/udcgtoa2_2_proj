import {Component} from 'angular2/core';
import {Figure} from './figure/figure.component';

@Component({
    selector: 'my-app',
    template: `start <y-figure></y-figure>`,
    directives:[Figure]
})
export class AppComponent {

}