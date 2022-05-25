import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { characters } from '../data/characters';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characterslist = characters;
  constructor() { }

  ngOnInit(): void {
  }

}
