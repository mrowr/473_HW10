/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

// create the module
var app = angular.module("CommentsApp", []);

// create a controller for the view
// $scope object is a dependency injection
app.controller("CommentsAppCtrl", function($scope) {
    "use strict";
    // attach data to $scope we want on the view
    // use data binding for both .comment-input and .comments
    $scope.commentInput="";
    // add initial comments to the $scope
    $scope.comments =["This is the first comment!",
        "Here's the second one!",
        "And this is one more.",
        "Here is another one"
    ];

    // add a method to the controller for addCommentFromInputBox
    $scope.addCommentFromInputBox = function(){
        $scope.comments.push($scope.commentInput);
        $scope.commentInput="";
    };

    $scope.addCommentKeyPress = function (event) {
        if (event.keyCode === 13) {
            $scope.addCommentFromInputBox();                
        }
    };
});
