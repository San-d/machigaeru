'use strict';

//custom validation for any name
// var VALID_NAME_REGEXP = /^[a-zA-Z\s]+$/;
// angular.module('appbuilder').directive('validname', function() {
//   return {
//     require: 'ngModel',
//     link: function(scope, elm, attrs, ctrl) {
//       ctrl.$parsers.unshift(function(viewValue) {
//         if (VALID_NAME_REGEXP.test(viewValue)) {
//           // it is valid
//           ctrl.$setValidity('validname', true);
//           return viewValue;
//         } else {
//           // it is invalid, return undefined (no model update)
//           ctrl.$setValidity('validname', false);
//           return undefined;
//         }
//       });
//     }
//   };
// });

// //custom validaton for empty input fields
// angular.module('appbuilder').directive('notempty', function() {
//   return {
//     require: 'ngModel',
//     link: function(scope, elm, attrs, ctrl) {
//       ctrl.$parsers.unshift(function(viewValue) {
//         if (viewValue != '' || viewValue != 'undefined') {
//           // it is valid
//           ctrl.$setValidity('notempty', true);
//           return viewValue;
//         } else {
//           // it is invalid, return undefined (no model update)
//           ctrl.$setValidity('notempty', false);
//           return undefined;
//         }
//       });
//     }
//   };
// })

// //custom validation for US zip codes
// var VALID_ZIP_REGEXP = /^\d{5}(-\d{4})?$/;
// angular.module('appbuilder').directive('validzip', function() {
//   return {
//     require: 'ngModel',
//     link: function(scope, elm, attrs, ctrl) {
//       ctrl.$parsers.unshift(function(viewValue) {
//         if (VALID_ZIP_REGEXP.test(viewValue)) {
//           // it is valid
//           ctrl.$setValidity('validzip', true);
//           return viewValue;
//         } else {
//           // it is invalid, return undefined (no model update)
//           ctrl.$setValidity('validzip', false);
//           return undefined;
//         }
//       });
//     }
//   };
// });

// //custom validation for US phone numbers
// var VALID_PHONE_REGEXP = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
// angular.module('appbuilder').directive('validphone', function() {
//   return {
//     require: 'ngModel',
//     link: function(scope, elm, attrs, ctrl) {
//       ctrl.$parsers.unshift(function(viewValue) {
//         if (VALID_PHONE_REGEXP.test(viewValue)) {
//           // it is valid
//           ctrl.$setValidity('validphone', true);
//           return viewValue;
//         } else {
//           // it is invalid, return undefined (no model update)
//           ctrl.$setValidity('validphone', false);
//           return undefined;
//         }
//       });
//     }
//   };
// });

// //custom validation for email address
// var VALID_EMAIL_REGEXP = /^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b$/;
// angular.module('appbuilder').directive('validemail', function() {
//   return {
//     require: 'ngModel',
//     link: function(scope, elm, attrs, ctrl) {
//       ctrl.$parsers.unshift(function(viewValue) {
//         if (VALID_EMAIL_REGEXP.test(viewValue)) {
//           // it is valid
//           ctrl.$setValidity('validemail', true);
//           return viewValue;
//         } else {
//           // it is invalid, return undefined (no model update)
//           ctrl.$setValidity('validemail', false);
//           return undefined;
//         }
//       });
//     }
//   };
// });

