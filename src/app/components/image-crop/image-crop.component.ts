import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CropperCanvas, CropperImage, CropperHandle, CropperSelection, CropperViewer, CropperCrosshair, CropperShade} from 'cropperjs';


@Component({
    selector: 'app-image-crop',
    templateUrl: './image-crop.component.html',
    styleUrls: ['./image-crop.component.css'],
})
export class ImageCropComponent implements OnInit {
    isSelectionActive = false;

    @ViewChild('cropper') cropper;
    @ViewChild('cropperviewer') cropperViewer;
    @ViewChild('cropperselection') cropperSelection;
    @ViewChild('cropperimage') cropperImage;

    constructor(public $element: ElementRef) {
    }

    ngOnInit(): void {
        CropperCanvas.$define();
        CropperImage.$define();
        CropperHandle.$define();
        CropperSelection.$define();
        CropperViewer.$define();
        CropperCrosshair.$define();
        CropperShade.$define();
    }

    onSelectionChange($event) {
        console.log('selection changed', $event);
        this.isSelectionActive = true;
    }

    onToDataUrl() {
        this.cropperSelection.nativeElement.$toCanvas().then(canvas => {
            this.$element.nativeElement.querySelector('#canvas-textarea').value = canvas.toDataURL();
        });
    }

    onZoomIn() {
        this.cropperImage.nativeElement.$zoom(0.25);
    }

    onZoomOut() {
        this.cropperImage.nativeElement.$zoom(-0.25);
    }

    onMove(x, y) {
        this.cropperImage.nativeElement.$move(x, y);
    }

    onCenter() {
        this.cropperImage.nativeElement.$center();
    }

    onRotate(deg) {
        this.cropperImage.nativeElement.$rotate(deg);
    }
}
