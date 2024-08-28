import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PeriodicElement } from '../audio.interface';


@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AudiosComponent implements OnInit {

  public dataSource = ELEMENT_DATA;
  public columnsToDisplay = ['id', 'name', 'title'];
  public expandedElement?: PeriodicElement | null;

  constructor() { }


  ngOnInit(): void { }

  private currentPlayedElem: HTMLAudioElement | null = null;

  public onPaly(elm: HTMLAudioElement):void {
    if (this.currentPlayedElem && this.currentPlayedElem !== elm) {
      this.currentPlayedElem.pause();
    }

    this.currentPlayedElem = elm;
  }

}


const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Eminem', title: "Mockingbird", path: '../../../assets/mp3/Eminem – Mockingbird.mp3', },
  { id: 2, name: 'Hush', title: "Fired Up", path: '../../../assets/mp3/Hush – Fired Up.mp3', },
  { id: 3, name: 'David Guetta', title: "When", path: '../../../assets/mp3/David Guetta – When.mp3', },
  { id: 4, name: 'Hyper', title: "Spoiler", path: '../../../assets/mp3/Hyper – Spoiler.mp3', },
  { id: 5, name: 'Lady Gaga', title: "Always", path: '../../../assets/mp3/Lady Gaga – Always.mp3', },
  { id: 6, name: 'Loreen', title: "Tattoo", path: '../../../assets/mp3/Loreen – Tattoo.mp3', },
  { id: 8, name: 'Nina Simone', title: "Don't", path: '../../../assets/mp3/Nina Simone – Feeling Good.mp3', },
  { id: 9, name: 'Nina Simone', title: "Feeling Good", path: '../../../assets/mp3/Nina Simone – Feeling Good.mp3', },
  { id: 10, name: 'Teddy Swims', title: "Lose Control", path: '../../../assets/mp3/Teddy Swims – Lose Control.mp3', },
  { id: 11, name: 'Terror Squad', title: "Lean Back", path: '../../../assets/mp3/Terror Squad – Lean Back.mp3', },
  { id: 12, name: 'Tiesto', title: "Drifting", path: '../../../assets/mp3/Tiesto – Drifting.mp3', },
];
