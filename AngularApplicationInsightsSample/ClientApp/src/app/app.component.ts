import {Component, OnInit} from '@angular/core';
import {ApplicationInsights} from '@microsoft/applicationinsights-web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {
  title = 'app';

  private appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: 'xxx'
    }
  });

  ngOnInit() {
    this.appInsights.loadAppInsights();
  }
}
