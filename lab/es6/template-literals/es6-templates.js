import markup from './page.template';

(function ( w, doc ) {

  // Enable strict mode
  "use strict";

  // Local object for method references
  var App = {};

  // Namespace
  App.ns = "ES6_Templates";
  
  /*************************************************************
    Ajax method for generic data
  **************************************************************/
  
  App.ajax = function( dataType, url, callback ) {
    
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    
    request.onload = function() {
      
      if (request.status >= 200 && request.status < 400) {
        
        // Success!
        var data;
        
        if( dataType === 'json') {
          data = JSON.parse(request.responseText);
        } else {
          data = request.responseText;
        }
        
        // execute callback
        if (typeof callback === 'function') {
          callback.call(this, data);
        }
        
      } else {
        console.log('Error, but the server is cool.');
      }
    };
    
    request.onerror = function() {
      console.log('Error, server no es bueno.');
    };
    
    request.send();
    
  };

  /**************************************************************
    Compile templates method
  **************************************************************/

  App.compile = function( tmpl, ...data ) {
    
    var output = data[0];
    
    for( let i = 0; i < data.length; i++ ) {

      console.log( data[i] );

    }

    return output;
    
  };

  /**************************************************************
    Application init method
  **************************************************************/

  App.init = function() {
    
    // Go get JSON data to be passed into the template
    App.ajax('json', 'data.json', function( data ) {
      
      // go get the template
      App.ajax('html', 'page.template', function( template ) {
        
        console.log(data);
        console.log(template); // need to mash these together
        
        // @TODO: make this template an external file
        
        var html = `<article>
                    <header>
                      <h1>${data.title}</h1>
                    </header>
                    <section>
                      <div>${data.teaser}</div>
                      <div>${data.body}</div>
                    </section>
                    <footer>
                      <ul>
                        ${data.tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
                      </ul>
                    </footer>
                  </article>`;
        
        // TO DO: make this work
        var tmpl = App.compile( template, data );

        var output = document.getElementById( "output" );
       
        output.innerHTML = html;
        
      });
      
    });
  };

  /**************************************************************
    Start the application
  **************************************************************/

  App.init();

} )( this, this.document );