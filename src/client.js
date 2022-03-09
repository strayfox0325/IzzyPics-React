import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Creating a client to store in the database
export const client = sanityClient({  
        projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
        dataset: 'production',
        apiVersion: '2022-03-09',
        useCdn: true,
        token: process.env.REACT_APP_SANITY_TOKEN,
    });

// Creating an image for the user
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);