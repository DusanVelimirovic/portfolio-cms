// Default schema for Testimonial Section
export default {
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields:[
        { 
            name:'name',// Name of the person witch leav testimonial
            title:'Name',
            type: 'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        }
    ]
};