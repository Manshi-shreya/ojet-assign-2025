/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
<<<<<<< HEAD
define(['../accUtils', "knockout",
  "oj-c/checkbox",
  "ojs/ojinputtext",
  "ojs/ojbutton",
  "ojs/ojcollapsible",
  "ojs/ojdrawerlayout", "ojs/ojbutton", "ojs/ojnavigationlist"],
 function(accUtils, ko) {
=======
define(['../accUtils'],
 function(accUtils) {
>>>>>>> a46480fe3dadd8a2352ed1e460da397b0e2e4049
    function DashboardViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
<<<<<<< HEAD
       this.value = ko.observable("");

    this.startOpened = ko.observable(false);

    this.startToggle = () => {
      this.startOpened(!this.startOpened()); // toggle
    }

    this.submitname = (event) => {
      console.log(this.value());
    };
=======
>>>>>>> a46480fe3dadd8a2352ed1e460da397b0e2e4049
      this.connected = () => {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        // Implement further logic if needed
<<<<<<< HEAD
// this.formState = ko.observable('enabled');
// this.placeholder = ko.computed(() => {
//                   return this.booleans.indexOf('placeholder') != -1;
//               });
//               this.required = ko.computed(() => {
//                   return this.booleans.indexOf('required') != -1;
//               });
//               this.inputTextValue = ko.computed(() => {
//                   let shortText = 'text';
//                   return this.valueLength() === 'short'
//                       ? shortText
//                       : this.valueLength() === 'long'
//                           ? shortText + longTextSuffix
//                           : null;
//               });
//               this.inputPasswordValue = ko.computed(() => {
//                   let shortText = 'text';
//                   return this.valueLength() === 'short'
//                       ? shortText
//                       : this.valueLength() === 'long'
//                           ? shortText + longTextSuffix
//                           : null;
//               });
//                this.labelHint1 = ko.computed(() => {
//                   return this.labelPrefix() + 'input text';
//               });
//                this.labelHint2 = ko.computed(() => {
//                   return this.labelPrefix() + 'input password';
//               });
//                this.labelHint19 = ko.computed(() => {
//                   return this.labelPrefix() + 'select single';
//               });

=======
>>>>>>> a46480fe3dadd8a2352ed1e460da397b0e2e4049
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
