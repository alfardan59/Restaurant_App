import { Button } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/Banner.jpeg'
import '../styles/HomeStyle.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage: `url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Apna Khana</h1>
          <p>We Serve the best food to you</p>
          <Link to="/menu">
          <Button>Order Now</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
