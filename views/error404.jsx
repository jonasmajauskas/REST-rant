const React = require('react')
const Def = require('./default.jsx')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/image2.jpg" alt="image2" />
                <div>
                    Photo by <a href="https://unsplash.com/@kylejeffreys?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kyle Johnson</a> on <a href="https://unsplash.com/photos/TEZZzuQTt8g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>  
              </div>
          </main>
      </Def>
    )
}

module.exports = error404