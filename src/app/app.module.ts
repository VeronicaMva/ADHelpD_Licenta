import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { BoardComponent } from "./components/board/board.component";
import { CardComponent } from "./components/card/card.component";
import { ListComponent } from "./components/list/list.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MeetingsTabComponent } from "./components/tabs/meetings/meetings.tab.component";
import { PaymentsTabComponent } from "./components/tabs/payments/payments.tab.component";
import { ToDoTabComponent } from "./components/tabs/to-do/to-do.tab.component";
import { BreakComponent } from "./pages/break/break.component";
import { HomeComponent } from "./pages/home/home.component";
import { OrganizeComponent } from "./pages/organize/organize.component";
import { CardService } from "./services/card.service";
import { CardRxjsStore } from "./store/card.store";
import { MonthStore } from "./store/month.store";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { CheckNullPipe } from "./pipes/checkNull.pipe";
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BreakComponent,
    OrganizeComponent,
    HomeComponent,
    ToDoTabComponent,
    MeetingsTabComponent,
    PaymentsTabComponent,
    ListComponent,
    CardComponent,
    BoardComponent,
    CheckNullPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    MatRadioModule
  ],
  providers: [CardRxjsStore, CardService, MonthStore],
  bootstrap: [AppComponent]
})
export class AppModule { }


