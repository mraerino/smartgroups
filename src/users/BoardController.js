(function () {

    angular
        .module('board')
        .controller('BoardController', [
            'boardService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
            BoardController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function BoardController(boardService, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.board = {};

        // Load all registered users

        boardService
            .loadCurrentBoard()
            .then(function (board) {
                self.board = board;
                console.log(board);
            });

        // *********************************
        // Internal methods
        // *********************************

        function actionLike(post) {

        }

        function actionComment(post) {

        }

    }

})();
