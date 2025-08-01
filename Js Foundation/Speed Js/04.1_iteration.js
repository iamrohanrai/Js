let expense = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet bill", amount: 50, category: "Utilities" },
];
// alag alag category mai kitna kharcha hoga
let expenseReport = expense.reduce(
  (report, expense) => {
    report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report;
  },
  { Food: 0, Utilities: 0 }
);

console.log("Expense Report:", expenseReport);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send Email", completed: true, priority: 3 },
  { description: "Prepare Presentation", completed: false, priority: 1 },
];
let pendingSortedTasks = tasks
  .filter((task) => {
    return !task.completed;
  })
  .sort((a, b) => {
    return a.priority - b.priority;
  });
console.log(pendingSortedTasks);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [4.5, 4, 2] },
  { title: "Movie C", ratings: [3, 4, 1] },
];
let averageRating = movieRatings.map((movie) => {
  const sum = movie.ratings.reduce((acc, rating) => acc + rating, 0);
  const average = Math.floor(sum / movie.ratings.length);
  return { title: movie.title, averageRating: average };
});
console.log(averageRating);
