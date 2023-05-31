import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as d3 from 'd3'
import users from '../../assets/user.json'



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {


  constructor(private router: Router) {

  }
  // employe
  svg: any;
  g: any
  yScale: any
  xScale: any

  width: number = 1500
  height: number = 700

  margin = {
    TOP: 50,
    BOTTOM: 50,
    RIGHT: 20,
    LEFT: 30
  }

  createXAxis() {
    //create x-axis
    let usersName = users.users.map((e) => e.firstName)
    // console.log(users)

    this.xScale = d3.scaleBand().domain(usersName).range([0, this.width])

    let axisBottom = d3.axisBottom(this.xScale)


    this.g.append('g').attr('transform', `translate(${0},${this.yScale(0)})`).call(axisBottom)


  }

  createYaxis() {
    let usersAge = users.users.map((e) => e.age)
    const DOMAIN = [Math.max(...usersAge), 0]

    this.yScale = d3.scaleLinear().domain(DOMAIN).range([0, this.height])
    let axisLeft = d3.axisLeft(this.yScale)

    this.g.append('g').call(axisLeft)
    console.log(usersAge)

    console.log(this.yScale(0))
  }


  createReact() {

    let colorScale = d3.scaleOrdinal().domain(users.users.map((el) => el.firstName)).range(d3.schemeCategory10)
    this.g.append('g').selectAll('rect').data(users.users).enter().append('rect').attr('height', (d: any, i: any) => this.yScale(0) - this.yScale(d.age))
      .attr('width', this.xScale.bandwidth())
      .attr('x', (d: any, i: number) => this.xScale(d.firstName))
      .attr('y', (d: any, i: any) => this.yScale(d.age))
      .attr('fill', (d: any, i: any) => colorScale(i))
      .attr('stroke', 'green')
      .on('click', (d: any, i: any) => {
        console.log(i)
        this.router.navigate([`home/${i.id}`])
      })


  }
  createSvg() {
    this.svg = d3.select('#employe').append('svg')
      .attr('width', this.width + this.margin.LEFT + this.margin.RIGHT)
      .attr('height', this.height + this.margin.BOTTOM + this.margin.TOP)
      .attr('style', 'background:rgb(189, 188, 188)')

    this.g = this.svg.append('g').attr('transform', `translate(${this.margin.LEFT}, ${this.margin.TOP})`)
    this.createYaxis()
    this.createXAxis()
    this.createReact()

  }

  ngOnInit() {
    this.createSvg()




  }

}
