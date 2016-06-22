
var name = "Мразь"
 var HelloWorld = React.createClass({
     render: function() {
         return (
             <h1> Hello, {name}!</h1>
         );
     }
 });

 ReactDOM.render(
     <HelloWorld />,
     document.getElementById('content')
 );