What is JSX ?
    It's a Like HTML synatax.
    Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function.

Superpowers of JSX?
    <div className="sidebar" /> compile to React.createElement( 'div', {className: 'sidebar'})
    JSX compiles into calls to React.createElement, all jsx tag convert in object that convert in html tag and browser understand
    HTML syntax they not understand JSX.

Role of type attribute in script tag ? What options can we use there?
    Browsers that support the module value for the type attribute ignore any script with a nomodule attribute
    <script id="data" type="application/json">
        {
            "userId": 1234,
            "userName": "Maria Cruz",
            "memberSince": "1992"
        }
    </script>

{TitleComponent} VS {<TitleComponent/>} VS {<TitleComponent></TitleComponent>} in JSX ?

TitleComponent : It's a Jsx Element can not use props iside it's.
    Example :const heading1 = (<h1>Heading1 </h1>);

<TitleComponent/> : It's a function component we can use props in pass a data .
    Example :const Heading2 = () => <h2>Heaading2 Welcome to the  </h2> ;

{<TitleComponent></TitleComponent>} : It's functional component has child component or Element.
