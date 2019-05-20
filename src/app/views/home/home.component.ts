import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getUsers().subscribe(res => {
      this.users = res;
    });
  }
}
