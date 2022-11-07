import { Col, Container, Row } from "react-bootstrap"
import StoreItem from "../components/StoreItem"
import storeitems from '../data/items.json';
import './Store.scss'

const Store = () => {
  return (
    <Container>
      <h1>Store</h1>
      
      <Row md={2} xs={1} lg={3} className="g-5">
        {storeitems.map(item => (
          <Col key={item.id}>
          <StoreItem {...item}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Store