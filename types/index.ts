export type  IBackendApiType = {
  url : string 
  method : string
} 

export type CardItem ={
  title:string
  link:{text:string; href:string}
  items:{
    name:string
    items?:string[]
    image:string
    href:string
  }[]
}

