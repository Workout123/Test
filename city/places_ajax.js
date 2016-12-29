function store( name ) { 
  var results; 
 
  if ( store.cache[name] ) { 
    results = store.cache[name]; 
  } else { 
    results = document.getElementsByTagName(name); 
    store.cache[name] = results; 
  } 
 
  return results; 
} 
store.cache = {}; 
