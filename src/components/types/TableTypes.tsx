export interface TableColumn {
  path?: string;
  key?: string;
  label?: string;
  labelComponent?: Function;
  filter?: boolean;
  content?: any;
  style?: {
    width?: string;
  };
}

interface RowIcons {
  reorder?: boolean;
  next?: boolean;
  checkbox?: boolean;
}

export type TableProps = {
  tableName?: string;
  data: {}[];
  columns: TableColumn[];
  rowClick?: () => {};
  rowIcons?: RowIcons;
  popup?: {
    type: "small" | "medium" | "large" | "xlarge" | null;
    content: () => {};
    onOpen: (item) => {};
    style?: {};
  };
};
