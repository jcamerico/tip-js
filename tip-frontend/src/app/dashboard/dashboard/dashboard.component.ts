import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  sportInscriptionClosed = environment.status.inscriptionsClosed;
  partyTicketsClosed = environment.status.partyTicketsClosed;
  partyQrCodeSent = true;

  userData = {
    volunteerInfoMissing: true,
    hostingInfoMissing: true,
    outreachInfoMissing: true,
    availableDiscounts: [{code: 'BQDQ0RTN', product: 'DISCOUNT.PARTY', amount: 5, }]
  };

}
