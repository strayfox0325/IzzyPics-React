// Fetching Sanity data

export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
}

export const categories = [
    {
      name: 'music',
      image: 'https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg',
    },
    {
      name: 'food',
      image: 'https://img.taste.com.au/x7k1EA4i/taste/2020/05/jun20_crispy-layered-potato-bake-161708-1.jpg',
    },
    {
      name: 'wallpaper',
      image: 'https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
    {
      name: 'summer',
      image: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      name: 'aesthetic',
      image: 'https://i.pinimg.com/236x/72/8c/b4/728cb43f48ca762a75da645c121e5c57.jpg',
    },
    {
      name: 'galaxy',
      image: 'https://media.istockphoto.com/photos/background-of-galaxy-and-stars-picture-id1035676256?k=20&m=1035676256&s=170667a&w=0&h=z_l2R1_XsBbZy6n6rOr71DqkQq4mEGpuOxzzCgoVMgM=',
    },
    {
      name: 'nature',
      image: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88',
    },
    {
      name: 'art',
      image: 'https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200',
    }, {
      name: 'travel',
      image: 'https://www.gomeltourist.com/wp-content/uploads/2021/11/Travel.jpg',
    },
    {
      name: 'quotes',
      image: 'https://parade.com/wp-content/uploads/2019/10/Life-Quotes-Dolly-680x430.jpg',
    }, {
      name: 'cats',
      image: 'https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip',
    }, {
      name: 'dogs',
      image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
    },
    {
      name: 'others',
      image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
    },
  ];