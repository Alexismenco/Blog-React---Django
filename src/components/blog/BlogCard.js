import { Link } from "react-router-dom"

function BlogCard(data){
    let post = data && data.data
    
    return(
        <div  >
           <div className="flex flex-col rounded-lg shadow-lg overflow-hidden degradado">
                <div className="flex-shrink-0 p-1">
                    <img className="h-48 w-full object-cover" src={post.thumbnail} alt="" />
                </div>
                <div className="flex-1  p-6 flex flex-col justify-between">
                <div className="flex-1 text-center">
                  
                    <Link to={`/blog/post/${post.slug}`} className="block mt-2">
                    <p className="text-xl font-semibold text-dark">{post.title}</p>
                    <p className="mt-3 text-base text-dark">{post.description}</p>
                    </Link>
                </div>
                <p className="font-medium text-base text-indigo-600 mt-5">
                    <Link to={`/blog/categories/${post.category.id}`} className=" hover:underline text-indigo-700">
                       Categoria {post.category.name}
                    </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard