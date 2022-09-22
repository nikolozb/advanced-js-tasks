var application = {
  alertBox: function (value) {
    console.log(value);
  },
  initialize: function () {
    setTimeout(
      function () {
        // at this moment setTimeout is called by window, that's why context is window
        this.alertBox("hello world");
      }.bind(this),
      2000
    );
  },
};

application.initialize();
