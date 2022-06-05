function tick() {
    const element = (
        <div>
        <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
);
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);


<div /> это div-тег из HTML, а <Welcome /> это уже наш компонент Welcome

Давайте разберём, что именно здесь происходит:

    Мы передаём React-элемент <Welcome name="Алиса" /> в ReactDOM.render().
    React вызывает наш компонент Welcome с пропсами {name: 'Алиса'}.
Наш компонент Welcome возвращает элемент <h1>Привет, Алиса</h1> в качестве результата.
React DOM делает минимальные изменения в DOM, чтобы получилось <h1>Привет, Алиса</h1>.


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById('root'));


function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));


