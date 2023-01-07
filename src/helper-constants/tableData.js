export const TABLE_DATA = [
  {
    id: 1,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 2,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 3,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 4,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 5,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 6,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 7,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 8,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 9,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 10,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 11,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 12,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 13,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 14,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 15,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 16,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 17,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 18,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 19,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 20,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
  {
    id: 21,
    title: "Table Item 1",
    number: Math.ceil(Math.random() * (1000 - 100) + 100),
    percentage: Math.ceil(Math.random() * (100 - 1) + 1),
  },
];

export const TABLE_COLUMNS = [
  {
    title: "ID",
    dataIndex: "Id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Percentage",
    dataIndex: "percentage",
    key: "percentage",
    render: (record) => {
      return <span>{record}%</span>;
    },
  },
];
