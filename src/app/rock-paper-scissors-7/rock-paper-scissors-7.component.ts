import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rock-paper-scissors-7',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rock-paper-scissors-7.component.html',
  styleUrl: './rock-paper-scissors-7.component.scss',
})
export class RockPaperScissors7Component {
  rockCell: ImageCell = new ImageCell('/img/rock.jpg', 'Rock');
  paperCell: ImageCell = new ImageCell('/img/paper.jpg', 'Paper');
  scissorCell: ImageCell = new ImageCell('/img/scissor.jpg', 'Sciossors');
  imageCells: ImageCell[] = [this.rockCell, this.paperCell, this.scissorCell];
  humanSelectedCell: ImageCell | null = null;
  computerSelectedCell: ImageCell | null = null;
  result: string | null = null;

  play(selctedCell: ImageCell) {
    //console.log(selctedCell.text);
    this.humanSelectedCell = selctedCell;
    this.selectRandomCell();
    this.setResult();
  }

  private setResult() {
    if (this.humanSelectedCell === this.computerSelectedCell) {
      this.result = 'Its a tie';
      return;
    }

    if (this.humanSelectedCell === this.rockCell) {
      if (this.computerSelectedCell === this.scissorCell) {
        this.result = 'You win';
        return;
      }
      // paper
      this.result = 'You lost';
      return;
    }

    if (this.humanSelectedCell === this.paperCell) {
      if (this.computerSelectedCell === this.rockCell) {
        this.result = 'You win';
        return;
      }
      // scrissor
      this.result = 'You lost';
      return;
    }

    if (this.humanSelectedCell === this.scissorCell) {
      if (this.computerSelectedCell === this.paperCell) {
        this.result = 'You win';
        return;
      }
      // rock
      this.result = 'You lost';
      return;
    }
  }

  private selectRandomCell() {
    this.computerSelectedCell =
      this.imageCells[Math.floor(Math.random() * this.imageCells.length)];
  }
}

export class ImageCell {
  imagePath!: string;
  text!: string;

  constructor(imagePath: string, text: string) {
    this.imagePath = imagePath;
    this.text = text;
  }
}
