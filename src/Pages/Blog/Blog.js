import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto container my-10 px-5 min-h-[50vh] flex items-start flex-col">
      <div className="my-3">
        <h2 className="text-base font-medium">
          <span className="font-semibold text-lg pr-2">Question 1:</span>What
          are the different ways to manage a state in a React application?
        </h2>
        <h2 className="text-base font-normal">
          There are four main types of state you need to properly manage in your
          React apps:
          <ul className="list-disc">
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </ul>
        </h2>
      </div>
      <div className="my-3">
        <h2 className="text-base font-medium">
          <span className="font-semibold text-lg pr-2">Question 2:</span> How
          does prototypical inheritance work?
        </h2>
        <h2 className="text-base font-normal">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </h2>
      </div>
      <div className="my-3">
        <h2 className="text-base font-medium">
          <span className="font-semibold text-lg pr-2">Question 3:</span> What
          is a unit test? Why should we write unit tests?
        </h2>
        <h2 className="text-base font-normal">
          In computer programming, unit testing is a software testing method by
          which individual units of source code—sets of one or more computer
          program modules together with associated control data, usage
          procedures, and operating procedures—are tested to determine whether
          they are fit for use.
          <br />
          Unit test enable us to catch bugs early in the development process.
          Automated unit tests help a great deal with regression testing. They
          detect code smells in your codebase. For example, if you're having a
          hard time writing unit tests for a piece of code, it might be a sign
          that your function is too complex.
        </h2>
      </div>
      <div className="my-3">
        <h2 className="text-base font-medium">
          <span className="font-semibold text-lg pr-2">Question 4:</span> React
          vs. Angular vs. Vue?
        </h2>
        <h2 className="text-base font-normal">
          <span className="font-bold">React</span> offers a Getting Started
          guide that should help one set up React in about an hour. The
          documentation is thorough and complete, with solutions to common
          issues already present on Stack Overflow. React is not a complete
          framework and advanced features require the use of third-party
          libraries. This makes the learning curve of the core framework not so
          steep but depends on the path you take with additional functionality.
          However, learning to use React does not necessarily mean that you are
          using the best practices.
          <br />
          <span className="font-bold">Vue</span> provides higher customizability
          and hence is easier to learn than Angular or React. Further, Vue has
          an overlap with Angular and React with respect to their functionality
          like the use of components. Hence, the transition to Vue from either
          of the two is an easy option. However, simplicity and flexibility of
          Vue is a double-edged sword — it allows poor code, making it difficult
          to debug and test.
        </h2>
      </div>
    </div>
  );
};

export default Blog;
