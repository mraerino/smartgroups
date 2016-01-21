(function(){
  'use strict';

  angular.module('board')
         .service('boardService', ['$q', BoardService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function BoardService($q){
    var boards = [
      {
          id: 1,
          name: "Test-Board",
          slug: 'test-board',
          creator_id: 1,
          join_code: "ewfgertg343463",
          posts: [
              {
                  id: 1,
                  created_by: {
                      id: 1,
                      name: "Marcus Weiner"
                  },
                  created_at: "20.01.2016 20:43",
                  content: "Ein kleiner Test ohne lorem ipsum, bzw doch eher mit.",
                  likes: [],
                  parent: null
              },
              {
                  id: 2,
                  created_by: {
                      id: 1,
                      name: "Marcus Weiner"
                  },
                  created_at: "20.01.2016 20:45",
                  content: "Der zweite test, bzw doch eher mit.",
                  likes: [],
                  parent: null
              }
          ]
      }
    ];

    // Promise-based API
    return {
      loadCurrentBoard : function() {
        // Simulate async nature of real remote calls
        return $q.when(boards[0]);
      }
    };
  }

})();
