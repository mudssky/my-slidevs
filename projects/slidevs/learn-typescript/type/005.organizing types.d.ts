declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean
  }
  interface AlertOptions {
    modal: boolean
    title?: string
    color?: string
  }
}

// declare namespace GreetingLib.Options {
//   // Refer to via GreetingLib.Options.Log
//   interface Log {
//     verbose?: boolean
//   }
//   interface Alert {
//     modal: boolean
//     title?: string
//     color?: string
//   }
// }

// declare class Greeter {
//   constructor(greeting: string)
//   greeting: string
//   showGreeting(): void
//   log(logOption: GreetingLib.LogOptions)
//   alert(alertOption: GreetingLib.AlertOptions)
// }
