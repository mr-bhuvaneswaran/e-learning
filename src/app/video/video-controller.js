'use strict';

function videoCtrl($scope, $mdDialog){
    
    $(document).ready(function(){
        var slides = {}
    cuepoint.init(slides);
    });

    $scope.clearAll = function(){
        $scope.course= { url: "",
        questions : []
    };
        var slides = {}
        cuepoint.init(slides);
    };

    $scope.preview = function(){
        var slides = {
    10: { action:function(){ alert(1); }},
    15: { action:function(){ alert(5); }},
    20: {action:function(){ alert(10); }},
    }   
        cuepoint.init(slides);
        cuepoint.setTime(0);
        cuepoint.play();
    };
   
    $scope.skills = ['ANGULAR JS','REACT'];
    $scope.course= {
        url : "http://mediastylist.sekiguch.com/demo/cuepoint_JS/movies/video264.mp4",
        questions : [{
            Q:"QUESTION1",
            A:"B" 
        },{
            Q:"QUESTION2",
            A:"C"
        }]
    };
    
    $scope.showAdvanced = function(ev) {
        $mdDialog.show({  
              controller: function ($scope, $mdDialog) {
                            cuepoint.pause();
                            $scope.hide = function() {
                              $mdDialog.hide();
                            };

                            $scope.videoTime = cuepoint.currentTime();

                            $scope.cancel = function() {
                              $mdDialog.cancel();
                              cuepoint.play();
                            };

                            $scope.answer = function(answer) {
                              $mdDialog.hide(answer);
                              cuepoint.play();
                            };
                          },
              templateUrl: 'app/video/questions.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true,
            })
            .then(function(answer) {
              $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
              $scope.status = 'You cancelled the dialog.';
            });
      };
    
        



}
module.exports = videoCtrl;