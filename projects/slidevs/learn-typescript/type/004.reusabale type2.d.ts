type GreetingLike = string | (() => string) | MyGreeter
declare function greet(g: GreetingLike): void
