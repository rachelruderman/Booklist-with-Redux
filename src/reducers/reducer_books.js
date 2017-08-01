//any other file can import this file and it will automatically receive the books reducer
//two step process: 1. create the reducer 2. wire it into the application
export default function(){
  return [
    {title: 'JavaScript: The Good Parts', pages: 101},
    {title: 'Harry Potter', pages: 89},
    {title: 'The Dark Tower', pages: 35},
    {title: 'Eloquent Ruby', pages: 1},
  ]
}
