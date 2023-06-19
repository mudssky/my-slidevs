function getGreeting() {
  return 'howdy'
}
class MyGreeter {}
greet('hello')
greet(getGreeting)
greet(new MyGreeter())
