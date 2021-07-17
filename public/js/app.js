class App extends React.Component {
    render = () => {
        return (
            <div className="appContainer">
                <h1>Hello World</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('main')
)