class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    
    render(){
        return(
            <div class="app" id="app">
                <Header/>
                <Content/>
            </div>
        );
    }
}

function Nav(props){
    return (
        <a 
            class="btn btn-outline-light" 
            href="com.html" 
            role="button"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Оставьте отзыв"
            >
            Оставить отзыв
        </a>);
}

function Header(props){
    return(
        <div className="container sticky-top"> 
            <div className="row">
                <div className="col">
                    <div className="p-1 mb-1 bg-dark text-white bg-gradient">
                        <div align="center"><h1 className="user-select-none">Стикер паки ВК</h1>
                            <Nav/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            cR: 5,
            sR: 0,
            eR: 5,
            pR: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        const{error, isLoaded, eR, cR, sR, pR} = this.state;
        this.setState({
            eR: (eR+cR)
        });
        let jsonData = {
            sR: sR,
            eR: eR,
            fR: 'data/data.xml'
        };
        fetch("src/api/loadXml.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify(jsonData)
        })
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
        let jD = {
            fR: 'data/data.xml'
        };
        fetch("src/api/loadLength.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify(jD)
        })
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    pR: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
        if(eR>pR){
            alert("А всё, больше нету(((");
        }
    }
    
    componentDidMount(){
        const{error, isLoaded, eR, cR, sR, pR} = this.state;
        this.setState({
            eR: (eR+cR)
        });
        let jsonData = {
            sR: sR,
            eR: eR,
            fR: 'data/data.xml'
        };
        fetch("src/api/loadXml.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify(jsonData)
        })
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
        let jD = {
            fR: 'data/data.xml'
        };
        fetch("src/api/loadLength.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify(jD)
        })
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    pR: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    
    render(){
        const{error, isLoaded, items} = this.state;
       
            return(
                <div className="container">

                    <div class="p-3 mb-2 bg-black text-dark bg-gradient">
                    
                        <div className="row align-items-center" id="content">
                        {items.map(item => (
                            <Cdata key={item.id} id={item.id} picture={item.picture} title={item.title} author={item.author}  value={item.value}/>
                        ))}
                        </div>
                        <div className="row align-items-start fixed-bottom" id="buttons">
                            <Button handleClick={this.handleClick}/>
                        </div>
                    </div>
                </div>
            );
        
    }
}

function Button(props){
    return(
        <button
            
            type="button"
            className="btn btn-dark"
            onClick={props.handleClick}
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Загрузить еще 5 элементов">
            <span className="visually-hidden">Загрузка...</span>
            Показать еще
        </button>
    );
}


function Load(props){
    return(
        <div className="container" id="content">
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Загрузка...</span>
                </div>
            </div>  
        </div>
    );
}

function Cdata(props){
    return (
        <div className="container-sm">
            <div class="row align-items-start">
                <Cid id={props.id}/>
                <Ctitle title={props.title}/>
                <Cpicture picture={props.picture}/>
                <Cauthor author={props.author}/>
                <Cvalue value={props.value}/>
                <hr />
            </div>
        </div>
    );
}

function Cid(props){
    return <div className="col-sm-5"> <h2 className="text-dark user-select-none">{``} </h2></div>;
}

function Ctitle(props){
    return <div className="col-sm-5"> <h2 className="text-dark user-select-none">{props.title}</h2></div>;
}

function Cpicture(props){
    return <div className="col-sm-5"> <img className="rounded" src={`${props.picture}`} width="300" height="300" alt="..."/></div>;
}
function Cauthor(props){
  return <div className="col-sm-5"> <b className="text-dark user-select-none">Автор:</b><p className="text-dark user-select-none">{props.author}</p></div>;
}
function Cvalue(props){
    return <div className="col-sm-5"> <b className="text-dark user-select-none">Описание:</b><p className="text-dark user-select-none">{props.value}</p></div>;
}
