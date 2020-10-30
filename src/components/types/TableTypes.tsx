export interface TableColumn {
  path?: string;
  key?: string;
  label?: string;
  filter?: boolean;
  content?: any;
  width?: string;
}

export enum GridTypes {
  "small",
  "medium",
  "large",
  "xlarge",
}

interface RowIcons {
  reorder: boolean;
  next: boolean;
  checkbox: boolean;
}

export type TableProps = {
  tableName: string;
  data: {}[];
  columns: TableColumn[];
  gridType: "small" | "medium" | "large" | "xlarge" | null;
  rowClick: () => {};
  rowIcons: RowIcons;
};
