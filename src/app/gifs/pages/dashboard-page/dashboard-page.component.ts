import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [
    RouterModule,
    SideMenuComponent
],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent { }
