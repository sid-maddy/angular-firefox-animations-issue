import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "paginate" })
export class PaginatePipe implements PipeTransform {
  transform<T extends any>(
    value: T[],
    args?: { pageIndex: number; pageSize: number }
  ): T[] {
    if (!args) {
      args = {
        pageIndex: 0,
        pageSize: 10,
      };
    }

    return value.slice(
      args.pageIndex * args.pageSize,
      (args.pageIndex + 1) * args.pageSize
    );
  }
}
