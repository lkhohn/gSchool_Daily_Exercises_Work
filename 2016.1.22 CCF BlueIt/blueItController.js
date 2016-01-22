angular.module("app")
  .controller("BlueItController", [BlueItController])

function BlueItController(){
  var vm = this;
  vm.addPost = addPost;
  vm.posts = [{
    title:'walk in the woods',
    author: 'Lindsay Hohn',
    description: 'outdoors',
    content:'I spend alot of time walking in the woods',
    date: '01/22/2016 at 10:00AM'
  },
  {
    title:'beer in the woods',
    author:'Giles',
    description:'beer',
    content:'I spend alot of time drinking beer in the woods',
    date: '01/22/2016 at 8:24AM'
  },
  {
    title:'dogs like to hike',
    author: 'Beth Kuhnhein',
    description:'dogs',
    content:'I spend alot of time hiking with my dog in the woods',
    date: '01/21/2016 at 10:24AM'
  },
  {
    title:'hiking in the mountains',
    author: 'Wrede Smith',
    description:'outdoors',
    content:'I spend alot of time hiking in the mountains',
    date: '01/20/2016 at 10:24AM'
  },
  {
    title:'dogs like to sleep',
    author: 'Peggy Kuhnhein',
    description:'dogs',
    content:'My dog spends alot of time sleeping',
    date: '01/22/2016 at 5:24AM'
  },
  {
    title:'beer in the mountains',
    author: 'Garth Kuhnhein',
    description:'beer',
    content:'I spend alot of time drinking beer in the moutains',
    date: '01/22/2016 at 1:24AM'
  }
];

  function addPost(){
    var individualPost = {
      title: vm.title,
      author: vm.author,
      description: vm.description,
      content: vm.content,
      date: Date.now()

    }
    vm.posts.push(individualPost);
  }
}
