import React from 'react'
import projectFirestore from '../firebase/Config'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../scss/Products.scss"

const Products = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect( () => {
    projectFirestore.collection("products").get().then( (snapshot) => {
      
      if (snapshot.empty) {
        setError("Error has accured!")
      } else {
        let result = []

        snapshot.docs.forEach( (oneProduct) => {
          result.push({id: oneProduct.id, ...oneProduct.data()})
        })
        setData(result)
      }
    }).catch( (error) => {
      setError(error.message)
    })
  }, [])

  return (
    <section>
      {error && <p>Error</p>}
      { 
      data.map( (oneProduct) => {
        const {id, title, img} = oneProduct

        return (
          <section className="products" key={id}>
          <div className="product-card">
            <img src={`src/images/${img}.jpg`} alt=""></img>
            <h2> {title} </h2>
            <Link to={`/oneproduct/${id}`} >Read More!</Link>
          </div>
          </section>
        )
      })
    }
    </section>
  )
}

export default Products