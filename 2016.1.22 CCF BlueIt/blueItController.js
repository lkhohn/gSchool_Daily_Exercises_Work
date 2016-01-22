angular.module("app")
  .controller("BlueItController", [BlueItController])

function BlueItController(){
  var vm = this;
  vm.addPost = addPost;
  vm.sort = sort;
  vm.upVote = upVote;
  vm.downVote = downVote;
  vm.vote = 0;
  vm.addComment = addComment;

  vm.posts = [{
    title:'walk in the woods',
    author: 'Lindsay Hohn',
    description: 'outdoors',
    content:'I spend alot of time walking in the woods',
    date: '01/22/2016 at 10:00AM',
    comment: ['whoa awesome', 'so awesome']
  },
  {
    title:'beer in the woods',
    author:'Giles',
    description:'beer',
    content:'I spend alot of time drinking beer in the woods',
    date: '01/22/2016 at 8:24AM',
    comment: ['whoa awesome', 'so awesome']  },
  {
    title:'dogs like to hike',
    author: 'Beth Kuhnhein',
    description:'dogs',
    content:'I spend alot of time hiking with my dog in the woods',
    date: '01/21/2016 at 10:24AM',
    comment: ['whoa awesome', 'so awesome']
  },
  {
    title:'hiking in the mountains',
    author: 'Wrede Smith',
    description:'outdoors',
    content:'I spend alot of time hiking in the mountains',
    date: '01/20/2016 at 10:24AM',
    comment: ['whoa awesome', 'so awesome']
  },
  {
    title:'dogs like to sleep',
    author: 'Peggy Kuhnhein',
    description:'dogs',
    content:'My dog spends alot of time sleeping',
    date: '01/22/2016 at 5:24AM',
    comment: ['whoa awesome', 'so awesome']
  },
  {
    title:'beer in the mountains',
    author: 'Garth Kuhnhein',
    description:'beer',
    content:'I spend alot of time drinking beer in the moutains',
    date: '01/22/2016 at 1:24AM',
    comment: ['whoa awesome', 'so awesome']
  }
];

  function addPost(){
    var individualPost = {
      vote: vm.vote,
      title: vm.title,
      author: vm.author,
      description: vm.description,
      content: vm.content,
      date: Date.now(),
      comment: vm.comment
    }
    vm.posts.push(individualPost);
    vm.title='';
    vm.author='';
    vm.description='';
    vm.content='';
    vm.comment='';
  }

  function sort(){
    vm.sortType = 'name';
    vm.sortReverse = false;
  }

  function upVote(){
    // console.log(vm.vote)
      vm.vote++
     }

  function downVote(){
    // console.log(vm.vote)
    vm.vote--
  }

  function addComment(){
      vm.posts.push(comment);
  }

}
