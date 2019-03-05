import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from './../../shared/global.service';
import { Image } from './../../shared/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  selectedAlbumId: number;
  selectedUserId: number;
  imageList: Image[];
  constructor(
    private globalService: GlobalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(parameter => {
      this.selectedAlbumId = parameter['albumId'];
      this.selectedUserId = parameter['userId'];
      if (this.selectedAlbumId) {
        this.globalService
          .getImageList(this.selectedAlbumId)
          .subscribe(responce => {
            if (responce) {
              this.imageList = (responce as Image[]).slice(0, 5);
            }
          });
      }
    });
  }

  backToAlbumList() {
    this.router.navigate(['/albums', this.selectedUserId], {
      skipLocationChange: true
    });
  }
}
