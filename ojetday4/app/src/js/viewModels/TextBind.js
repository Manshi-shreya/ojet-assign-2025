define(['knockout'], function(ko) {
  function MainViewModel() {
    this.message = ko.observable("Hello, Assignment-1 of Day-4 is related to oj-bind-text!.");
  }
  return new MainViewModel();
});