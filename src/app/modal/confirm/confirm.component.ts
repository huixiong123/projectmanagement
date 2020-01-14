import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  @Input() data: any;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeWin() {
    this.close.emit();
  }
  confirm() {
    this.close.emit(true);
  }
}
