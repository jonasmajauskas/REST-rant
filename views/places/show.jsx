//one pager for each place in the array index
const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <head>
            <link rel="stylesheet" href="/images" />
            </head>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>{ data.place.showEstablished() }</h2>
            <img src = { data.place.pic }/>
            <h2>Find Us in { data.place.city }, { data.place.state }</h2>
            <h2>We serve { data.place.cuisines }</h2>
            <div className='container'>
                <h1 className='rating_box'>Rating</h1>
                <h1 className='comments_box'>Comments</h1>
            </div>
            <a href={`/places/${data.place.index}/edit`} className='btn btn-warning'>
                Edit
            </a>
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show