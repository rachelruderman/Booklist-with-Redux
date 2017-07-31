//any other file can import this file and it will automatically receive the books reducer
//two step process: 1. create the reducer 2. wire it into the application
export default function(){
  return [
    {title: 'JavaScript: The Good Parts'},
    {title: 'Harry Potter'},
    {title: 'The Dark Tower'},
    {title: 'Eloquent Ruby'},
  ]
}
