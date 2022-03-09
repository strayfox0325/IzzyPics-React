// Schema for PostedBy document
export default {
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference',
    to: [{ type: 'user'}]
}