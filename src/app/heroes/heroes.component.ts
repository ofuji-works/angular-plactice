import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

import { MatDialog } from '@angular/material/dialog';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  summary?: string;
  formHeadline?: string;
  formItems?: string;

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormModalComponent, {
      width: '50vw',
      data: {
        summary: this.summary,
        formHeadline: this.formHeadline,
        formItems: this.formItems,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
