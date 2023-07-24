type MessageOf<T> = T extends { message: unknown } ? T['message'] : never
interface Email {
  message: string
}
interface Dog {
  bark(): void
}
type EmailMessageContents = MessageOf<Email>
// string
type DogMessageContents = MessageOf<Dog>
//never
