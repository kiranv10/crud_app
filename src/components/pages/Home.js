import React from 'react'

function Home() {
  return (
    <>
    <h1 className='home-head'>React CRUD Operations using API call </h1>
    <div className='container'>
    <div className="row">
      <div className="col">
        <h3 className="text-center bg-secondary" >
          Add student
        </h3>
        <label for="name" className='form-label'>Name</label>
        <input type="text" placeholder='enter your name' />
      </div>
      <div className="col">
        <h3 className="text-center bg-secondary" >
          Add student
        </h3>
      </div>
    </div>
    </div>
    </>
  )
}


export default Home