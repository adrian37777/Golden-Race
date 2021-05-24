import { Component, OnInit } from '@angular/core';
import { BallserviceService } from '../../services/ballservice.service';
import { Subscription } from 'rxjs';
import { ball } from 'src/app/interface/ball';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss'],
})
export class BetSlipComponent implements OnInit {
  public selectedBalls: ball[] = [];
  public bet = 0;
  public result = 0;
  public showResults: boolean = false;
  public betForm = new FormGroup({
    bet: new FormControl(0, [Validators.required, Validators.min(5)]),
  });

  private subscriptions = new Subscription();

  constructor(private ballservice: BallserviceService) {}

  // subscribe observable

  ngOnInit() {
    this.subscriptions.add(
      this.ballservice.selectedBallsSubject$.subscribe((balls) => {
        this.selectedBalls = balls;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  // place bet

  public placeBet() {
    this.subscriptions.add(
      this.ballservice.getRandomNumber().subscribe((number) => {
        this.showResults = true;
        this.result = number;
      })
    );
  }

  // restar Game

  public restartGame() {
    this.showResults = false;
    this.ballservice.clearSelection();
  }

  trackByfn(index: number, item: any): number {
    return index;
  }
}
