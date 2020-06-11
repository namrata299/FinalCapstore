import { Component, OnInit } from '@angular/core';
import { MerchantDetails } from 'src/app/models/MerchantDetails';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-party-merchant',
  templateUrl: './third-party-merchant.component.html',
  styleUrls: ['./third-party-merchant.component.css']
})
export class ThirdPartyMerchantComponent implements OnInit {

 

    name:string;
    username:string;
    password;
    phone_number : String;
    alternate_phone_number : String;
    eMail:String;
    alternate_email: String;
    check=false;
    status: string;
    rating =0;
    isApproved;
    role="Admin";
    isACtive=false;
    securityQueston=null;
    securityAnswer=null;
    products=null;
    user_address=null;
    product_feedback=null;
    coupons=null;
    merchant1: MerchantDetails= new MerchantDetails();
    
    constructor( private adminService: AdminService, private router: Router) { }
  
    ngOnInit(): void {
    }
    async addMerchant()
    {
      console.log(this.merchant1);
     let response= await this.adminService.addNewMerchant(this.merchant1).subscribe(
       data=>{
         console.log(data);
       },
       error=>{
         console.log(error);
       }
     );
     console.log(response);
    
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
    back()
    {
        this.router.navigate(['admin']);
    }
  }
