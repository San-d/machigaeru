'use strict';

/*
	Provider Portal custom directives
*/
// angular.module('appbuilder').directive('ngThumb', ['$window', function($window) {
//     var helper = {
//         support: !!($window.FileReader && $window.CanvasRenderingContext2D),
//         isFile: function(item) {
//             return angular.isObject(item) && item instanceof $window.File;
//         },
//         isImage: function(file) {
//             var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
//             return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
//         }
//     };

//     return {
//         restrict: 'A',
//         template: '<canvas/>',
//         link: function(scope, element, attributes) {
//             if (!helper.support) return;

//             var params = scope.$eval(attributes.ngThumb);

//             if (!helper.isFile(params.file)) return;
//             if (!helper.isImage(params.file)) return;

//             var canvas = element.find('canvas');
//             var reader = new FileReader();

//             reader.onload = onLoadFile;
//             reader.readAsDataURL(params.file);

//             function onLoadFile(event) {
//                 var img = new Image();
//                 img.onload = onLoadImage;
//                 img.src = event.target.result;
//             }

//             function onLoadImage() {
//                 var width = params.width || this.width / this.height * params.height;
//                 var height = params.height || this.height / this.width * params.width;
//                 canvas.attr({ width: width, height: height });
//                 canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
//             }
//         }
//     };
// }]);

// // It is attached to an element that catches the event drop file
// angular.module('appbuilder').directive('ngFileDrop', [ '$fileUploader', function ($fileUploader) {
//     'use strict';

//     return {
//         // don't use drag-n-drop files in IE9, because not File API support
//         link: !$fileUploader.isHTML5 ? angular.noop : function (scope, element, attributes) {
//             element
//                 .bind('drop', function (event) {
//                     var dataTransfer = event.dataTransfer ?
//                         event.dataTransfer :
//                         event.originalEvent.dataTransfer; // jQuery fix;
//                     if (!dataTransfer) return;
//                     event.preventDefault();
//                     event.stopPropagation();
//                     scope.$broadcast('file:removeoverclass');
//                     scope.$emit('file:add', dataTransfer.files, scope.$eval(attributes.ngFileDrop));
//                 })
//                 .bind('dragover', function (event) {
//                     var dataTransfer = event.dataTransfer ?
//                         event.dataTransfer :
//                         event.originalEvent.dataTransfer; // jQuery fix;

//                     event.preventDefault();
//                     event.stopPropagation();
//                     dataTransfer.dropEffect = 'copy';
//                     scope.$broadcast('file:addoverclass');
//                 })
//                 .bind('dragleave', function () {
//                     scope.$broadcast('file:removeoverclass');
//                 });
//         }
//     };
// }])

// // It is attached to an element which will be assigned to a class "ng-file-over" or ng-file-over="className"
// angular.module('appbuilder').directive('ngFileOver', function () {
//     'use strict';

//     return {
//         link: function (scope, element, attributes) {
//             scope.$on('file:addoverclass', function () {
//                 element.addClass(attributes.ngFileOver || 'ng-file-over');
//             });
//             scope.$on('file:removeoverclass', function () {
//                 element.removeClass(attributes.ngFileOver || 'ng-file-over');
//             });
//         }
//     };
// });

// angular.module('appbuilder').directive("ngFileSelect",function(){    
//     return {
//         link: function($scope,el){          
//             el.bind("change", function(e){          
//                 $scope.file = (e.srcElement || e.target).files[0];
//                 $scope.onFileSelect();
//             });          
//         }        
//     }
// });
