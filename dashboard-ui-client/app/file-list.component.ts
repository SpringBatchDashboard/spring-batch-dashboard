import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'file-list',
  templateUrl: 'file-list.component.html',
  styleUrls: [ 'file-list.component.css' ]
})

export class FileListComponent implements OnInit {

  //heroes: Hero[] = [];

  //constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    //this.heroService.getHeroes()
      //.then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
