import { Component } from '@angular/core';
import { ball } from '../../interface/ball';
import { BallserviceService } from '../../services/ballservice.service';
import { BALLS } from '../../const/balls';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss'],
})
export class BallSelectorComponent {
  public balls = BALLS;

  constructor(private ballservice: BallserviceService) {}

  // select the ball

  public onSelect(ball: ball): void {
    const isSelected = this.ballservice.isSelected(ball);

    if (!isSelected && this.ballservice.getSelectedBalls().length < 8) {
      ball.selected = true;
      this.ballservice.setBall(ball);
    }
  }

  // empty

  public remove(): void {
    this.ballservice.clearSelection();
  }

  trackByfn(index: number, item: any): number {
    return index;
  }
}
