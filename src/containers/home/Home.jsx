import  React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import CardMovies from '../../components/cardmovies/CardMovies'
import Pagination from '../../components/pagination/Pagination';


const  Home = ()=>{
    const [content, setContent] = useState([]);
    const [pageno, setPageno] = useState(1)
    const [paginationno, setPaginationno] = useState(0)
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;


    
    const GetDataTrending = async ()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
        setContent(data.results);
        setPaginationno(data.total_pages);
    }

    useEffect(()=>{
        console.log('Trending Component did mount');
        GetDataTrending();
        // eslint-disable-next-line
        
    }, [])

    const handleClick = (number)=>{
        setPageno(number);
    }
    useEffect(()=>{
        console.log('Trending Component didupdate mount');
        GetDataTrending();
    }, [pageno])
    return (
        <main className='homePage'>
            <Container>
                <Row>
                    <Col className='col-12'>
                        <section>
                        <h1 className='txtCenter'>Show Stopper </h1>
                            <h3 className='txtCenter'>Tv and Movies For You</h3>
                        </section>
                    </Col>
                    {
                        content && content.length > 0 ? content.map((item, index)=>{
                            return (<CardMovies key={index} data={item} />)
                        }) : 'Loading ....'
                    }                     
                    {
                    paginationno && paginationno > 1 ? <Pagination maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                }
                </Row>
            </Container>
        </main>
    )
}

export default Home;