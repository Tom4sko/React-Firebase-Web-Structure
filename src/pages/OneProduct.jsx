import React from 'react'
import projectFirestore from '../firebase/Config'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const OneProduct = () => {

  const { productId } = useParams()

  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect( () => {
    projectFirestore.collection("products").doc(productId).get().then( (document) => {

      if (document.exists) {
        setData(document.data())
      } else {
        setError("New error has accured!")
      }
    }).catch( (error) => {
      setError(error.message)
    })
  }, [])

  return (
    <section>
      {error && <p>Error</p>}
      <div>
        <h2> {data.title} </h2>
        <p> {data.description} </p>
        <p> Produktové číslo: {productId} </p>
        <h3> {data.price} $</h3>
      </div>
    </section>
  )
}

export default OneProduct