import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'joinPipe'
})
export class ArrayJoinPipe implements PipeTransform {
    transform(value: any[], separator: string = ', '): string {
        if (!Array.isArray(value)) {
            return '';
        }
        return value.join(separator);
    }
}