import {Component, OnInit} from "@angular/core";
import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['users.component.css']
})

export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((obj:any) => {
      this.users = obj.data;
      console.table(this.users);
    })
  }

}
