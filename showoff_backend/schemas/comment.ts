// export default {
//     name:'Comments',
//     title:'Comments',
//     type:'document',
//     fields: [
//         {name:'PostedBy',
//         title:'PostedBy',
//         type:'PostedBy'},
//         {name:'Comments',
//         title:'Comments',
//         type:'string'}
//     ]
// }
export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'postedBy',
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'string',
      },
    ],
  };
  