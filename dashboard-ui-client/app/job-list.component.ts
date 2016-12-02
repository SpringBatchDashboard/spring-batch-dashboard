import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'job-list',
  templateUrl: 'job-list.component.html',
  styleUrls: [ 'job-list.component.css' ]
})

export class JobListComponent implements OnInit {

  //heroes: Hero[] = [];

  //constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    //this.heroService.getHeroes()
      //.then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
