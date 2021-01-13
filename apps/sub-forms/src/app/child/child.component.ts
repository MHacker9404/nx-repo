import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'prb-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  childForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.childForm = this.fb.group({
      email: null,
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.childForm);
  }
}
