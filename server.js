function Person(propos){
    return (<div className="person">
        <h1>{propos.name}</h1>
<p>Your Age:{propos.age}</p>
    </div>);
};

ReactDOM.render(<Person name="Max" age="28"/>, document.querySelector('#p1'));
ReactDOM.render(<Person name="Manu" age="30"/>, document.querySelector('#p2'));