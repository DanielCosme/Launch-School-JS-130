// countdown(7)

(function func(num) {
  console.log(num);
  if (num !== 0) func(--num);
})(7);

