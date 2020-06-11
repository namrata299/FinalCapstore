import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonFeedback } from 'src/app/models/CommonFeedback';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-common-feedback',
  templateUrl: './common-feedback.component.html',
  styleUrls: ['./common-feedback.component.css']
})
export class CommonFeedbackComponent implements OnInit {

  cfdList: CommonFeedback[];
  searchTerm;


  constructor(private router:Router,
    private adminService:AdminService) { }


    

    approveRequest(feedbackId){
      this.adminService.forwardRequestToMerchant(feedbackId).subscribe();
    

  }

    approveResponse(feedbackId){
      this.adminService.forwardResponseToCustomer(feedbackId).subscribe()
  }

    
  ngOnInit(){
    this.adminService.getAllCommonFeedback().subscribe(
        data=>{
            this.cfdList=data;
        },
        error=>{
            console.log(error);
        }
    )
  }


 back()
{
    this.router.navigate(['admin']);
}

}
