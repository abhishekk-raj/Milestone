# React Documentation

## Introduction to React

### What is React

React is a UI framework that helps developers to create frontend applications.

### Why using React

There are several reasons to use React -

- Most important for working people, it has a fast learning curve. If you know JavaScript, you can learn to react very easily.
- It has reusable components
- React renders in the UI very fast due to it’s virtual DOM.
- It provides great abstraction, that means you don’t have to worry about the complex internals to create a complex application. It hides all the complex architecture of web development and provides an easy way to create complex applications.
- State management is very easy in react application using Flux and Redux.
- React has great developer tools to debug your application if stuck at any issue.
- If you learn react, it’s very easy to learn React Native to develop almost 99% native mobile applications

### What is TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

### Why to use typescript?

There are a lot of reasons to use Typescript -

- Main reason to use typescript is type checking
- You will get error at compile time, instead of runtime
- It allows object oriented programming like class, interface etc.
- You will have great intellisense with typescript
- You can use absolute import and import aliases (relative path)
- It has a great community support and most of the libraries support typescript

### What is Sass?

Sass stands for Syntactically Awesome Stylesheet, it's a CSS pre-processor.

### Why to use Sass?

- You can create variables and use it multiple times so whenever you will have to update anything like background color then you just have to update at one place and it will change everywhere
- You can create mixins for media queries
- You can import one .scss file to another .scss file using @import
- SCSS allows to use maths operators inside stylesheet
- You can extend css class into another css class

### Install NodeJS

To install NodeJS, visit its [Official website](https://nodejs.org/en/) and download it from there as per your operating system.

### Create React Project

We are using the [create-react-app library](https://create-react-app.dev/) to create our react application since it hides all the complexity to set up a local environment.

#### To create a new project -

- Open terminal/command prompt/powershell
- Run this command - `npx create-react-app milestone --template typescript`

#### Command explanation

- npx is used to use any library without installing it to machine
- `create-react-app` is command to create new project
- Here, `milestone` is the project name
- `--template` is a command to specify the programming language of a project. Here we are using typescript language. If you will not specify any language the default is JavaScript.

#### To run project

- First goto project directory - `cd project_name`
- Then run command - `npm start` to run the project
- To stop the server, press `ctrl + c`
- If you need to install any dependency, then you will ahve to stop the server first

#### Delete unnecessary files

Few files we are not going to use in our project so you can delete -

- src/App.test.tsx
- src/logo.svg
- src/reportWebVitals.ts
- src/setupTests.ts

You will also need to remove the uses of these files from project.

- Remove deleted files uses from App.tsx -

Remove logo import

```typescript
import logo from "./logo.svg";
```

Remove header section -

```typescript
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.tsx</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
```

- Remove deleted files uses from index.tsx -

```typescript
import reportWebVitals from "./reportWebVitals";
```

```typescript
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

#### Using SCSS

- To use SCSS, we need to install sass dependency - `npm install sass --save-exact`
- Now, rename `index.css` to `index.scss` and `App.css` to `App.scss`
- You also need to update the imports of these files in `App.tsx` and `index.tsx` files

## Basic Typescript

### Definition

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. In other words we can say that TypeScript is a tool that runs before our code and ensures that the types of the program are correct.

Let's say you have a variable `message`, defined like this -

```javascript
let message;

message = "Hello World";

console.log(message);

message = {
  text: "Hello",
  sender: "Abhishek",
};

console.log(message);
```

It will give you correct output like this -

```javascript
Hello World
{text: "Hello", sender: "Abhishek"}
```

But if you will try the same code with TypeScript, it will not work

```typescript
let message: string;

message = "Hello World";

console.log(message);

message = {
  text: "Hello",
  sender: "Abhishek",
};

console.log(message);
```

It will give error -

```javascript
'{ text: string; sender: string; }' is not assignable to type 'string'.
```

#### Static type-checking

Static types systems describe the shapes and behaviors of what our values will be when we run our programs. A type-checker like TypeScript uses that information and tells us when things might be going off the rails.

```typescript
const message = "Hello World";

message();
```

This code will not complain in JavaScript but will throw an error in TypeScript -

```javascript
This expression is not callable.
Type 'String' has no call signatures.
```

#### Non-exception Failures

Imagine a situation where you are trying to access a property of an object that doesn't exist. This is completly fine with JavaScript, but it will throw an error in TypeScript.

```typescript
const user = {
  name: "Abhishek",
  age: 21,
};

console.log(user.location);
```

It will simply give you `undefined` in JavaScript but will throw an error in TypeScript.

```javascript
Property 'location' does not exist on type '{ name: string; age: number; }'.
```

#### Types for Tooling

TypeScript can catch bugs when we make mistakes in our code. That’s great, but TypeScript can also prevent us from making those mistakes in the first place.

The type-checker has information to check things like whether we’re accessing the right properties on variables and other properties. Once it has that information, it can also start suggesting which properties you might want to use.

<img src="https://firebasestorage.googleapis.com/v0/b/chitchat-e0730.appspot.com/o/Screenshot%202022-07-12%20at%2010.56.59%20PM.png?alt=media&token=57f844fc-9e46-4f19-94e0-7ce4f9d36526" alt="types for tooling image">

<br>
#### Install TypeScript

If you are more interested in learning TypeScript, you need to install typescript package in your computer.

```shell
npm install -g typescript
```

<br>

### Basic Types

#### The primitive data types: `string`, `number` and `boolean`

- `string` represents string values like `Hello World`
- `number` represents numeric values like `21`. There is no `int` or `float` in TypeScript. Everything is simply a `number`.
- `boolean` represents truthy/falsy values like `true` or `false`.

```typescript
const name: string = "Abhishek";
const age: number = 21;
const isAdult: boolean = true;
```

#### Array Type

Array is collection of data. Data can be of different types in JavaScript.

```typescript
const achievements: string[] = [
  "gold medalist",
  "mathematician",
  "computer scientist",
];
```

#### Object Type

Objects generally contains keys and value pairs.
We can assign `Object` type to any object variable but the problem is it will not provide the type for it's properties.

```typescript
const book: object;
```

But since it will not give typing to the object's properties, we should use `type` or `interface` instead. We will learn more about this later in this session.

```typescript
interface Book {
  name: string;
  price: number;
}

const book: Book;
```

We can also create array of objects like this -

```typescript
const books: Book[];
```

#### Union Type

Sometimes we are sure about the type but not sure about whether it will be `string` or `number` or both or any other data type. So we can give any variable a multiple data types. <br>
In another words we can say a `union` type is a type formed from two or more other types, representing values that may be any one of those types.

```typescript
const age: number | string;
```

So, in this example we can see that we have defined variable age as `number` or `string` both, since we are not sure whether we will do some calculation on age or not. If not then why we should do type conversion from number to string to render it on UI. So we can give both typings.

Another example we can consider -

```typescript
const id: number | string;
```

In this example we can see, we have defined `id` as `string` and `number`. Suppose if we are using MySQL database then there we get `id` as `number` but if we use MongoDB then we get `id` as string instead.

#### Function Type

We can use `Function` as a type of any function but we generally don't use this approach.

```typescript
let printMessage: Function;
```

We mostly define function like this -

```typescript
function printMessage(message: string): void {
  console.log(message);
}
```

Here, `printMessage` is a function name, `message` is a parameter passed to function and `void` is return type of function, what will be returen from function.

Another way of writing function is arrow function, which is exactly same as above function.

```typescript
const printMessage = (message: string): void => {
  console.log(message);
};
```

- We can use `never` instead of `void` because `void` returns `undefined` but `never` doesn't return anything.

#### Any Type

When we do not know the exact type of variable then we can use `any` type. You can also use `unknown` type instead.

```typescript
let message: any;
```

or

```typescript
let message: unknown;
```

#### Type Aliases

Type aliases allows us to create a custom type of variable. As we learnt earlier we can use `object` type but for better typings we can create interface. So, like interface, we can also create type.

```typescript
type Person = {
  name: string;
  age: number;
};

const person: Person;
```

```typescript
interface Person {
  name: string;
  age: number;
}

const person: Person;
```

- Both looks similar and used for same reason.
- Extending an `interface` and `type` -

```typescript
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
```

```typescript
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};
```

- We can add new fields to an existing interface but a type cannot be changed after being created

```typescript
interface Book {
  title: string;
}

interface Book {
  price: number;
}

const abc: Book = {
  title: "The knights",
  price: 90,
};

console.log(abc.title, abc.price);
```

This works fine and will give you output -

```typescript
"The knights", 90;
```

But, if you try the same thing using type -

```typescript
type Book = {
  title: string;
};

type Book = {
  price: number;
};
```

It will throw an error -

```typescript
Duplicate identifier 'Book'.
```
