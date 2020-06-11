import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  searchTerm:any;
  constructor(private adminService:AdminService) { }
email;
  ngOnInit(): void {
  }
invite()
{
  this.adminService.inviteservice(this.email).subscribe(
    data=>{
      console.log(data);
    },
    error=>{console.log(error);}
  );

}
}
