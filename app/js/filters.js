'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('tablearray', function() {
  return function(inputarray) {
      var tablearray = [];
      for (var i=0; i<inputarray.length; i++) {
          if(i % 4 == 0) tablearray.push([]);
          tablearray[tablearray.length-1].push(inputarray[i]);
      }

    return tablearray;
  };
});
