export class Table {
  table_name: string;
  constructor(table_name: string) {
    this.table_name=table_name;
  }

  read(){
    return "original_text";
  }
}


const table=new Table("Table name");

export {table};