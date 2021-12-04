export default () => ({
  todo: "",
  todos: [],
  activeFilterParam: "all",
  filters: [
    {
      title: "All",
      param: "all",
    },
    {
      title: "Active",
      param: "active",
    },
    {
      title: "Completed",
      param: "completed",
    },
  ],
});
