import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

export type ScreenSize = 'unknown'
  | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Injectable({
  providedIn: 'root'
})
export class UiStateService {

  private _screenSize: ScreenSize = 'unknown';

  get screenSize(): ScreenSize { return this._screenSize; }

  readonly screenSizeChange = new Subject<ScreenSize>();

  constructor() {}

  updateScreenSize(sz: ScreenSize): void {
    if (sz !== this._screenSize) {
      this._screenSize = sz;
      this.screenSizeChange.next(sz);
    }
  }
}
