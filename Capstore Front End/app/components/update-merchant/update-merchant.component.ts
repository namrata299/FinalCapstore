import { Component, OnInit } from '@angular/core';
import { MerchantDetails } from 'src/app/models/MerchantDetails';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-merchant',
  templateUrl: './update-merchant.component.html',
  styleUrls: ['./update-merchant.component.css']
})
export class UpdateMerchantComponent implements OnInit {
 merchant:MerchantDetails=new MerchantDetails();
  userid;
  

  check=false;
  status: string;
  Rating:number;
  isApproved;
  constructor(private adminService: AdminService,private router:Router) { }

  ngOnInit(): void {
  }
  getMerchant(){
    this.adminService.getMerchant(this.userid).subscribe((data:any)=>{this.merchant=data});
  }
 update(){
   alert("In update merchnat");
this.adminService.updateMerchant(this.merchant).subscribe(data=>{
  console.log(data);
},
error=>{console.log(error);}
);
   
 }
 onCheckboxValueChange():any{
  this.check=!this.check
  if(this.check){
  this.status="Approved";
  alert(this.status)
  }
  else{
  this.status="Disapproved";
  alert(this.status)
  }
  this.isApproved=this.check;


}
back(){
  this.router.navigate(['/showMerchant']);
}
}