const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!
shutdownWarning(120); // The system is shutting down in 30 minutes!

function later2(func, arg) {
  return (arg2) => func(arg, arg2);
}

