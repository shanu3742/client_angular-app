import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'

interface Emp {
  name: string,
  age: number
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  emp: Emp[] = [
    {
      name: 'shanu',
      age: 10
    },
    {
      name: 'bhanu',
      age: 20
    },
    {
      name: 'kumar',
      age: 15
    }
  ]

  // figure

  width: number = 600;
  height: number = 600;
  margin = {
    TOP: 100,
    LEFT: 50,
    RIGHT: 50,
    BOTTOM: 60
  }

  svg: any
  g: any

  createSvg() {
    this.svg = d3.select('#figure').append('svg').attr('width', this.width).attr('height', this.height).attr('style', 'background:white')
    /**
     * group axis
     */
    this.g = this.svg.append('g')


    /**
     * virtual line
     */

    let lineGroup = this.g.append('g')


    lineGroup.append('line').attr('x1', 0).attr('x2', this.width - 200).attr('y1', this.height - 200).attr('y2', 0).attr('stroke', 'white')


    lineGroup.append('line').attr('x1', 200).attr('x2', this.width).attr('y1', this.height).attr('y2', 200).attr('stroke', 'green')


    lineGroup.append('line').attr('x1', 0).attr('x2', 200).attr('y1', this.height - 200).attr('y2', this.height).attr('stroke', 'green')
    lineGroup.append('line').attr('x1', this.width - 200).attr('x2', this.width).attr('y1', 0).attr('y2', 200).attr('stroke', 'green')

    // lineGroup.append('line').attr('x1', this.margin.LEFT + 20).attr('x2', this.width + 10).attr('y1', this.height / 2).attr('y2', this.height / 2.5).attr('stroke', 'green')


    /**
     * line one
     */


    let rectgroup = lineGroup.append('g').attr('transform', 'translate(260,-145)')
      .append('g').attr('style', 'transform:rotate(45deg)')

    rectgroup.append('rect').attr('width', 285).attr('height', 575).attr('x', 200).attr('y', 0).attr('fill', 'white').attr('stroke', 'white')



    rectgroup.append('rect').attr('width', 285).attr('height', 60).attr('x', 200).attr('y', 500).attr('fill', 'rgba(228, 13, 124, 0.7)')
    rectgroup.append('rect').attr('width', 85).attr('height', 55).attr('x', 200).attr('y', 502).attr('fill', 'rgba(228, 13, 124, 0.7)').attr('stroke', 'white').attr('stroke-width', 5)
    rectgroup.append('rect').attr('width', 285).attr('height', 60).attr('x', 200).attr('y', 400).attr('fill', 'rgba(113, 19, 239, 0.7)')
    rectgroup.append('rect').attr('width', 85).attr('height', 55).attr('x', 200).attr('y', 402).attr('fill', 'rgba(113, 19, 239, 0.7)').attr('stroke', 'white').attr('stroke-width', 5)
    rectgroup.append('rect').attr('width', 285).attr('height', 60).attr('x', 200).attr('y', 300).attr('fill', 'rgba(239, 195, 19, 0.7)')

    rectgroup.append('rect').attr('width', 85).attr('height', 55).attr('x', 200).attr('y', 302).attr('fill', 'rgba(239, 195, 19, 0.7)').attr('stroke', 'white').attr('stroke-width', 5)


    /**
     * ADD NAME
     */

    rectgroup.append('text').text('shanu').attr('x', 400).attr('y', 530).attr('fill', 'rgba(228, 13, 124, 1)')
    rectgroup.append('text').text('bhanu').attr('x', 400).attr('y', 430).attr('fill', 'rgba(113, 19, 239, 1)')
    rectgroup.append('text').text('kumar').attr('x', 400).attr('y', 330).attr('fill', 'rgba(239, 195, 19, 1)')



    /**
     * append the value
     */

    // rectgroup.append('g').attr('style', 'transform:rotate(5deg)').append('rect').attr('width', 100).attr('height', 40).attr('x', 200).attr('y', 500)
    // this.emp.forEach((element, i) => {

    //   let rect = this.g.append('g').attr('style', 'transform:skewY(-45deg)')

    //   rect.append('rect').attr('width', 60).attr('height', 300).attr('y', 200).attr('x', i * 100)
    // });

    // /**
    //  * y axis
    //  */

    // //yScale

    // let scaleY = d3.scaleLinear().domain([Math.max(...this.emp.map((el) => el.age)), 0]).range([0, this.height])

    // let axisLeft = d3.axisLeft(scaleY)

    // this.g.append('g').call(axisLeft)

    // /**
    //  * x-scale
    //  */
    // let scaleX = d3.scaleBand().domain(this.emp.map((el) => el.name)).range([0, this.width])
    // let axisBottom = d3.axisBottom(scaleX)

    // let xAxis = this.g.append('g').call(axisBottom).attr('transform', `translate(${0},${scaleY(0)})`).append('rect').attr('width', 20).attr('height', 50)




    // /**
    //  * rect
    //  */

    // console.log(scaleX('shanu'))



    // this.g.selectAll('rect').data(this.emp).enter().append('rect')
    //   .attr('width', scaleX.bandwidth() / 2)
    //   .attr('x', (d: any, i: any) => {
    //     let xAxis = scaleX(d.name)
    //     if (xAxis !== undefined) {
    //       xAxis = xAxis + (scaleX.bandwidth() / 4)
    //     }
    //     return xAxis
    //   })
    //   .attr('y', (d: any, i: any) => scaleY(d.age))
    //   .attr('height', (d: any, i: number) => scaleY(0) - scaleY(d.age))

  }

  ngOnInit() {
    this.createSvg()
  }

}
