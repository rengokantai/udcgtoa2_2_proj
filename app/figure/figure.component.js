System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Figure;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Figure = (function () {
                function Figure() {
                }
                Figure.prototype.ngOnInit = function () {
                    this.oneNumber = 1;
                    this.twoNumber = 1;
                    this.threeNumber = 1;
                    this.fourNumber = 2;
                };
                Figure = __decorate([
                    core_1.Component({
                        selector: 'y-figure',
                        template: "<section class=\"setup\">\n    name?<input type=\"text\" #name (keyup)=\"0\">\n    </section>\n    <section [ngClass]=\"{figure:true,solved:one.value==oneNumber&&two.value==twoNumber&&three.value==threeNumber&&four.value==fourNumber}\"  [ngStyle]= \"{display: name.value===''?'none':'block'}\">\n    <h2>type figure</h2>\n    <p>welcome.</p><span class=\"name\">{{name.value}}</span>\n    {{one.value==oneNumber&&two.value==twoNumber&&three.value==threeNumber&&four.value==fourNumber ? 'Done!':'not done'}}\n    <br>\n    first\n    <input type=\"text\" #one (keyup)=\"0\">\n    second\n    <input type=\"text\" #two (keyup)=\"0\">\n    third\n    <input type=\"text\" #three (keyup)=\"0\">\n    fourth\n    <input type=\"text\" #four (keyup)=\"0\">\n       </section>\n       <h2 [hidden]=\"one.value!=oneNumber||two.value!=twoNumber||three.value!=threeNumber||four.value!=fourNumber\">DONE</h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Figure);
                return Figure;
            })();
            exports_1("Figure", Figure);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZ3VyZS9maWd1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkZpZ3VyZSIsIkZpZ3VyZS5jb25zdHJ1Y3RvciIsIkZpZ3VyZS5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUFBO2dCQW1DQUMsQ0FBQ0E7Z0JBUEdELHlCQUFRQSxHQUFSQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2pCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFDQSxDQUFDQSxDQUFDQTtvQkFDakJBLElBQUlBLENBQUNBLFdBQVdBLEdBQUNBLENBQUNBLENBQUNBO29CQUNuQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxDQUFDQTtnQkFqQ0xGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFVBQVVBO3dCQUNwQkEsUUFBUUEsRUFBQ0EsdzRCQWtCUkE7cUJBQ0pBLENBQUNBOzsyQkFjREE7Z0JBQURBLGFBQUNBO1lBQURBLENBbkNBLEFBbUNDQSxJQUFBO1lBbkNELDJCQW1DQyxDQUFBIiwiZmlsZSI6ImZpZ3VyZS9maWd1cmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzE2LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd5LWZpZ3VyZScsXHJcbiAgICB0ZW1wbGF0ZTpgPHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxyXG4gICAgbmFtZT88aW5wdXQgdHlwZT1cInRleHRcIiAjbmFtZSAoa2V5dXApPVwiMFwiPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gW25nQ2xhc3NdPVwie2ZpZ3VyZTp0cnVlLHNvbHZlZDpvbmUudmFsdWU9PW9uZU51bWJlciYmdHdvLnZhbHVlPT10d29OdW1iZXImJnRocmVlLnZhbHVlPT10aHJlZU51bWJlciYmZm91ci52YWx1ZT09Zm91ck51bWJlcn1cIiAgW25nU3R5bGVdPSBcIntkaXNwbGF5OiBuYW1lLnZhbHVlPT09Jyc/J25vbmUnOidibG9jayd9XCI+XHJcbiAgICA8aDI+dHlwZSBmaWd1cmU8L2gyPlxyXG4gICAgPHA+d2VsY29tZS48L3A+PHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+XHJcbiAgICB7e29uZS52YWx1ZT09b25lTnVtYmVyJiZ0d28udmFsdWU9PXR3b051bWJlciYmdGhyZWUudmFsdWU9PXRocmVlTnVtYmVyJiZmb3VyLnZhbHVlPT1mb3VyTnVtYmVyID8gJ0RvbmUhJzonbm90IGRvbmUnfX1cclxuICAgIDxicj5cclxuICAgIGZpcnN0XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjb25lIChrZXl1cCk9XCIwXCI+XHJcbiAgICBzZWNvbmRcclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICN0d28gKGtleXVwKT1cIjBcIj5cclxuICAgIHRoaXJkXHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjdGhyZWUgKGtleXVwKT1cIjBcIj5cclxuICAgIGZvdXJ0aFxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2ZvdXIgKGtleXVwKT1cIjBcIj5cclxuICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgIDxoMiBbaGlkZGVuXT1cIm9uZS52YWx1ZSE9b25lTnVtYmVyfHx0d28udmFsdWUhPXR3b051bWJlcnx8dGhyZWUudmFsdWUhPXRocmVlTnVtYmVyfHxmb3VyLnZhbHVlIT1mb3VyTnVtYmVyXCI+RE9ORTwvaDI+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlndXJlIGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgb25lTnVtYmVyIDpudW1iZXI7XHJcbiAgICB0d29OdW1iZXIgOm51bWJlcjtcclxuICAgIHRocmVlTnVtYmVyIDpudW1iZXI7XHJcbiAgICBmb3VyTnVtYmVyIDpudW1iZXI7XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMub25lTnVtYmVyPTE7XHJcbiAgICAgICAgdGhpcy50d29OdW1iZXI9MTtcclxuICAgICAgICB0aGlzLnRocmVlTnVtYmVyPTE7XHJcbiAgICAgICAgdGhpcy5mb3VyTnVtYmVyPTI7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
