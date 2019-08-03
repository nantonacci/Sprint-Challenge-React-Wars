# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a UI component library. It solves the problems of working with lots of data without overloading the web browser. Because everything is compartmentalized, it is much easier to scale and reuse. Based on the projects I have done so far, it seems like it would be easy for collaboration as well. Since everything is so compartmentalized, it seems a large scale project would be much easier. Once everything has been imported into the main App.js file, you can easily see the structure of the app at a glance and go into more detail on the specific things you want to work with.

1. What does it mean to think in react?

I think it means to think in terms of compartmentalization and connection. You need to be able to consider how to break up a problem into managable pieces and then figure out the best way to organize and connect those pieces into a whole product or app.

1. Describe state.

State is data. React can react to any state changes in the app.

1. Describe props.

Props provides a way to pass information held on state from one component to another. Props are input data only and you do not make changes to props data.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are things that happen outside of the scope of a function. These are things that can cause a different return output when the same state and props are used. To sync effects, you would use the effect hook to connect the side effects with state or props changes, using a dependency array.
