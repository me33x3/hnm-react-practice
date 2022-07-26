import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'

const Product = () => {
  const [productList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams( )

  const getProducts = async () => {
    let searchQuery = query.get('q') || ""
    let url = `https://my-json-server.typicode.com/me33x3/hnm-react-practice/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()

    setProductList(data)

    console.log(searchQuery)
  }

  useEffect(() => {
    getProducts()
  }, [query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item, idx) => (
            <Col lg={3} key={idx}><ProductCard item={item}/></Col>
          ))}          
        </Row>
      </Container>
    </div>
  )
}

export default Product