import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  name: string = "";
  price: number = 0;
  constructor(private route: ActivatedRoute) {
    //
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.name = param['name'];
      this.price = param['price'];
    });
  }

  
}
