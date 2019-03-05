import { Album } from './../../shared/models';
import { GlobalService } from './../../shared/global.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  selectedUserId: number;
  albumList: Album[];
  constructor(
    private globalService: GlobalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parameter => {
      this.selectedUserId = parameter['userId'];
      if (this.selectedUserId) {
        this.globalService
          .getAlbumList(this.selectedUserId)
          .subscribe(responce => {
            if (responce) {
              this.albumList = responce as Album[];
            }
          });
      }
    });
  }

  navigateToPhotoGallary(albumId: number) {
    this.router.navigate(['/photos', albumId, this.selectedUserId], {
      skipLocationChange: true
    });
  }
  backToUserList() {
    this.router.navigate(['/'], { skipLocationChange: true });
  }
}
