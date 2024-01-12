export const AllProduct =[
    {
        id:1,
        title:'name',
        img:"",
        imgs:'',
        
    }
]

{
    AllProduct  && AllProduct.map((data)=>{
        return(
            <div>
                {data?.title}
            </div>
        )
    })
}