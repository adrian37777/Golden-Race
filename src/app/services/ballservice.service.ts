import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ball } from '../interface/ball';

@Injectable({
  providedIn: 'root',
})
export class BallserviceService {
  public selectedBalls: ball[] = [];
  public selectedBallsSubject$ = new Subject<ball[]>();

  // get random number

  public getRandomNumber(): Observable<number> {
    return of(Math.round(Math.random() * (10 - 1) + 1));
  }

  // insert ball

  public setBall(ball: ball): void {
    this.selectedBalls.push(ball);
    this.selectedBallsSubject$.next(this.selectedBalls);
  }

  // get selected balls

  public getSelectedBalls(): ball[] {
    return this.selectedBalls;
  }

  // selected true o false

  public isSelected(ball: ball): boolean {
    return this.selectedBalls.includes(ball);
  }

  // empty the hype

  public clearSelection() {
    this.selectedBalls.map((ball) => (ball.selected = false));
    this.selectedBalls = [];
    this.selectedBallsSubject$.next(this.selectedBalls);
  }
}
