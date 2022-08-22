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

## Components

Components are independent and reusable bits of code. It is the same as javascript class/function but works in isolation and returns html via render function.

### Component Types

There are two types of component -

- Class component
- Function component

<br>

### Class Component

Before React v16.8, class components were the only way to track state and lifecycle of components.

- To create a class component, it should extend the React.Component class
- Class names must start with an uppercase letter such as Table, Car etc.
- All react components should have a render method.

```typescript
import React, { Component } from "react";

export class ClassComponent extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <h1>Class Component</h1>
      </div>
    );
  }
}
```

### Function Component

Function components are more lightweight than class components. You need to write less code, easy to understand but works the same like class components. Function components are much like a JS function that returns HTML.

```typescript
import React from "react";

export const FunctionComponent = () => {
  return (
    <div>
      <h1>FunctionComponent</h1>
    </div>
  );
};
```

### Lifecycle Hooks

React class component has different lifecycle hooks at three phases -

- Mounting
- Updating
- Unmounting

#### Mounting

Mounting means putting elements into the DOM.

- Constructor - The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.
- getDerivedStateFromProps - The getDerivedStateFromProps() method is called right before rendering the elements in the DOM. This is the natural place to set the state object based on the initial props.
- render - The render() method is required, and is the method that actually outputs the HTML to the DOM.
- componentDidMount - The componentDidMount() method is called after the component is rendered. This is the best place to make network calls.

#### Updating

The next phase in the lifecycle is when a component is updated.

- getDerivedStateFromProps - This is the first method that is called when a component gets updated. This is still the natural place to set the state object based on the initial props.
- shouldComponentUpdate - In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is true.
- render - The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.
- getSnapshotBeforeUpdate - In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update. If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
- componentDidUpdate - The componentDidUpdate method is called after the component is updated in the DOM.

#### Unmounting

The next phase in the lifecycle is when a component is removed from the DOM.

- componentWillUnmount - The componentWillUnmount method is called when the component is about to be removed from the DOM.

<br>

**Note**: We can use `useEffect` hooks to achieve similar functionality, what we can do with class component’s lifecycle hooks.

```typescript
useEffect(() => {
  // Make some change on component render
}, []);
```

## State

- The state object is where you store property values that belong to the component.
- React class components have a built-in state object, For function component, we can use `useState` hooks.
- When the state object changes, the component re-renders.
- The state object is initialized in the constructor
- The state object can contain as many properties as you like
- Refer to the state object anywhere in the component by using the this.state.propertyName syntax
- To change a value in the state object, use the this.setState() method

<br>

### State in Class component

<br>

```typescript
import React, { Component } from "react";

interface IProps {}

interface IState {
  name: string;
}

export class ClassComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      name: "Abhishek",
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>Class Component</h1>
        <h2>Name: {this.state.name}</h2>
      </div>
    );
  }
}
```

<br>

### State in Function component

<br>

```typescript
import React, { useState } from "react";

export const FunctionComponent = () => {
  const [name] = useState("Vikram");

  return (
    <div>
      <h1>FunctionComponent</h1>
      <h2>Name: {name}</h2>
    </div>
  );
};
```

## Props

- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
- The child component receives the argument as a props object
- Props are also how you pass data from one component to another

### Props in class component

#### Class Component

```typescript
import React, { Component } from "react";

interface IProps {
  propsIn: string;
}

interface IState {
  name: string;
}

export class ClassComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      name: "Abhishek",
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>Class Component</h1>
        <h2>Name: {this.state.name}</h2>
        <p>Props in : {this.props.propsIn}</p>
      </div>
    );
  }
}
```

#### App component

```typescript
<ClassComponent propsIn="Class component" />
```

### Props in Function component

#### Function Component

```typescript
import React, { useState } from "react";

interface IProps {
  propsIn: string;
}

export const FunctionComponent: React.FC<IProps> = ({ propsIn }) => {
  const [name] = useState("Vikram");
  return (
    <div>
      <h1>FunctionComponent</h1>
      <h2>Name: {name}</h2>
      <p>Props in : {propsIn}</p>
    </div>
  );
};
```

#### App component

```typescript
<FunctionComponent propsIn="Function component" />
```

## useMemo Hook

- The useMemo hook returns a memoised value, that means it caches a value
- It only get called when its dependencies updated
- It helpes us to avoid running intensive functions needlessly. Since component re-renders after state changes and all functions get called again, so to avoid that we can use useMemo.

```typescript
import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [wordList, setwordList] = useState<string[]>([]);
  const calculation = expensiveCalculation(count);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };
  const addNewWord = () => {
    setwordList((t) => [...t, "A new word"]);
  };

  return (
    <div>
      <div>
        <h2>My word list</h2>
        {wordList.map((word, index) => {
          return <p key={index}>{word}</p>;
        })}
        <button onClick={addNewWord}>Add New Word</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={incrementCount}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num: number): number => {
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemoHook;
```

After running this example you will notice that even if you are not doing any expensive calculation on adding new word, it's taking some time to render in UI. And this is happening because the component is re-rendering everytime state changes. To solve this problem we can use useMemo hook.

Just need to replace call of calculation function wrapped in useMemo hook -

```typescript
const calculation = useMemo(() => expensiveCalculation(count), [count]);
```

## useReducer Hook

- It is similar to useState hook, but it allows custom state logic
- If you have to keep track of multiple pieces of state that rely on complex logic, useReducer may be helpful
- It takes two arguments - reducer and initial state
- reducer function contains your custom state logic and initial state can be a simple value but generally will contain an object

```typescript
import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state: number, action: string) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

const UseReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("add")}>add</button>
      <button onClick={() => dispatch("subtract")}>subtract</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default UseReducerHook;
```

## React Form

React forms are same as HTML forms. It allows users to interact with web application/page.

Now let's add a form in function component

```typescript
<form>
  <label>Name</label>
  <input
    name="firstName"
    type="text"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
  />

  <input
    name="lastName"
    type="text"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
  />

  <button onClick={(e) => handleSubmit(e)}>Submit</button>
</form>
```

Since we are storing data in state, let's define state -

```typescript
const [firstName, setFirstName] = useState("Abhishek");
const [lastName, setLastName] = useState("Raj");
```

We also need a function to handle the form after submit -

```typescript
const handleSubmit = (e: any) => {
  e.preventDefault();
  console.log({ firstName, lastName });
};
```

- In HTML form data is handled by DOM but in React it's handled by component
- Since data is handled by component, we store the form data in state of component
- We control the input change through onChange attribute
- We have written `e.preventDefault();` in handleSubmit method to prevent application to refresh.

#### Another way of using form -

We can handle form submission on form itself instead of calling handle method on button

```typescript
<form onSubmit={handleSubmit}>
  <label>Name</label>
  <input
    name="firstName"
    type="text"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
  />

  <input
    name="lastName"
    type="text"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
  />

  <button type="submit">Submit</button>
</form>
```

This is equivalent to the above method but only difference is that we are calling handleSubmit method on onSubmit attribute on form instead of calling it to onClick attribute on the button.

#### Handling multiple form data

In this example we will see how to handle multiple forms data. So problem with our previous examples are we are creating multiple states for multiple form fields but how can we store all the form fields values in a single state. Let's look into the example below -

```typescript
<p>Eligible for exam: {eligibleForExam}</p>
<p>Exam result: {result}</p>

<form onSubmit={handleSubmit}>
  <label>Name</label>
  <input
    name="firstName"
    type="text"
    value={form.firstName}
    onChange={(e) => handleFormChange(e)}
  />

  <input
    name="lastName"
    type="text"
    value={form.lastName}
    onChange={(e) => handleFormChange(e)}
  />

  <input
    name="marks"
    type="text"
    value={form.marks}
    onChange={(e) => handleFormChange(e)}
  />

  <input
    name="attendance"
    type="text"
    value={form.attendance}
    onChange={(e) => handleFormChange(e)}
  />

  <button type="submit">Submit</button>
</form>
```

- In this example, we have created a sigle method to handle onChange event of all form fields
- So let's create our method first

```typescript
interface IForm {
  firstName: string;
  lastName: string;
  marks: number;
  attendance: number;
}

...

const [form, setForm] = useState<IForm>({
  firstName: "",
  lastName: "",
  marks: 0,
  attendance: 0,
});
const [result, setResult] = useState("");
const [eligibleForExam, setEligibleForExam] = useState("");

...

const handleFormChange = (event: any) => {
  switch (event.target.name) {
    case "marks":
      setResult(event.target.value > 40 ? "Pass" : "Fail");
      break;

    case "attendance":
      setEligibleForExam(event.target.value > 80 ? "Eligible" : "Not Eligible");
      break;
  }

  setForm({
    ...form,
    [event.target.name]: event.target.value,
  });
};
```

So this is our complete code, let's break it down to understand what we are doing

```typescript
interface IForm {
  firstName: string;
  lastName: string;
  marks: number;
  attendance: number;
}
```

We have created an interface to add typing to our form state.

```typescript
const [form, setForm] = useState<IForm>({
  firstName: "",
  lastName: "",
  marks: 0,
  attendance: 0,
});
const [result, setResult] = useState("");
const [eligibleForExam, setEligibleForExam] = useState("");
```

Then we have created our state variables to store the form data and some processed result after form manipulation.

```typescript
setForm({
  ...form,
  [event.target.name]: event.target.value,
});
```

Now inside our `handleFormChange` method, we are updating the form state.

- First we are copying the data what we have inside the form state, then
- We are updating the the state with new value
- `[event.target.name]` is the same as our form name attribute.
- `event.target.value` is the same as the value attribute of form.

Here we are manipulating our form data and updating the other state variables -

```typescript
switch (event.target.name) {
  case "marks":
    setResult(event.target.value > 40 ? "Pass" : "Fail");
    break;

  case "attendance":
    setEligibleForExam(event.target.value > 80 ? "Eligible" : "Not Eligible");
    break;
}
```

So if you want to do some manipulation on form data before sending it through an API or using it for any other purpose, you can manipulate it like this.
