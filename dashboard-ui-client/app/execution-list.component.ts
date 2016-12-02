import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'execution-list',
  templateUrl: 'execution-list.component.html',
  styleUrls: [ 'execution-list.component.css' ]
})

export class ExecutionListComponent implements OnInit {

  //heroes: Hero[] = [];

  //constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    //this.heroService.getHeroes()
      //.then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
