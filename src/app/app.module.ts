import { ConfirmComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarItemComponent } from './components/snackbar-item/snackbar-item.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StudentModule } from './students/student.module';

/* Firebase Imports*/
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionStartComponent } from './questions/question-start/question-start.component';
import { QuestionEditComponent } from './questions/question-edit/question-edit.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    LoginComponent,
    QuestionsComponent,
    QuestionStartComponent,
    QuestionEditComponent,
    QuestionDetailComponent,
    QuestionListComponent,
    QuestionItemComponent,
    SnackbarItemComponent,
    PagenotfoundComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    StudentModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]

})
export class AppModule {

}
