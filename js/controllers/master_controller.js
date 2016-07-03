angular.module('imageUpload')

.controller('MasterController', MasterController)

function MasterController($scope, $firebaseArray) {
  var imagesRef = new Firebase("https://imageuploadangularfirebase.firebaseio.com/images");
  $scope.images = $firebaseArray(imagesRef);


  $scope.addImage = function(image) {
    $scope.images.$add({image: image})

    .then(function(data){
    })
  }

}
