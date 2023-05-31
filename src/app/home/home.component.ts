import { Component } from '@angular/core';
import users from '../../assets/user.json'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  usersDetails = users?.users

  onNavigation(id: any) {
    console.log(id)
    this.router.navigate([`${id}`], { relativeTo: this.activatedRoute })
  }

  ngOnInit(): void {
    console.log(this.usersDetails)

  }

}
