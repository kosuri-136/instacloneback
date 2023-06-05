import pic1 from '../../Images/ganesh-hd-wallpapers.jpg'
const projectListData =()=>{
    const initalData = [
        {name:" GANESH MAHARAJ",
        location:"Kaialasa",
        likes:64,
        description: "The first God",
        PostImage: pic1,
        date: new Date().toString().slice(4,15),
        },
        ];
        return initalData
}
export default projectListData