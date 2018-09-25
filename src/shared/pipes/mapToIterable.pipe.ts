import { Pipe, PipeTransform } from '@angular/core';
/**
 * Map to Iteratble Pipe
 *
 * It accepts Objects and [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 *
 * Example:
 *  <div *ngFor="#keyValuePair of someObject | mapToIterable">
 *    key {{keyValuePair.key}} and value {{keyValuePair.value}}
 *  </div>
 */

@Pipe({ name: 'mapToIterable' })
export class MapToIterable implements PipeTransform {
  transform(value) {
    const result = [];

    if (value.entries) {
      for (const [key, val] of value.entries()) {
        result.push({ key, val });
      }
    } else {
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          result.push({ key, value: value[key] });
        }
      }
    }

    return result;
  }
}
