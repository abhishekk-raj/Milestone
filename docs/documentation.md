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
