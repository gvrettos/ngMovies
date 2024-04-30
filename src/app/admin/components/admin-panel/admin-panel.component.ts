import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  ngOnInit(): void {
  }

  public login() {
    this.oauthService.initCodeFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get loggedInUser() {
    let claims = this.oauthService.getIdentityClaims();
    return claims ? claims["given_name"] : null;
  }

}
