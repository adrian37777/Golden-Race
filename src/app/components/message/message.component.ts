import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { BallserviceService } from 'src/app/services/ballservice.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent implements OnInit {

  @Input() number: number = 0;

  @Output() restart = new EventEmitter<void>();

  public message: string = '';

  constructor(private ballService: BallserviceService) {}

  // Win o Lost

  ngOnInit() {
    const isWinner = this.ballService
      .getSelectedBalls()
      .find((ball) => ball.id === this.number);

    this.message = isWinner ? 'You Win' : 'You Lost';
  }

  // restar Game
  public restartGame() {
    this.restart.emit();
  }
}
