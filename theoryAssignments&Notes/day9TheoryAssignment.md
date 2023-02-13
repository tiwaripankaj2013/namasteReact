##  When and why do we need lazy()?
A: when large application we can not put all bundle in single havy to load on browser.

'const About = lazy(()=>import("./about"));' 
## What is suspense?
A:Suspense in React is a feature that allows developers to "suspend" the rendering of a component until certain conditions are met, such as data being loaded from an API. This allows for more fine-grained control over the loading and rendering process, and can be used to create more seamless and performant user experiences. It is available in React version 16.6 and above.
## Why we got this error : A component suspended while responding to synchronous input. This  will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped ## with startTransition? How does suspense fix this error?
## Advantages and disadvantages of using this code splitting pattern?
A:Code splitting is a technique that allows developers to split their application code into smaller, more manageable chunks that can be loaded on demand. There are several advantages and disadvantages to using this pattern in React:

Advantages:

Improved performance: By only loading the code that is needed for a specific page or feature, code splitting can help to reduce the initial load time of an application and improve overall performance.
Reduced bundle size: By only loading the code that is needed for a specific page or feature, code splitting can help to reduce the overall size of the application bundle, which can lead to faster download and load times.
Easier maintenance: By splitting code into smaller chunks, it can be easier to understand and maintain the codebase.
Disadvantages:

Increased complexity: Code splitting can add complexity to the application, as developers need to manage the loading and unloading of different chunks of code.
Additional setup and configuration: Code splitting requires additional setup and configuration, which can be time-consuming and error-prone.
Not all libraries are compatible: Not all libraries are compatible with code splitting and there may be additional work required to make them work with this pattern.
Overall, code splitting is a powerful technique that can help to improve the performance and maintainability of React applications, but it does come with some additional complexity and setup.
## When do we and why do we need suspense?
A: React Suspense is a feature that allows developers to "suspend" the rendering of a component until certain conditions are met, such as data being loaded from an API. This allows for more fine-grained control over the loading and rendering process, and can be used to create more seamless and performant user experiences.

There are several use cases where Suspense can be useful:

Data loading: When loading data from an API, it's common to display a loading spinner or some other indication that data is being fetched. With Suspense, you can suspend the rendering of a component until the data has been loaded, and then seamlessly display the component with the loaded data. This can create a more seamless user experience, as the component will not "flash" between the loading and loaded states.
Code splitting: When using code splitting, it's possible to load the code for a component only when it's needed. With Suspense, you can suspend the rendering of a component until the code has been loaded, and then seamlessly display the component. This can help to improve the performance of the application by only loading the code that is actually needed.
User-triggered actions: Suspense can be used to suspend the rendering of a component until a user has taken a specific action, such as clicking a button. This can be used to create more interactive and dynamic user experiences.
