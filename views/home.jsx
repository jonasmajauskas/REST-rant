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
                    Photo by <a href="https://unsplash.com/@coopery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mohamed Nohassi</a> on <a href="https://unsplash.com/photos/odxB5oIG_iA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
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