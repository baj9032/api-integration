import { User } from './../../shared/models/index';
import { GlobalService } from './../../shared/global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: User[];
  constructor(private globalService: GlobalService, private router: Router) {}

  ngOnInit() {
    this.globalService.getUserList().subscribe(responce => {
      if (responce) {
        this.userList = responce as User[];
      }
    });
  }
  navigateToAlbums(userId: number) {
    this.router.navigate(['/albums', userId], { skipLocationChange: true });
  }
}
