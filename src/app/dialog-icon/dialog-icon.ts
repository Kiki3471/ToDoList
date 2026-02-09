import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAnimationsDialogComponent } from '../dialog-animation-dialog/dialog-animation-dialog';
import { CardMediaSizeExample } from '../card-media-size-example/card-media-size-example';

@Component({
  selector: 'app-dialog-animations',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, CardMediaSizeExample],
  templateUrl: './dialog-icon.html',
  styleUrl: 'dialog-icon.css',
  //файлы должны насываться dialog-icon.component.html и тд идет {{название}}.{{сушность}}.{{расширение}}
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExample {
  @ViewChild(CardMediaSizeExample)
  private boardComponent!: CardMediaSizeExample;

  constructor(private dialog: MatDialog) {}
  //давай в одном стиел инжектировать через функцию inject()

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAnimationsDialogComponent);

    dialogRef.afterClosed().subscribe((title?: string) => {
      if (!title) return;

      this.boardComponent.addTaskToNew({ title });
    });
  }
}
