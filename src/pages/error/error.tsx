import React from 'react'
import { Helmet } from 'react-helmet-async'

const NotFound = () => (
  <>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Not Found
      </h1>
      </div>
    </div>
  </section>
  </>
)
export default NotFound