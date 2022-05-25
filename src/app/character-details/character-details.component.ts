import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Character, characters} from "../data/characters";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  character: Character | undefined;

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const characterId = Number(routeParams.get('characterId'));
    this.character = characters.find(character => character.id === characterId);
  }

}
