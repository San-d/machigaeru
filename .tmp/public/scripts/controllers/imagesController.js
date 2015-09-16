/* MANAGE IMGES */


// angular.module('appbuilder').controller('manageImagesController', ['$scope', '$fileUploader', 'Global', '$http', '$upload', 'fileReader', function ($scope, $fileUploader, Global, $http, $upload, fileReader) {

//     //console.log('manageImagesController starting...');
//     $scope.showUploadOfficeImages = false;
//     $scope.showUploadOtherImages = false;
//     $scope.showUploadHeadShotImages = false;

//     function refreshDetails() {
//         hideAll();
//         /*
//         $scope.showUploadOfficeImages = false;
//         $scope.showUploadOtherImages = false;
//         $scope.showUploadHeadShotImages = false;
//         $http.get('/app/getProviderDetails').success(function (data) {
//             $scope.OfficeImages = [];
//             $scope.OtherImages = [];
//             $scope.HeadshotImages = [];
//             if (typeof data != 'undefined') {
//                 if(data.ProviderDetails.ProviderDirectoryInfo.Photos == '' || data.ProviderDetails.ProviderDirectoryInfo.Photos == null) {
//                     $scope.ShowNoOfficeImages = true;
//                     $scope.ShowNoOtherImages = true;
//                     $scope.ShowNoHeadShotImages = true;
//                     $scope.OfficeImages = [];
//                     $scope.OtherImages = [];
//                     $scope.HeadshotImages = [];
//                 } else {
//                     $scope.ShowNoOfficeImages = false;
//                     $scope.ShowNoOtherImages = false;
//                     $scope.ShowNoHeadShotImages = false;
//                     $scope.ProviderImages = data.ProviderDetails.ProviderDirectoryInfo.Photos;
//                     for(var i in data.ProviderDetails.ProviderDirectoryInfo.Photos) {
//                         if(data.ProviderDetails.ProviderDirectoryInfo.Photos[i].Type === "OfficeImage") {
//                             $scope.OfficeImages.push(data.ProviderDetails.ProviderDirectoryInfo.Photos[i]);
//                         } else if(data.ProviderDetails.ProviderDirectoryInfo.Photos[i].Type === "OtherImage") {
//                             $scope.OtherImages.push(data.ProviderDetails.ProviderDirectoryInfo.Photos[i]);
//                         } else if(data.ProviderDetails.ProviderDirectoryInfo.Photos[i].Type === "HeadShotImage") {
//                             $scope.HeadshotImages.push(data.ProviderDetails.ProviderDirectoryInfo.Photos[i]);
//                         }
//                     }

//                     if($scope.OfficeImages == '' || $scope.OfficeImages == null) {
//                         $scope.ShowNoOfficeImages = true;
//                     }
//                     if($scope.OtherImages == '' || $scope.OtherImages == null) {
//                         $scope.ShowNoOtherImages = true;
//                     }
//                     if($scope.HeadshotImages == '' || $scope.HeadshotImages == null) {
//                         $scope.ShowNoHeadShotImages = true;
//                     } else {
//                         //$scope.HeadshotImage = $scope.HeadshotImages[$scope.HeadshotImages.length];
//                         // console.log("$scope.HeadshotImage: " + JSON.stringify($scope.HeadshotImages.length));
//                         // var length = $scope.HeadshotImages.length;
//                         // $scope.HeadShotImage = $scope.HeadshotImages[length];
//                         // console.log("$scope.HeadshotImage: " + JSON.stringify($scope.HeadshotImages[length]));
//                         for(var i in $scope.HeadshotImages) {
//                             $scope.HeadShotImage = $scope.HeadshotImages[i];
//                             //console.log("$scope.HeadshotImage: " + JSON.stringify($scope.HeadShotImage));
//                         }
//                     }
//                 }
//             }
//         });
//         */
//     }
//     refreshDetails();

//     $scope.addOfficeImage = function() {
//         // $scope.showUploadOfficeImages = true;
//         // $scope.showAddOfficeMessage = true;
//         document.getElementById("officeupfile").click();
//     }
//     $scope.addOtherImage = function() {
//         // $scope.showUploadOtherImages = true;
//         // $scope.showAddOtherMessage = true;
//         document.getElementById("otherupfile").click();
//     }
//     $scope.addHeadShotImage = function() {
//         //document.getElementById("headshotupfile").click();
//         $('#headshotupfile').click();
//     }
//     $scope.moveUp = function(searchID) {
//         //console.log('move up ' + searchID);
//         $http.post('/app/updateImageDisplayOrder', {_id:searchID, order:'up'}).success(function (data) {
//             //console.log('move success!');
//             refreshDetails()
//         });
//     }
//     $scope.moveDown = function(searchID) {
//         //console.log('move down ' + searchID);
//         $http.post('/app/updateImageDisplayOrder', {_id:searchID, order:'down'}).success(function (data) {
//             //console.log('move success!');
//             refreshDetails();
//         });
//     }
//     $scope.deleteImage = function (searchID, type, URL) {
//         console.log("here in delete function");
//         if(type === "OtherImage") {
//             $scope.showEditOtherImageMessage = true;
//         } else if(type === "OfficeImage") {
//             $scope.showEditOfficeImageMessage = true;
//         } else {
//             //console.log("ERROR");
//         }
//         //$scope.showMessage = false;
//         //$scope.showMessageforadd = false;
//         $http.delete('/app/deleteImages/'+searchID+URL).success(function(datadeleted) {
//              if (typeof datadeleted != 'undefined') {
//                 //console.log("scope message : " + JSON.stringify(datadeleted));
//                 //$scope.showMessage = true;
//                 if(datadeleted.err==0){
//                     $scope.showSuccessMessage = true;
//                     $scope.successMessage = 'Image deleted successfully!';
//                     setTimeout(function() {
//                         refreshDetails();
//                     }, 4000);
//                 }else{
//                     $scope.showErrorMessage = true;
//                     $scope.errorMessage = 'Some error has occured, please try again later!';
//                     console.log($scope.errorMessage);
//                     setTimeout(function() {
//                         refreshDetails();
//                     }, 4000);
//                 }
//             }
//             else
//             {
//                 //console.log("Erro is generatd");
//             }
//             //refreshDetails();
           
//             //console.log('DELETED!');
//         });
//     };

//     $scope.editImage = function (searchID, type) {
//         // console.log('editImage searchID: ' + searchID);
//         // console.log('editImage Type: ' + type);
//         angular.forEach($scope.ProviderImages, function(image) {
//             if(searchID == image._id) {
//                 $scope.providerImageData = image;
//                 if(type === "OtherImage") {
//                     $scope.showOtherImageEditForm = true;
//                     $scope.showEditOtherImageMessage = true;
//                 } else if(type === "OfficeImage") {
//                     $scope.showOfficeImageEditForm = true;
//                     $scope.showEditOfficeImageMessage = true;
//                 } else {
//                     //console.log("ERROR");
//                 }
//                 //$scope.showEditForm = true;
//             }
//         });
//     }

//     $scope.saveEditedImage = function () {
//         // console.log('saveEditedImage');
//         // console.dir(JSON.stringify($scope.providerImageData));
//         $http.post('/app/updateImageCaption', $scope.providerImageData).success(function (data) {
//             $scope.providerImageData = {}; // clear out the form
//             $scope.ProviderEditForm.$setPristine();
//             //$scope.showEditForm = false;
//             //console.log("scope msg" + JSON.stringify(data));
//             if (typeof data != 'undefined') {
//                 //console.log("scope message : " + JSON.stringify(data));
//                 //$scope.showOfficeImageMessage = true;
//                 if(data.err==0)
//                 {
//                     $scope.showSuccessMessage = true;
//                     $scope.successMessage = 'Image details updated successfully!';
//                     setTimeout(function() {
//                         refreshDetails();
//                     }, 4000);
//                 }else{
//                     $scope.showErrorMessage = true;
//                     $scope.errorMessage = 'Some error has occured, please try again after sometime';
//                     setTimeout(function() {
//                         refreshDetails();
//                     }, 4000);
//                 }
//             } else {
//                 //console.log("Error is generatd");
//                 $scope.showErrorMessage = true;
//                 $scope.errorMessage = 'Some error has occured, please try again after sometime';
//                 setTimeout(function() {
//                     refreshDetails();
//                 }, 4000);
//             }
            
//         }).error(function(err) {
//             //console.log("Error : " + JSON.stringify(err));
//         });
//     }

//     $scope.cancelEditCaption = function() {
//         $scope.showEditForm = false;
//         refreshDetails();
//     }

//     $scope.onFileSelect = function($files, modelData) {
//         if (! $files ) {
//             return;
//         }
//         var modelData = modelData ? modelData : {};
//         $scope.showHeadShotImagePreview = true;
//         $scope.showUploadHeadShotImages = true;
//         $scope.showAddHeadShotMessage = true;
        
//         //$files: an array of files selected, each file has name, size, and type.
//         for (var i = 0; i < $files.length; i++) {

//             imageType = '|' + $files[i].type.toLowerCase().slice($files[i].type.lastIndexOf('/') + 1) + '|';
//                console.log("Image type: " + JSON.stringify(imageType));
//             if('|jpg|png|jpeg|bmp|gif|'.indexOf(imageType) !== -1) {// only expects jpg,png,jpeg,bmp and gif files
//                 //console.log("valid image");
//                 $scope.progress = 0;
                
//                 var file = $files[i];
//                 console.log("FILE SIZE: " + JSON.stringify(file.size));
//                 console.log("FILE NAME: " + JSON.stringify(file.name));
//                 console.log("FILE TYPE: " + JSON.stringify(file.type));
//                 $scope.uploadedFileName = file.name;
//                 $scope.uploadedFileSize = file.size;

                
//                 fileReader.readAsDataUrl($scope.file, $scope).then(function(result) {
//                         console.log('SRC: '+ JSON.stringify(modelData));
//                         $scope.imageSrc = result;
//                         $scope.pageType = modelData.pageType;
//                         $scope.upload = $upload.upload({
//                             url: '/appbuilder/uploadImage',
//                             data: modelData,
//                             method: 'POST',
//                             file: file,
//                             fileFormDataName: 'avatar'
//                         }).progress(function(evt) {
//                             //console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
//                             $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
//                         }).success(function(data, status, headers, config) {
//                             // file uploaded successfully
//                             console.log("file uploaded successfully");
//                             console.log("data: " + JSON.stringify(data));
//                             // console.log("status: " + JSON.stringify(status));
//                             // console.log("headers: " + JSON.stringify(headers));
//                             // console.log("config: " + JSON.stringify(config));

//                             $scope.statusSuccess = true;
//                             $scope.selectedIndex = "";
//                             //$scope.showSuccessMessage = true;
//                             $scope.successMessage = 'Image added successfully'
//                             setTimeout(function() {
//                                 refreshDetails();
//                                 $scope.getAppPageImages($scope.pageType);
//                             }, 1000);
//                         })
//                         .error(function(err, status, headers, config) {
//                             $scope.statusError = true;
//                             $scope.showErrorMessage = true;
//                             $scope.errorMessage = 'An error has occurred, please try again later'
//                             setTimeout(function() {
//                                 refreshDetails();
//                             }, 4000);
//                         });
//                 });
//             } else {
//                 //console.log("not valid image");
//                 $scope.statusError = true;
//                 $scope.showErrorMessage = true;
//                 $scope.errorMessage = 'please select a valid image and try again!'
//                 setTimeout(function() {
//                     refreshDetails();
//                 }, 4000);
//             }
            
//         }
//     }

//     // $scope.abort = function(index) {
//     //     $scope.upload[index].abort(); 
//     //     $scope.upload[index] = null;
//     // };

//     function hideAll() {
//         $scope.showUploadHeadShotImages = false;
//         $scope.showAddHeadShotMessage = false;
//         $scope.statusSuccess = false;
//         $scope.showSuccessMessage = false;
//         $scope.successMessage = ''
//         $scope.statusError = false;
//         $scope.showErrorMessage = false;
//         $scope.errorMessage = '';
//         $scope.showHeadShotImagePreview = false;
//         $scope.imageSrc = '';
//         $scope.uploadedFileSize = '';
//         $scope.showOfficeImageEditForm = false;
//         $scope.showEditOfficeImageMessage = false;


//         $scope.showUploadOfficeImages = false;
//         $scope.showOfficeImagePreview = false;
//         $scope.showOtherImagePreview = false;
//         $scope.showAddOfficeMessage = false;
//         $scope.showOtherImageEditForm = false;
//         $scope.showEditOtherImageMessage = false;
//     }
// }]);

