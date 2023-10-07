import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  base64ToBytes(base64String: string): Uint8Array {
    const base64WithoutPrefix = base64String.replace(
      /^data:image\/\w+;base64,/,
      ''
    );

    const decodedData = atob(base64WithoutPrefix);

    const outputArray = new Uint8Array(decodedData.length);

    for (let i = 0; i < decodedData.length; ++i) {
      outputArray[i] = decodedData.charCodeAt(i);
    }

    return outputArray;
  }
}
