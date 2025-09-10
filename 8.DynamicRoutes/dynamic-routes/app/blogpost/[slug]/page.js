export default function page({params}){
    //fetch your blog post by its slug
    let languages=["python","javascript","java","cpp","cs"]
    if(languages.includes(params.slug)){
        return <div>My Post:{params.slug}</div>
    }else{
        return <div>Post not found</div>
    }
    return(<div>My Post:{params.slug}</div>)
}

// [...val]= all slug contain in the form of array in single link