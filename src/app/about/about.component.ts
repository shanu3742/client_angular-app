import { Component } from '@angular/core';
import * as d3 from 'd3'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  companyName: string = ''

  getOutputData(value: any) {



    this.companyName = value
    console.log('value updated ', value)
  }

  width: number = 400;
  height: number = 400;
  svg: any
  g: any

  margin = {
    TOP: 20,
    BOTTOM: 20,
    LEFT: 40,
    RIGHT: 10
  }

  createSvg() {

    this.svg = d3.select('#app-graph').append('svg')
      .attr('width', this.width + this.margin.LEFT + this.margin.RIGHT)
      .attr('height', this.height + this.margin.TOP + this.margin.BOTTOM)
      .attr('style', 'background:gray')





    let t = 0

    setInterval(() => {

      let color = ['red', 'green', 'yellow', 'pink']
      const random = Math.floor(Math.random() * color.length)

      let data = d3.range(10).map((el) => {
        return {
          radius: 10 + Math.sin(el * 0.5 + t) * 5,
          x: el * 46 + 20,
          y: 200 + Math.sin(el * 0.5 + t) * 100
        }

      })



      let circle = this.svg.selectAll('circle').data(data)

      circle.enter().append('circle').attr('r', (d: any, i: any) => d.radius).attr('cx', (d: any, i: any) => d.x).attr('cy', (d: any, i: any) => d.y)

      /**
       *
       *
       *
       */
      //update
      circle.attr('cx', (d: any, i: any) => d.x).attr('cy', (d: any, i: any) => d.y).attr('r', (d: any, i: any) => d.radius)




      //remove


      circle.exit().remove()
      t = t + 0.01
    }, 1000 / 60)







  }


  ngOnInit() {

    this.createSvg()
    console.log(document.getElementById('#app-graph')?.clientHeight)
  }

}
