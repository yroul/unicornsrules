export interface Database {
  write(data: any): any;
  read<Type>(data: any): Type;
}
