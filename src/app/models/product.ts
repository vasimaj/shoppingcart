export class Product
 {
    id: number;
    name: string;
    description: string;
    price: number;
    ImageUrl: string;
    
  

    constructor(id:any, name:any, description='', price=0, ImageUrl='https://scx2.b-cdn.net/gfx/news/hires/2018/1-rubikscube.jpg')
       {
        this.id= id
        this.name= name
        this.description= description
        this.price= price
        this.ImageUrl= ImageUrl
    }
}
