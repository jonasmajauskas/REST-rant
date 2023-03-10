//one pager for each place in the array index
const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className="inactive">
        Not yet rated!
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for (let i=0; i < averageRating; i++) {
        stars += '⭐️'
      }
      rating = (
        <h3> {stars} stars </h3>
      ) //when rating is active, this value will show up
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <strong>- {c.author}</strong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <head>
            <link rel="stylesheet" href="/images" />
            </head>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>{ data.place.showEstablished() }</h2>
            {rating}
            <img src = { data.place.pic }/>
            <h2>Find Us in { data.place.city }, { data.place.state }</h2>
            <h2>We serve { data.place.cuisines }</h2>
            <div className='container'>
                <h1 className='rating_box'>Ratings</h1>
                <h1 className='comments_box'>Comments</h1>
                {comments}
            </div>
            <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>
                Edit
            </a>
            <form action={`/places/${data.place.id}?_method=DELETE`} method="POST" >
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
            <h1>Leave a Rant or Rave!</h1>
            <form action={`/places/${data.place.id}/comment`} method="POST">
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input className="form-control" id="content" name="content"/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" id="author" name="author"/>
                </div>
                <div className="form-group">
                    <label htmlFor="stars">Star Rating</label>
                    <input className="form-control" id="stars" name="stars"/>
                </div>
                <div className="form-group">
                    <label htmlFor="stars">Rant?</label>
                    <input className="form-control" id="rant" name="rant" type="checkbox" />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Comment"/>
            </form>
          </main>
        </Def>
    )
}

module.exports = show