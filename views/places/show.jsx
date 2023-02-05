const React = require('react')
const Def = require('../default')

function show () {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <h2>Comments</h2>
          </main>
        </Def>
    )
}

module.exports = show