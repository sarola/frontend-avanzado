import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import {MatTableDataSource} from '@angular/material';
import {Study} from '../../../shared/models/study.model';
import {Store} from '@ngrx/store';
import {AppStore} from '../../../shared/states/store.interface';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent {
  @Input() user: User;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDeleteStudy: EventEmitter<User> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDeleteLanguage: EventEmitter<User> = new EventEmitter();
  dataSource: MatTableDataSource<Study>;
  studies: Study[];
  displayedColumns = ['grade', 'level', 'title', 'institution' , 'date', 'certificate', 'bilingue' , 'dual', 'edit', 'delete'];
  displayedColumnsLanguages = ['level', 'language', 'date', 'edit', 'delete' ];
  constructor(private store$: Store<AppStore>) {

   // this.dataSource =  new MatTableDataSource(this.studies);
   //  const user$ = this.store$.select(getProfile);
   //  user$.subscribe(us => {
   //    this.studies = us.studies;
   //    this.dataSource = new MatTableDataSource(this.studies);
   //    console.log(us);
   //  });
  }

  deleteStudy(studyID: number) {
    const studies = [...this.user.studies];
    const index = studies.findIndex(study => study.uid === studyID);
    if (index === -1) {
      alert('Error: Study not found');
      return;
    }
    studies.splice(index, 1);
    const user = {
      ...this.user,
      studies
    };
    this.onDeleteStudy.emit(user);
  }
  deleteLanguage(languageID: any) {
    const languages = [...this.user.languages];
    const index = languages.findIndex(language => language.uid === languageID);
    if (index === -1) {
      alert('Error: Language not found');
      return;
    }
    languages.splice(index, 1);
    const user = {
      ...this.user,
      languages
    };
    this.onDeleteLanguage.emit(user);
  }
}
