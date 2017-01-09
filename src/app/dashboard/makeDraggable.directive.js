"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var MakeDraggable = (function () {
    function MakeDraggable(_elementRef) {
        this._elementRef = _elementRef;
    }
    MakeDraggable.prototype.ngOnInit = function () {
        // Get the current element
        var el = this._elementRef.nativeElement;
        // Set the draggable attribute to the element
        el.draggable = 'true';
        /*console.log("start")*/
        // Set up the dragstart event and add the drag-src CSS class 
        // to change the visual appearance. Set the current todo as the data
        // payload by stringifying the object first
        el.addEventListener('dragstart', function (e) {
            jQuery('.story-actors, .story-board').addClass('highlight');
            jQuery('.add-more-actors').attr('src', '/images/dustbin.svg').css({ "border": "none" });
            el.classList.add('drag-src');
            e.dataTransfer.effectAllowed = 'move';
            /*console.log(e.target.id);*/
            e.dataTransfer.setData('text', e.target.id);
        });
        // Remove the drag-src class
        el.addEventListener('dragend', function (e) {
            e.preventDefault();
            jQuery('.story-board, .story-actors').removeClass('highlight');
            jQuery('.add-more-actors').attr('src', '/images/add.svg').css({ "border": "1px dashed #a9a9a9" });
            el.classList.remove('drag-src');
        });
    };
    return MakeDraggable;
}());
__decorate([
    core_1.Input('makeDraggable'),
    __metadata("design:type", Object)
], MakeDraggable.prototype, "data", void 0);
MakeDraggable = __decorate([
    core_1.Directive({
        selector: '[makeDraggable]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], MakeDraggable);
exports.MakeDraggable = MakeDraggable;
//# sourceMappingURL=makeDraggable.directive.js.map