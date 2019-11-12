exports.getPosts = (req, res)=>{
    const posts = {
        posts:[
            {
                name:'Post1',
                content:'Hello from first post kurwa'
            }
        ]
    }
    res.status(200).json(posts);
}

exports.postPost = (req, res)=>{
    res.status(201).json({
        message:'Post successfuly added!'
    })
}