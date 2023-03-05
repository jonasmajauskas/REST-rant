const React = require('react')
const Def = require('./default.jsx')

function home () {
    return (
      <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img src="/images/image1.jpg" alt="image1" />
                <div>
                    Photo by <a href="https://unsplash.com/@coopery">Mohamed Nohassi</a> on <a href="https://unsplash.com/photos/odxB5oIG_iA?utm_source=unsplash">Unsplash</a>
                </div>  
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>
      </Def>
    )
}

module.exports = home