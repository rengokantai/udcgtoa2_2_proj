/**
 * Created by Hernan Y.Ke on 2016/2/16.
 */
import {Component,OnInit} from 'angular2/core';

@Component({
    selector: 'y-figure',
    template:`<section class="setup">
    name?<input type="text" #name (keyup)="0">
    </section>
    <section [ngClass]="{figure:true,solved:one.value==oneNumber&&two.value==twoNumber&&three.value==threeNumber&&four.value==fourNumber}"  [ngStyle]= "{display: name.value===''?'none':'block'}">
    <h2>type figure</h2>
    <p>welcome.</p><span class="name">{{name.value}}</span>
    {{one.value==oneNumber&&two.value==twoNumber&&three.value==threeNumber&&four.value==fourNumber ? 'Done!':'not done'}}
    <br>
    first
    <input type="text" #one (keyup)="0">
    second
    <input type="text" #two (keyup)="0">
    third
    <input type="text" #three (keyup)="0">
    fourth
    <input type="text" #four (keyup)="0">
       </section>
       <h2 [hidden]="one.value!=oneNumber||two.value!=twoNumber||three.value!=threeNumber||four.value!=fourNumber">DONE</h2>
    `
})

export class Figure implements OnInit{
    oneNumber :number;
    twoNumber :number;
    threeNumber :number;
    fourNumber :number;
    ngOnInit(){
        this.oneNumber=1;
        this.twoNumber=1;
        this.threeNumber=1;
        this.fourNumber=2;
    }

}