import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Study } from '../../../../../shared/models/study.model';
import { dateValidator } from '../../../../../shared/directives/date-validator.directive';

@Component({
  selector: 'app-university-degree-form',
  templateUrl: './university-degree-form.component.html'
})
export class UniversityDegreeComponent implements OnInit, OnChanges {
  @Output() onSave: EventEmitter<Study> = new EventEmitter();
  @Input() study: Study = {} as Study;
  public rForm: FormGroup;
  submitted = false;
  constructor() {}
  ngOnInit() {
    this.loadSelectProperties();
  }
  ngOnChanges(changes: SimpleChanges) {
    let study = {} as Study;
    if (this.hasChangeStudy(changes.study)) {
      study = changes.study.currentValue;
    }
    this.loadFormInstance(study);
  }
  private hasChangeStudy(study) {
    return study && study.currentValue;
  }

  public loadSelectProperties(): void {}

  public loadFormInstance(study: Study): void {
    this.rForm = new FormGroup({
      institution: new FormControl(study.institution, [Validators.required]),
      title: new FormControl(study.title, [Validators.required]),
      date: new FormControl(study.date, [Validators.required, dateValidator()]),
      bilingue: new FormControl(study.bilingue, [])
    });
  }

  public submit() {
    this.submitted = true;
    this.onSave.emit({ ...this.study, ...this.rForm.value });
  }

  public save() {
    const study: Study = {
      certificate: false,
      ...this.rForm.value
    };
    this.onSave.emit(study);
  }
}
