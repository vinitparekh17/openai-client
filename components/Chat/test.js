// var a = `{data: {"id":"chatcmpl-7O99Oeg0EV53plskk5QzOFbqzyJa3","object":"chat.completion.chunk","created":1685989402,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"?"},"index":0,"finish_reason":null}]}

// }`
// a = a.replace(/'/g, '"');
// console.log(JSON.parse(a), null, 2);

var a = `{data: {"id":"chatcmpl-7O99Oeg0EV53plskk5QzOFbqzyJa3","object":"chat.completion.chunk","created":1685989402,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"?"},"index":0,"finish_reason":null}]}

}`;

a = a.replace("data", "\"data\"");

// Use JSON.parse to parse the string into an object
// var b = JSON.stringify(a);

// Use JSON.stringify to convert the object back into a string
var c = JSON.parse(a);

// Print the result
console.log(c);
