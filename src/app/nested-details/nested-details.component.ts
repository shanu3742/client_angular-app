import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import user from '../.././assets/user.json'

@Component({
  selector: 'app-nested-details',
  templateUrl: './nested-details.component.html',
  styleUrls: ['./nested-details.component.css']
})
export class NestedDetailsComponent {

  constructor(private activeRoutes: ActivatedRoute, private routes: Router, private activatedRoute: ActivatedRoute) {

  }
  itemType(item: any) {
    // console.log(item)
    return typeof item
  }

  onViewParticularKey(key: any) {

    this.routes.navigate([key], { relativeTo: this.activatedRoute })

  }
  userId: any
  userKey: any
  usertYPE: any
  userDetails: any
  userType: any
  details: any
  keyparams: any[] = []
  ngOnInit() {

    let key = this.activeRoutes.snapshot.paramMap.keys

    for (let i = 0; i < key.length; i++) {
      this.keyparams?.push(this.activeRoutes.snapshot.paramMap.get(key[i]))
    }
    console.log(this.keyparams)
    // console.log(this.details, this.activeRoutes.snapshot.paramMap.getAll('id'))


    this.userId = this.activeRoutes.snapshot.paramMap.get('id')
    this.userKey = this.activeRoutes.snapshot.paramMap.get('key')
    this.userType = this.activeRoutes.snapshot.paramMap.get('type')
    this.details = user.users.find((el) => `${el.id}` === this.keyparams[0])

    for (let i = 1; i < this.keyparams.length; i++) {
      this.details = this.details[this.keyparams[i]]

    }

    console.log('nested details', this.details)
    // this.details = this.userDetails[this.userKey][this.userType]
  }

}
